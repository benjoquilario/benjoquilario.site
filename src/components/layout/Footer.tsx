'use client';
import React from 'react';

import { navList as lists } from './header';
import { siteConfig } from '@/config/site';
import { SocialLinks as socialLinks } from '@/config/config';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="flex items-center justify-between pt-12 border-t border-border max-w-5xl mx-auto w-full">
        <div>
          <h4 className="uppercase font-heading scroll-m-20 text-lg font-medium tracking-tight mb-3">
            Other Pages
          </h4>
          <ul className="flex flex-col gap-3">
            {lists.map(list => (
              <li key={list.href}>
                <Link
                  href={list.href}
                  className="text-muted-foreground/80 transition-colors hover:text-muted-foreground/90"
                >
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="uppercase font-heading scroll-m-20 text-lg font-medium tracking-tight mb-3">
            Social Links
          </h4>
          <ul className="flex flex-col gap-3 items-start">
            {socialLinks.map(({ title, path, icon: Icon }) => (
              <li key={title}>
                <Link
                  href={path}
                  className="flex gap-1 items-center text-sm text-muted-foreground transition-colors hover:text-primary/90"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" />
                  <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 pb-3">
        <p className="text-sm md:text-base text-muted-foreground/70">
          Built by{' '}
          <Link
            className="text-primary font-heading font-medium underline underline-offset-4"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            benjoquilario
          </Link>
          . Hosted on{' '}
          <Link
            href="https://vercel.app"
            target="_blank"
            className="text-primary font-heading font-medium underline underline-offset-4"
            rel="noreferrer"
          >
            Vercel
          </Link>
          . The source code is available on{' '}
          <Link
            className="text-primary font-heading font-medium underline underline-offset-4"
            href="https://github.com/benjoquilario/blogfolio"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
