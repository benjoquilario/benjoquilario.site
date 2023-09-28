import type { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { allArticles } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Calendar, Clock } from "lucide-react"
import { relativeDate } from "@/lib/date"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { env } from "@/env.mjs"

interface ArticleProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[]
  }
}): Promise<Metadata | undefined> {
  const article = allArticles.find(
    (article) => article.slugAsParams === params.slug.join("/")
  )

  if (!article) {
    return
  }

  const { title, date: publishedTime, description, slugAsParams } = article

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${env.NEXT_PUBLIC_APP_URL}/articles/${slugAsParams}`,
    },
    publisher: `${siteConfig.name}`,
  }
}

async function getArticleFromParams(params: ArticleProps["params"]) {
  const slug = params.slug.join("/")
  const article = allArticles.find((article) => article.slugAsParams === slug)

  if (!article) return null

  return article
}

export default async function ArticlePage({ params }: ArticleProps) {
  const article = await getArticleFromParams(params)

  if (!article) notFound()

  return (
    <article className="max-w-none break-words py-6">
      <Link
        href="/"
        className="flex items-center space-x-2 py-2 transition hover:underline hover:underline-offset-2"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <h1 className="my-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
        {article.title}
      </h1>
      {article.description && <p>{article.description}</p>}

      <hr className="my-4" />
      <div className="flex flex-wrap items-stretch justify-start gap-3">
        <div className="flex shrink-0 items-center gap-2">
          <Calendar className="h-4 w-4" aria-hidden />
          <span className="text-sm text-muted-foreground/90">
            {relativeDate(article.date)}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden />
          <span className="text-sm text-muted-foreground/90">
            {article.timeToRead} min read
          </span>
        </div>
      </div>
      <hr className="my-4" />
      <Mdx code={article.body.code} />
    </article>
  )
}
