"use client"
import type { Metadata } from "next"
import * as React from "react"
import { TypographyH2, TypographyH3 } from "@/components/typography"
import Tech from "@/components/tech"
import SkillSetModal from "@/components/skill-set-modal"
import useClickOutside from "@/hooks/useClickOutside"
import { buttonVariants } from "@/components/ui/button"

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef(null)

  React.useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden")

    const focusTrap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

  useClickOutside(ref, () => setIsOpen(false))

  return (
    <React.Fragment>
      <SkillSetModal isOpen={isOpen} setIsOpen={setIsOpen} ref={ref} />
      <section className="mb-12 w-full">
        <TypographyH3 className="mb-3 text-3xl">
          <span className="text-4xl">A</span>
          bout me.
        </TypographyH3>
        <div className="flex w-full flex-col gap-4">
          <div className="w-full">
            <h1 className="mb-1 scroll-m-20 font-heading text-3xl font-medium tracking-tight">
              Hello, my name is <strong>BenJo QuiLario</strong>
            </h1>
            <TypographyH2 className="mb-4 text-2xl">
              I&apos;m a self-taught front-end web developer based in Quezon
              City, Philippines.
            </TypographyH2>
            <p className="text-pretty bg-gradient-stop mt-2 bg-gradient-to-br from-foreground/90 via-foreground/70 via-40% to-foreground/90 bg-clip-text text-xs !leading-6 text-transparent md:text-base">
              I&apos;ve been coding frontend development for over (2) years now
              and done a few freelances. I&apos;m a BSIT undergrad at AMA
              University. I have a passion for front-end development to create
              the best possible user experience, recently found myself studying
              backend apis and UX/UI Design too. <br />
              <br />
              My favorite stack right now is{" "}
              <a
                href="https://react.dev/"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                React
              </a>
              ,{" "}
              <a
                href="https://nextjs.org/docs"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                Next.js 14
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com/"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                TailwindCSS
              </a>{" "}
              with{" "}
              <a
                href="https://ui.shadcn.com/"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                shadcn/ui
              </a>
              ,{" "}
              <a
                href="https://www.prisma.io/"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                Prisma.io
              </a>{" "}
              and{" "}
              <a
                href="https://www.mongodb.com/"
                className={buttonVariants({
                  variant: "linkHover",
                  className: "h-8 px-0 text-foreground",
                })}
              >
                MongoDB
              </a>
              .
              <br />
              Since technology never stops growing. I am always looking for ways
              to improve my skills and stay up-to-date with the latest
              developments in the field.
              <br />
              <br />I am comfortable working independently or as part of a team,
              and I am always ready to take on new challenges.
            </p>
            <Tech isOpen={isOpen} setIsOpen={setIsOpen} />
            <p className="text-pretty bg-gradient-stop mt-2 bg-gradient-to-br from-foreground/70 via-foreground/70 via-40% to-foreground/70 bg-clip-text text-xs !leading-6 text-transparent md:text-base">
              When I&apos;m not coding on the latest web project, I love
              watching movies, anime and playing games. I&apos;m a huge fan of
              League of Legends, Clash of Clans, MLBB and Dota2. Breaking Bad
              and GoT are my most favorite shows of all time. <br /> <br />I
              drink a lot during parties/celebrations and I like getting wasted.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
