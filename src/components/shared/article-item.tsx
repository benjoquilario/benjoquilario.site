'use client';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import React from 'react';
import { TypographyH3 } from '../typography';

const ArticleItem = () => {
  return (
    <li className="relative -mx-4">
      <Link
        href="/"
        className="flex px-4 py-4 hover:bg-accent transition-colors rounded-sm"
      >
        <article className="flex gap-2 flex-col rounded-sm">
          <TypographyH3 className="line-clamp-1 text-lg">
            How Javascript works behind the scene
          </TypographyH3>
          <span className="text-sm md:text-base text-muted-foreground line-clamp-1">
            Learn how javascript works behind the scene
          </span>
          <div className="flex flex-wrap justify-start items-stretch gap-3">
            <div className="flex shrink-0 gap-2 items-center">
              <Calendar className="h-4 w-4" aria-hidden />
              <span className="text-sm text-muted-foreground/90">5 months</span>
            </div>
            <div className="flex shrink-0 gap-2 items-center">
              <Clock className="h-4 w-4" aria-hidden />
              <span className="text-sm text-muted-foreground/90">
                4 min read
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default ArticleItem;
