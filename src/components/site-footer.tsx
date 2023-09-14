"use client"
import * as React from "react"

import { navList as lists } from "@/components/header"
import { siteConfig } from "@/config/site"
import { SocialLinks as socialLinks } from "@/config/config"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between border-t border-border pt-12">
        <div>
          <h4 className="mb-3 scroll-m-20 font-heading text-lg font-medium uppercase tracking-tight">
            Other Pages
          </h4>
          <ul className="flex flex-col gap-3">
            {lists.map((list) => (
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
          <h4 className="mb-3 scroll-m-20 font-heading text-lg font-medium uppercase tracking-tight">
            Social Links
          </h4>
          <ul className="flex flex-col items-start gap-3">
            {socialLinks.map(({ title, path, icon: Icon }) => (
              <li key={title}>
                <Link
                  href={path}
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary/90"
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
        <p className="text-sm text-muted-foreground/70 md:text-base">
          Built by{" "}
          <Link
            className="font-heading font-medium text-primary underline underline-offset-4"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.username}
          </Link>
          . Hosted on{" "}
          <Link
            href="https://vercel.app"
            target="_blank"
            className="font-heading font-medium text-primary underline underline-offset-4"
            rel="noreferrer"
          >
            Vercel
          </Link>
          . The source code is available on{" "}
          <Link
            className="font-heading font-medium text-primary underline underline-offset-4"
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
  )
}

export default Footer
