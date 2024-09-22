"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/shared/header-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { Toggle } from "@/components/ui/toggle"
import { useSelectedLayoutSegment } from "next/navigation"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

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
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/guestbook",
    title: "Guestbook",
  },
]

const Header = () => {
  const segment = useSelectedLayoutSegment()
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
      <div className="mx-0 flex w-full max-w-5xl flex-col items-start justify-between">
        <Link href="/" className="block" aria-label="BenJo Quilario">
          <div className="relative">
            <span className="bg-gradient-stop text-pretty bg-gradient-to-br from-foreground via-foreground via-30% to-foreground/30 bg-clip-text font-heading text-5xl font-extrabold uppercase">
              B.
            </span>
          </div>
        </Link>
        <div className="flex h-12 items-center justify-between space-x-2">
          <nav aria-label="primary">
            {/* <button className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"></button> */}
            <div className="relative">
              <ul className="flex items-center space-x-3">
                {navList.map((item) => (
                  <li key={item.href}>
                    <Link
                      style={{ padding: "0" }}
                      href={item.href}
                      className={buttonVariants({
                        variant: "linkHover",
                        size: "sm",
                        className: `h-8 p-0 text-sm font-medium lowercase ${
                          item.href.startsWith(`/${segment}`)
                            ? "font-medium text-foreground hover:text-foreground"
                            : "font-normal text-foreground/60 hover:text-foreground/80"
                        }`,
                      })}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex gap-2">
            <ThemeToggle />
            {/* <Toggle
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="block md:hidden"
            >
              <Menu className="h-[1.5rem] w-[1.3rem]" />
            </Toggle> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
