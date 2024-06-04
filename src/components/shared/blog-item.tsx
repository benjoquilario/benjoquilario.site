"use client"

import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import React from "react"
import { TypographyH3 } from "../typography"
import type { Blog } from "contentlayer/generated"
import { relativeDate } from "@/lib/date"

type BlogItemProps = {
  blog: Blog
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <li className="relative -mx-4">
      <Link
        href={blog.slug}
        className="flex rounded-sm p-4 transition-colors hover:bg-accent"
      >
        <article className="flex flex-col gap-2 rounded-sm">
          <TypographyH3 className="line-clamp-1 text-lg">
            {blog.title}
          </TypographyH3>
          <span className="text-pretty bg-gradient-stop mt-2 line-clamp-2 bg-gradient-to-br from-foreground/70 via-foreground/70 via-40% to-foreground/70 bg-clip-text text-sm !leading-6 text-transparent md:text-base">
            {blog.description}
          </span>
          <div className="flex flex-wrap items-stretch justify-start gap-3">
            <div className="flex shrink-0 items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden />
              <span className="text-sm text-muted-foreground/90">
                {relativeDate(blog.date)}
              </span>
            </div>
            {Boolean(blog.readingTime?.minutes) && (
              <div className="flex shrink-0 items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden />
                <span className="text-sm text-muted-foreground/90">
                  {blog.readingTime?.text}
                </span>
              </div>
            )}
          </div>
        </article>
      </Link>
    </li>
  )
}

export default BlogItem
