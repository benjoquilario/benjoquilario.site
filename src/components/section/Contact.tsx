import { siteConfig } from "@/config/site"
import React from "react"
import { GrMapLocation, GrMailOption } from "react-icons/gr"

const Contact = () => {
  return (
    <section id="contact" className="w-full pt-24">
      <h3 className="mb-2 font-mono text-2xl font-semibold uppercase md:text-3xl">
        <span className="text-4xl">C</span>
        ONTACT.
      </h3>
      <h6 className="text-base font-semibold md:text-lg">
        Don&apos;t be shy! Hit me up! 👇
      </h6>
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-8">
        <div className="flex items-center gap-3 text-primary">
          <GrMapLocation className="h-10 w-10" />
          <div className="flex flex-col">
            <div className="text-dark text-sm font-semibold md:text-base">
              Location
            </div>
            <span className="text-dark text-xs md:text-sm">
              Quezon City, Philippines
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <GrMailOption className="h-10 w-10" />
          <div className="flex flex-col">
            <div className="text-dark text-sm font-semibold md:text-base">
              Email
            </div>
            <span className="text-dark text-xs md:text-sm">
              {siteConfig.email}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
