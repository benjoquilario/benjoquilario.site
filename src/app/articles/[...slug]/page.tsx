import { Mdx } from "@/components/mdx-components"
import { allArticles } from "contentlayer/generated"
import { notFound } from "next/navigation"

interface ArticleProps {
  params: {
    slug: string[]
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
    <article className="prose py-6 dark:prose-invert">
      <h1>{article.title}</h1>
      {article.description && <p>{article.description}</p>}

      <hr className="my-4" />

      <Mdx code={article.body.code} />
    </article>
  )
}
