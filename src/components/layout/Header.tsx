"use client"
import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/shared/header-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { Toggle } from "@/components/ui/toggle"
import Link from "next/link"

export const navList = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "#contact",
    title: "Contact",
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden")

    const focusTrap = (event: KeyboardEvent) => {
      if (event.key == "Escape") {
        setIsOpen(false)
      }

      if (event.key !== "Tab") return
    }

    document.addEventListener("keydown", focusTrap)

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", focusTrap)
    }
  }, [isOpen])

  return (
    <header className="mb-6 flex w-full items-center justify-center pb-6">
      <div className="mx-0 flex w-full max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="z-10 font-logo text-3xl font-extrabold md:text-5xl"
          aria-label="Benjo Quilario - BMQ"
        >
          B.
        </Link>
        <div className="flex h-12 items-center justify-between gap-3">
          <nav aria-label="primary">
            {/* <button className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"></button> */}
            <div className="relative hidden md:block">
              <ul className="flex gap-3">
                {navList.map((list) => (
                  <li key={list.href}>
                    <Link
                      href={list.href}
                      className="text-sm text-muted-foreground/60 transition-colors hover:text-muted-foreground/80"
                    >
                      {list.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <HeaderMenu
            className={cn(
              isOpen
                ? "visible right-0 top-[64px] opacity-100"
                : "invisible -right-[1000px] -top-4 opacity-0"
            )}
          />
          <div className="flex gap-2">
            <ThemeToggle />
            <Toggle
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="block md:hidden"
            >
              <Menu className="h-[1.5rem] w-[1.3rem]" />
            </Toggle>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
