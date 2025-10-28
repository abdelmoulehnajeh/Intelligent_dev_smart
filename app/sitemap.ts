import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sid.dev"

  const routes = [
    "",
    "/about",
    "/services",
    "/services/web-design",
    "/services/ai-models",
    "/services/mobile-apps",
    "/services/3d-design",
    "/portfolio",
    "/certifications",
    "/contact",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
