import Hero from '@/components/section/hero';
import Articles from '@/components/section/articles';
import Repositories from '@/components/section/repositories';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Repositories />
      <Articles />
    </React.Fragment>
  );
}
