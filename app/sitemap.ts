import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  return ["", "/about", "/projects", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
