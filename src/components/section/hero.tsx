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
          <h1 className="mt-2 scroll-m-20 font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-2 text-xs !leading-6 text-muted-foreground md:text-sm">
            Hey! How nice of you to look at my personal site,{" "}
            <span className="font-bold text-primary">Thank you!</span> I am
            Frontend developer that specializes at frontend integration,
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
