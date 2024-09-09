"use client"
import type { Metadata } from "next"
import * as React from "react"
import { TypographyH2, TypographyH3 } from "@/components/typography"
import Tech from "@/components/tech"
import SkillSetModal from "@/components/skill-set-modal"
import useClickOutside from "@/hooks/useClickOutside"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

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
          <div className="space-y-5 text-sm leading-6 text-foreground md:text-[15px]">
            <p>
              I&apos;m a self-taught front-end web developer based in Quezon
              City, Philippines.
            </p>
            <p>
              I&apos;ve been coding frontend development for over (3) years now
              and done a few freelances. I&apos;m currently a BSIT 3rd yr
              student at AMA University. I have a passion for front-end
              development to create the best possible user experience, recently
              found myself studying backend apis and UX/UI Design too.
            </p>
            <p>
              Since technology never stops growing. I am always looking for ways
              to improve my skills and stay up-to-date with the latest
              developments in the field.
            </p>

            <p>
              Outside of programming, I have a diverse set of hobbies that
              include:
            </p>
            <ul className="ml-2 list-disc space-y-2 pl-3">
              <li>I love watching movies, anime and playing games</li>
              <li>
                I drink a lot during parties/celebrations and I like getting
                wasted.
              </li>
              <li>Gym/Working Out</li>
            </ul>
            <p>
              If you happen to be in the same city I reside in (Novaliches,
              Quezon City), perhaps we could meet up. We could:
            </p>
            <ul className="ml-2 list-disc space-y-2 pl-3">
              <li>Share a coffee</li>
              <li>Discuss coding</li>
              <li>Workout/Gym Together</li>
              <li>Watch Anime/Movies with me</li>
            </ul>
            <p>
              I am comfortable working independently or as part of a team, and I
              am always ready to take on new challenges.
            </p>
            <p>
              It&apos;s always great to connect with like-minded individuals and
              share our passions.
            </p>
          </div>
        </div>
        <div className="mt-6 block">
          <TypographyH3 className="mb-3 text-2xl">
            <span className="text-4xl">W</span>
            ork Experience.
          </TypographyH3>
          <div className="flex">
            <div>
              <span className="bg-muted-background relative m-auto flex h-12 w-12 shrink-0 overflow-hidden rounded-full border dark:bg-foreground">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src="/toms.png"
                  alt="toms world"
                />
              </span>
            </div>
            <div className="ml-3 flex grow flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-medium">Tom&apos;s World</h4>
                <div className="text-sm text-muted-foreground/80">
                  Nov 2023 - May 2024
                </div>
              </div>
              <p className="text-sm text-foreground/60">Guest Service Crew</p>
            </div>
          </div>
        </div>

        <div className="mt-6 block">
          <TypographyH3 className="mb-3 text-2xl">
            <span className="text-4xl">E</span>
            ducation.
          </TypographyH3>
          <div className="flex">
            <div>
              <span className="bg-muted-background relative m-auto flex h-12 w-12 shrink-0 overflow-hidden rounded-full border dark:bg-foreground">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src="/bestlink.webp"
                  alt="toms world"
                />
              </span>
            </div>
            <div className="ml-3 flex grow flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-medium">
                  Bestlink College of the Philippines
                </h4>
                <div className="text-sm text-foreground/60">
                  Jun 2017 - August 2019
                </div>
              </div>
              <p className="text-sm text-foreground/60">Senior High School</p>
            </div>
          </div>
          <div className="mt-4 flex">
            <div>
              <span className="bg-muted-background relative m-auto flex h-12 w-12 shrink-0 overflow-hidden rounded-full border dark:bg-foreground">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src="/ama.webp"
                  alt="toms world"
                />
              </span>
            </div>
            <div className="ml-3 flex grow flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-medium">AMA University</h4>
                <div className="text-sm text-foreground/60">
                  Jun 2020 - Current
                </div>
              </div>
              <p className="text-sm text-foreground/60">College</p>
            </div>
          </div>
        </div>
        <Tech isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
    </React.Fragment>
  )
}

export default About
