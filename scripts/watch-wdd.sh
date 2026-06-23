#!/usr/bin/env bash
set -euo pipefail
stty sane 2>/dev/null || true  # no-op without a TTY (e.g. nohup/cron); don't trip `set -e`

# Watch WDD website for new reservoir data and trigger Claude Code to update the app.
# Usage:
#   ./scripts/watch-wdd.sh          # poll every 5 minutes
#   ./scripts/watch-wdd.sh --once   # single check, then exit
#   ./scripts/watch-wdd.sh --force  # run Claude Code regardless of new data, then exit

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
DATA_MANAGER="$PROJECT_DIR/src/utils/dataManager.ts"
# Data source moved to the gov.cy WordPress site (the old moa.gov.cy Lotus Notes
# page18 pages were retired). The pages reject requests without a browser
# User-Agent (HTTP 403), so all curl calls must send $UA.
WDD_URL_EN="https://www.gov.cy/moa-wdd/en/documents/dams-and-off-stream-ponds/reservoir-storage/"
WDD_URL_GR="https://www.gov.cy/moa-wdd/documents/tamieytires-neroy-fragmata-ydatodexamenes/plirotita-fragmaton/"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
POLL_INTERVAL=300  # 5 minutes
LOG_DIR="$PROJECT_DIR/logs"
LOG_FILE="$LOG_DIR/watch-wdd-$(date '+%Y-%m-%d').log"

ONCE=false
FORCE=false
for arg in "$@"; do
  case "$arg" in
    --once)  ONCE=true ;;
    --force) FORCE=true; ONCE=true ;;
  esac
done

mkdir -p "$LOG_DIR"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Parse DD-MMM-YYYY to epoch seconds (macOS date)
date_to_epoch() {
  date -jf "%d-%b-%Y" "$1" "+%s" 2>/dev/null
}

# Read the current latest dataset from dataManager.ts (the static import line)
get_current_latest() {
  grep "^import \* as dataDefault from " "$DATA_MANAGER" \
    | grep -oE '[0-9]{1,2}-[A-Z]{3,}-[0-9]{4}'
}

# Fetch the gov.cy page(s) and extract the newest data date from XLSX links.
# Checks both the English and Greek pages — the Greek page is sometimes updated first.
# Emits the newest date in canonical DD-MMM-YYYY form (e.g. 19-JUN-2026) so the rest
# of the script (date_to_epoch, logging, comparisons) is unchanged.
get_wdd_latest() {
  local html_en html_gr dates newest newest_epoch

  html_en=$(curl -sL --max-time 30 -A "$UA" "$WDD_URL_EN" || true)
  html_gr=$(curl -sL --max-time 30 -A "$UA" "$WDD_URL_GR" || true)

  if [[ -z "$html_en" && -z "$html_gr" ]]; then
    log "ERROR: Failed to fetch gov.cy pages (EN and GR)"
    return 1
  fi

  # The gov.cy reservoir uploads have used two naming schemes:
  #   - DD-MONTHNAME-YYYY-UK.xlsx, e.g. "23-JUNE-2026-UK.xlsx"  (current, since ~23-JUN-2026)
  #   - DD_MM_YYYY-UK.xlsx,        e.g. "19_06_2026-UK.xlsx"     (older)
  # (GR variants for the Greek page.) Skip the "Graphs-*.xlsx" companion file, which
  # still uses the underscore form. Extract the date token (everything before -UK/-GR)
  # and let the loop below parse it with whichever format matches.
  dates=$(printf '%s\n%s\n' "$html_en" "$html_gr" \
    | grep -oE '[0-9]{1,2}[-_][0-9A-Za-z]+[-_][0-9]{4}-(UK|GR)\.xlsx' \
    | grep -iv 'graph' \
    | sed -E 's/-(UK|GR)\.xlsx$//' \
    | sort -u)

  if [[ -z "$dates" ]]; then
    log "ERROR: No XLSX dates found on gov.cy pages"
    return 1
  fi

  newest=""
  newest_epoch=0

  while IFS= read -r d; do
    local ep canon
    # Try each known filename date format; canonicalize to DD-MMM-YYYY (uppercased).
    ep=$(date -jf "%d_%m_%Y" "$d" "+%s" 2>/dev/null) \
      || ep=$(date -jf "%d-%B-%Y" "$d" "+%s" 2>/dev/null) \
      || ep=$(date -jf "%d-%b-%Y" "$d" "+%s" 2>/dev/null) \
      || continue
    if (( ep > newest_epoch )); then
      newest_epoch=$ep
      canon=$(date -jr "$ep" "+%d-%b-%Y" 2>/dev/null | tr '[:lower:]' '[:upper:]')
      newest=$canon
    fi
  done <<< "$dates"

  echo "$newest"
}

main() {
  log "WDD Data Watcher started"
  log "Project: $PROJECT_DIR"
  log "Poll interval: ${POLL_INTERVAL}s"
  [[ "$ONCE" == true ]] && log "Mode: single check"

  while true; do
    current=$(get_current_latest)
    log "Current latest dataset in app: $current"

    wdd_latest=$(get_wdd_latest) || {
      log "Retrying in ${POLL_INTERVAL}s..."
      $ONCE && exit 1
      sleep "$POLL_INTERVAL"
      continue
    }
    log "Latest data on WDD website: $wdd_latest"

    current_epoch=$(date_to_epoch "$current")
    wdd_epoch=$(date_to_epoch "$wdd_latest")

    if (( wdd_epoch > current_epoch )) || [[ "$FORCE" == true ]]; then
      if [[ "$FORCE" == true ]] && (( wdd_epoch <= current_epoch )); then
        log "FORCE MODE: Running Claude Code despite no new data"
      else
        log "NEW DATA FOUND! $wdd_latest is newer than $current"
      fi
      log "Launching Claude Code to update the app..."
      echo ""

      # Run Claude in headless mode, capturing output to console + log
      (cd "$PROJECT_DIR" && claude --dangerously-skip-permissions -p --model sonnet --output-format stream-json "/fetch-and-update") 2>&1 | tee -a "$LOG_FILE"

      log "Claude Code finished. Re-reading current latest..."
      current=$(get_current_latest)
      log "App now at: $current"
    else
      log "No new data (WDD: $wdd_latest, app: $current)"
    fi

    $ONCE && { log "Single check complete."; exit 0; }

    log "Next check in ${POLL_INTERVAL}s..."
    sleep "$POLL_INTERVAL"
  done
}

main
