"use client"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import React from "react"
import { TypographyH3 } from "../typography"
import type { Article } from "contentlayer/generated"

type ArticleItemProps = {
  article: Article
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <li className="relative -mx-4">
      <Link
        href={article.slug}
        className="flex rounded-sm px-4 py-4 transition-colors hover:bg-accent"
      >
        <article className="flex flex-col gap-2 rounded-sm">
          <TypographyH3 className="line-clamp-1 text-lg">
            {article.title}
          </TypographyH3>
          <span className="line-clamp-1 text-sm text-muted-foreground md:text-base">
            {article.description}
          </span>
          <div className="flex flex-wrap items-stretch justify-start gap-3">
            <div className="flex shrink-0 items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden />
              <span className="text-sm text-muted-foreground/90">5 months</span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden />
              <span className="text-sm text-muted-foreground/90">
                4 min read
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default ArticleItem
