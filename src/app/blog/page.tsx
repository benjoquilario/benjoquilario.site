import type { Metadata } from "next"
import { allBlogs } from "contentlayer/generated"
import { TypographyH3 } from "@/components/typography"
import BlogItem from "@/components/shared/blog-item"

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read my thoughts on software development, design, and more.",
}

export default function Blogs() {
  return (
    <div>
      <TypographyH3 className="text-3xl">
        <span className="text-4xl">B</span>
        logs.
      </TypographyH3>
      <p className="mt-2 text-xs !leading-6 text-muted-foreground md:text-sm">
        Explore various sofware-related articles.
      </p>
      <div className="mt-3">
        <ul>
          {allBlogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </ul>
      </div>
    </div>
  )
}
