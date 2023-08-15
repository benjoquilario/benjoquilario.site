"use client"
import React from "react"
import ArticleItem from "@/components/shared/article-item"
import { TypographyH2 } from "../typography"

const Articles = () => {
  return (
    <section className="mb-12 flex flex-col items-start justify-start">
      <TypographyH2>
        <span className="text-4xl">L</span>
        atest Articles
      </TypographyH2>
      <ul className="mt-6 w-full">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </ul>
    </section>
  )
}

export default Articles
