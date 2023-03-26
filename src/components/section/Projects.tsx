import { projects } from '@/lib/config';
import React from 'react';
import Project from '../shared/Project';

const Projects = () => {
  return (
    <section id="projects" className="pt-24 w-full">
      <h4 className="font-mono uppercase text-2xl md:text-3xl font-semibold mb-2">
        <span className="text-4xl">S</span>
        ome of my works.
      </h4>
      <p className="text-base text-dark font-semibold mb-4">
        Each project is a unique piece of development.
      </p>
      <div>
        {projects.map(project => (
          <Project
            project={project}
            key={project.name}
            className="md:odd:flex-row md:even:flex-row-reverse"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
