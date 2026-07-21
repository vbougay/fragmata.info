import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Zen background clips are content-stable, immutably named files in
        // public/. Next.js otherwise serves them as `max-age=0,
        // must-revalidate`, forcing a network round-trip (and often a full
        // re-download, since browsers cache 206 range responses poorly under
        // must-revalidate) on every reload. Cache them hard so a reload
        // replays from disk with no delay. Replace a clip by bumping its
        // filename, never in place.
        source: "/zen-bg/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
