import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://abitur.koydo.app/sitemap.xml",
    host: "https://abitur.koydo.app",
  };
}
