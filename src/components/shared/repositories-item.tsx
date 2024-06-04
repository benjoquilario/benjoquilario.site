import Link from "next/link"
import { Book, GitFork, Star, GithubIcon, ExternalLink } from "lucide-react"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { TypographyH3 } from "@/components/typography"

async function getRepos(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/benjoquilario/${repo}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60,
      },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function RepositoriesItem({
  repoName,
}: {
  repoName: string
}) {
  const repositories = await getRepos(repoName)

  return (
    <li className="group relative -mx-4 md:-mx-0">
      <Link
        href={repositories.html_url}
        className="flex rounded-sm p-4 transition-colors group-hover:bg-accent"
        target="_blank"
      >
        <article className="flex flex-col gap-2 rounded-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6 shrink-0" aria-hidden="true" />
              <TypographyH3 className="text-base lowercase">
                {repositories.name}
              </TypographyH3>
            </div>
          </div>

          <p className="text-pretty bg-gradient-stop mt-2 line-clamp-2 bg-gradient-to-br from-foreground/70 via-foreground/70 via-40% to-foreground/70 bg-clip-text text-xs !leading-6 text-transparent md:text-base">
            {repositories.description}
          </p>
          <div className="flex gap-1">
            {repositories.topics.slice(0, 3).map((topic: string) => (
              <Badge key={topic} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>
          <div className="font-1 text-2 mt-auto flex items-center gap-4 pt-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 shrink-0 rounded-full bg-current"></div>
              <span>{repositories.language}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{repositories.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{repositories.forks_count}</span>
            </div>
          </div>
        </article>
      </Link>
      <span className="absolute right-0 top-0 z-50 flex h-8 w-8 -translate-y-1/4 items-center justify-center rounded-full opacity-0 transition-all group-hover:-translate-y-1/3 group-hover:opacity-100">
        <a
          target="_blank"
          href={`${repositories.homepage}`}
          aria-label={repositories.homepage}
          className="h-8 rounded-full bg-foreground p-2 text-primary-foreground"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </span>
    </li>
  )
}
