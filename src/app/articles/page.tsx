import { allArticles } from "contentlayer/generated"
import { TypographyH3 } from "@/components/typography"
import ArticleItem from "@/components/shared/article-item"

export default function Artices() {
  return (
    <div>
      <TypographyH3 className="text-3xl">
        <span className="text-4xl">A</span>
        rticles.
      </TypographyH3>
      <p className="mt-2 text-xs !leading-6 text-muted-foreground md:text-sm">
        Explore various sofware-related articles.
      </p>
      <div className="mt-3">
        <ul>
          {allArticles.map((article) => (
            <ArticleItem article={article} />
          ))}
        </ul>
      </div>
    </div>
  )
}
