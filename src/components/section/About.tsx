"use client"
import * as React from "react"
import { TypographyH2, TypographyH3 } from "@/components/typography"
import Tech from "@/components/tech"
import SkillSetModal from "@/components/skill-set-modal"
import useClickOutside from "@/lib/hooks/useClickOutside"

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
            <p className="text-xs leading-6 text-muted-foreground md:text-[13px]">
              I&apos;ve been coding coding frontend development for over (2)
              years now and done a few freelances. I&apos;m a BSIT undergrad at
              AMA University. I have a passion for front-end development to
              create the best possible user experience, recently found myself
              studying backend apis and UX/UI Design too. <br />
              <br />
              Since technology never stops growing. I always keep myself updated
              by reading documentation, watching videos(FireShip) and by trying
              out new stack every month.
            </p>
            <Tech isOpen={isOpen} setIsOpen={setIsOpen} />
            <p className="text-xs leading-6 text-muted-foreground md:text-[13px]">
              When I&apos;m not coding away on the latest web project, I love
              watching movies, anime and playing games, Breaking Bad and GoT are
              my most favorite shows of all time(no one ask 😂). <br /> <br />I
              drink a lot during parties/celebrations and I like getting wasted.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
