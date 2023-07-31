import RepositoriesItem from '@/components/shared/repositories-item';
import { REPOS } from '@/config/config';
import React from 'react';
import { TypographyH2 } from '../typography';

const Repositories = () => {
  return (
    <section className="flex flex-col items-start justify-start mb-12">
      <TypographyH2>
        <span className="text-4xl">F</span>
        eatured <span className="text-4xl">R</span>epositories
      </TypographyH2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full mt-6 mx-0 md:-mx-4">
        {REPOS.map(repo => (
          <RepositoriesItem key={repo} repoName={repo} />
        ))}
      </ul>
    </section>
  );
};

export default Repositories;
