import { allBlogs } from "contentlayer/generated"
import { siteConfig } from "@/config/site"

function convertToContentEncoded(input: string): string {
  // Replace newline characters with HTML line breaks
  const contentEncoded = input.replace(/\n/g, "<br/>")

  // Enclose the content in CDATA section
  // Construct the complete content:encoded element
  return `<![CDATA[${contentEncoded}]]>`
}

function generateRSS() {
  const items = allBlogs.map(
    (blog) => `<item>
                <title>${blog.title}</title>
                <link>${siteConfig.url}${blog.slug}/</link>
                <guid isPermaLink="true">${siteConfig.url}${blog.slug}/</guid>
                <description>${blog.description}</description>
                <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
                <content:encoded>${convertToContentEncoded(
                  blog.body.raw
                )}</content:encoded>
              </item>`
  )

  return `<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
            <channel>
              <title>benjo's blog</title>
              <description>Explore various sofware-related articless.</description>
              <link>${siteConfig.url}</link>
              ${items.join("")}
            </channel>
          </rss>`
}

export function GET() {
  const rss = generateRSS()
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
