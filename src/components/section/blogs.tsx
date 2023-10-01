import * as React from "react"
import BlogItem from "@/components/shared/blog-item"
import { TypographyH2 } from "../typography"
import { allBlogs } from "contentlayer/generated"

const Blogs = () => {
  return (
    <section className="mb-12 flex flex-col items-start justify-start">
      <TypographyH2>
        <span className="text-4xl">L</span>
        atest Posts
      </TypographyH2>
      <ul className="mt-6 w-full">
        {allBlogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </ul>
    </section>
  )
}

export default Blogs
