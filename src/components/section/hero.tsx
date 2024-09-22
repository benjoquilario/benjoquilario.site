"use client"

import React from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { TypographyP } from "../typography"
import avatar from "../../app/avatar.jpeg"
import { FadeText } from "../ui/fade-text-"

const Hero = () => {
  return (
    <section className="mb-12 flex flex-col">
      <div className="flex w-full flex-col-reverse items-center gap-4">
        <div className="flex w-full flex-col">
          <h1 className="bg-gradient-stop mt-2 scroll-m-20 text-pretty bg-gradient-to-br from-foreground via-foreground via-30% to-foreground/30 bg-clip-text font-heading text-4xl font-extrabold tracking-tighter text-transparent md:text-5xl">
            hey, I'm benjo 👋
          </h1>
          <TypographyP className="mt-2 text-sm text-foreground/90 md:text-[15px]">
            I am Frontend developer that specializes at frontend integration,
            recently found myself studying backend apis and UX/UI Design too.
          </TypographyP>
        </div>
        <div className="relative w-full">
          <div className="relative h-[125px] w-[125px] rounded-md p-1 shadow-md">
            <AspectRatio className="relative rounded-md bg-muted">
              <Image
                src={avatar}
                alt="Benjo Quilario"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md shadow-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
