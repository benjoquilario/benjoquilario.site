"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/shared/header-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { Toggle } from "@/components/ui/toggle"
import { useSelectedLayoutSegment } from "next/navigation"
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
    href: "/contact",
    title: "Contact",
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
      <div className="mx-0 flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="block" aria-label="BenJo Quilario">
          <div className="relative">
            <span className="border-4 border-primary px-[15px] py-2 font-heading text-lg font-extrabold uppercase md:text-2xl">
              B
            </span>
            <span className="relative ml-[-17px] bg-background font-heading text-lg font-bold md:text-2xl">
              enJo QuiLario
            </span>
          </div>
        </Link>
        <div className="flex h-12 items-center justify-between gap-3">
          <nav aria-label="primary">
            {/* <button className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"></button> */}
            <div className="relative hidden md:block">
              <ul className="flex gap-3">
                {navList.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm transition-colors",
                        item.href.startsWith(`/${segment}`)
                          ? "font-medium text-foreground hover:text-foreground"
                          : "font-normal text-foreground/60 hover:text-foreground/80"
                      )}
                    >
                      {item.title}
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
                : "invisible -top-4 right-[-1000px] opacity-0"
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
