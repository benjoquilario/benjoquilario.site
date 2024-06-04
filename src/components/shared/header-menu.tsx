"use client"

import * as React from "react"
import { navList as lists } from "@/components/header"
import { cn } from "@/lib/utils"
import Link from "next/link"

type HeaderMenuProps = {
  className: string
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-50 w-full bg-transparent transition-all",
        className
      )}
    >
      <div className="bg-background px-4 pb-12 pt-7 shadow-md">
        <ul className="text-left">
          {lists.map((list) => (
            <li key={list.href} className="mb-2">
              <Link
                href={list.href}
                className="relative text-sm text-muted-foreground/60 transition-colors hover:text-muted-foreground/80"
              >
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenu
