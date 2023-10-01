import { type MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { allBlogs } from "contentlayer/generated"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = allBlogs.map((blog) => ({
    url: `${siteConfig.url}articles/${blog.slugAsParams}`,
    lastModified: blog.date,
  }))

  const routes = siteConfig.mainNav.map(({ href }) => ({
    url: `${siteConfig.url}${href}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...blogs]
}
