import { notFound } from "next/navigation"

interface ArticleProps {
  params: {
    slug: string[]
  }
}

async function getArticleFromParams(params: ArticleProps["params"]) {
  const slug = params.slug.join("/")
}

export default async function ArticlePage({ params }: ArticleProps) {
  return <div>{params.slug}</div>
}
