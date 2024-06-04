"use client"

import React from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { siteConfig } from "@/config/site"

const Hero = () => {
  return (
    <section className="mb-12 flex flex-col">
      <div className="flex w-full flex-col-reverse items-center gap-4">
        <div className="flex w-full flex-col">
          <h1 className="text-pretty bg-gradient-stop mt-2 scroll-m-20 bg-gradient-to-br from-foreground via-foreground via-30% to-foreground/30 bg-clip-text font-heading text-4xl font-extrabold tracking-tighter text-transparent md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="text-pretty bg-gradient-stop mt-2 bg-gradient-to-br from-foreground/70 via-foreground/70 via-40% to-foreground/70 bg-clip-text text-xs !leading-6 text-transparent md:text-base">
            Hey! How nice of you to look at my personal site,{" "}
            <span className="text-pretty bg-gradient-stop via-foreground/7 bg-gradient-to-br from-foreground/70 via-foreground/70 via-40% to-foreground/70 bg-clip-text font-bold text-transparent">
              Thank you!
            </span>{" "}
            I am Frontend developer that specializes at frontend integration,
            recently found myself studying backend apis and UX/UI Design too.
          </p>
        </div>
        <div className="relative w-full">
          <div className="relative h-[125px] w-[125px] rounded-md p-1 shadow-md">
            <AspectRatio className="relative rounded-md bg-muted">
              <Image
                src="https://avatars.githubusercontent.com/u/82529126?v=4"
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
