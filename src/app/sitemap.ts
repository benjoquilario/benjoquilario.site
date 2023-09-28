import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { allArticles } from "contentlayer/generated"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = allArticles.map((article) => ({
    url: `${siteConfig.url}articles/${article.slugAsParams}`,
    lastModified: article.date,
  }))

  const routes = siteConfig.mainNav.map(({ href }) => ({
    url: `${siteConfig.url}${href}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...articles]
}
