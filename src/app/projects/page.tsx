import React from "react"
import { TypographyH2 } from "@/components/typography"
import RepositoriesItem from "@/components/shared/repositories-item"
import { REPOS_URL } from "@/config/config"
import Image from "next/image"
import { Suspense } from "react"

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex max-w-fit flex-col gap-2">
        <TypographyH2 className="text-3xl">
          <span className="text-4xl">P</span>rojects
        </TypographyH2>
        <p className="text-muted-foreground/80">Some of my projects</p>
      </div>
      <div className="flex items-center gap-2 py-3">
        <div>
          <div className="relative h-14 w-14">
            <Image
              alt="benjoquilario"
              fill
              src="https://avatars.githubusercontent.com/u/82529126?v=4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-foreground">Benjo Quilario</div>
          <div className="text-sm text-foreground/80">
            https://github.com/benjoquilario
          </div>
        </div>
      </div>
      <ul className="mx-0 mt-3 grid w-full grid-cols-1 gap-2.5 md:-mx-4">
        {REPOS_URL.map((repo) => (
          <Suspense key={repo}>
            <RepositoriesItem key={repo} repoName={repo} />
          </Suspense>
        ))}
      </ul>
    </div>
  )
}

export default Projects
