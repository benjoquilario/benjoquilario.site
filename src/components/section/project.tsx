import { projects } from "@/lib/config"
import React from "react"
import Project from "../shared/project"

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-24">
      <h4 className="mb-2 font-mono text-2xl font-semibold uppercase md:text-3xl">
        <span className="text-4xl">S</span>
        ome of my works.
      </h4>
      <p className="text-dark mb-4 text-base font-semibold">
        Each project is a unique piece of development.
      </p>
      <div>
        {projects.map((project) => (
          <Project
            project={project}
            key={project.name}
            className="md:odd:flex-row md:even:flex-row-reverse"
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
