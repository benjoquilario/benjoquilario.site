import type { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Calendar, Clock } from "lucide-react"
import { relativeDate } from "@/lib/date"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { env } from "@/env.mjs"

interface BlogProps {
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
  const blog = allBlogs.find(
    (blog) => blog.slugAsParams === params.slug.join("/")
  )

  if (!blog) {
    return
  }

  const { title, date: publishedTime, description, slugAsParams } = blog

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

async function getBlogFromParams(params: BlogProps["params"]) {
  const slug = params.slug.join("/")
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!blog) return null

  return blog
}

export default async function ArticlePage({ params }: BlogProps) {
  const blog = await getBlogFromParams(params)

  if (!blog) notFound()

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
        {blog.title}
      </h1>
      {blog.description && <p>{blog.description}</p>}

      <hr className="my-4" />
      <div className="flex flex-wrap items-stretch justify-start gap-3">
        <div className="flex shrink-0 items-center gap-2">
          <Calendar className="h-4 w-4" aria-hidden />
          <span className="text-sm text-muted-foreground/90">
            {relativeDate(blog.date)}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden />
          <span className="text-sm text-muted-foreground/90">
            {blog.readingTime?.text}
          </span>
        </div>
      </div>
      <hr className="my-4" />
      <Mdx code={blog.body.code} />
    </article>
  )
}
