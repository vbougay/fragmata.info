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
WDD_URL_EN="https://www.moa.gov.cy/moa/wdd/Wdd.nsf/page18_en/page18_en"
WDD_URL_GR="https://www.moa.gov.cy/moa/wdd/wdd.nsf/page18_gr/page18_gr?opendocument"
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

# Fetch the WDD page(s) and extract the newest DD-MMM-YYYY date from XLSX links.
# Checks both the English and Greek pages — the Greek page is sometimes updated first.
get_wdd_latest() {
  local html_en html_gr dates newest newest_epoch

  html_en=$(curl -sL --max-time 30 "$WDD_URL_EN" || true)
  html_gr=$(curl -sL --max-time 30 "$WDD_URL_GR" || true)

  if [[ -z "$html_en" && -z "$html_gr" ]]; then
    log "ERROR: Failed to fetch WDD pages (EN and GR)"
    return 1
  fi

  # Extract dates from XLSX filenames, skip "Graphs". The month may be a 3-letter
  # abbreviation (e.g. "23-MAR-2026 UK.xlsx") or fully spelled out, as WDD does for
  # June/July (e.g. "02-JUNE-2026 UK.xlsx") — so match 3-or-more letters. macOS
  # `date -jf "%d-%b-%Y"` parses both abbreviated and full month names.
  dates=$(printf '%s\n%s\n' "$html_en" "$html_gr" \
    | grep -oE '[0-9]{1,2}-[A-Z]{3,}-[0-9]{4}[^"]*\.xlsx' \
    | grep -iv 'graph' \
    | grep -oE '^[0-9]{1,2}-[A-Z]{3,}-[0-9]{4}' \
    | sort -u)

  if [[ -z "$dates" ]]; then
    log "ERROR: No XLSX dates found on WDD pages"
    return 1
  fi

  newest=""
  newest_epoch=0

  while IFS= read -r d; do
    local ep
    ep=$(date_to_epoch "$d") || continue
    if (( ep > newest_epoch )); then
      newest_epoch=$ep
      newest=$d
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
