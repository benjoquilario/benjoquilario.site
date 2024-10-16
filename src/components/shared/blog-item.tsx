"use client"

import { Calendar, Clock } from "lucide-react"
import React from "react"
import { TypographyH3, TypographyP } from "../typography"
import type { Blog } from "contentlayer/generated"
import { relativeDate } from "@/lib/date"
import Link from "next/link"

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
          <TypographyH3 className="line-clamp-2 text-base font-bold md:text-lg">
            {blog.title}
          </TypographyH3>
          <TypographyP className="mt-2 line-clamp-3 text-sm leading-7 text-foreground/80 md:text-base">
            {blog.description}
          </TypographyP>
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
