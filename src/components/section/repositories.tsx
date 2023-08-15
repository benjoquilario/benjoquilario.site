import RepositoriesItem from "@/components/shared/repositories-item"
import { REPOS } from "@/config/config"
import React from "react"
import { TypographyH2 } from "../typography"

const Repositories = () => {
  return (
    <section className="mb-12 flex flex-col items-start justify-start">
      <TypographyH2>
        <span className="text-4xl">F</span>
        eatured <span className="text-4xl">R</span>epositories
      </TypographyH2>
      <ul className="mx-0 mt-6 grid w-full grid-cols-1 gap-2.5 md:-mx-4 md:grid-cols-2">
        {REPOS.map((repo) => (
          <RepositoriesItem key={repo} repoName={repo} />
        ))}
      </ul>
    </section>
  )
}

export default Repositories
