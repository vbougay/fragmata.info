import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/_next/", "*/media", "*/media/*"] },
    sitemap: "https://fragmata.info/sitemap.xml",
  };
}
