/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"
import { TbBrandGithub } from "react-icons/tb"
import type { Projects as ProjectType } from "@/lib/types"
import classNames from "classnames"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Arrow from "./arrow"

type ProjectProps = {
  project: ProjectType
  className?: string
}

const settings = {
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <Arrow className="right-2" />,
  prevArrow: <Arrow position="left" />,
}

const Project: React.FC<ProjectProps> = ({ project, className }) => {
  return (
    <div
      className={classNames("mt-6 flex flex-col gap-4 md:flex-row", className)}
    >
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {project.image.map((img) => (
            <div
              key={img}
              className="relative h-64 w-full rounded-md md:h-[350px]"
            >
              <Image
                src={img}
                alt={project.name}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="items-left flex flex-col justify-center md:w-1/2">
        <h3 className="text-dark mb-3 text-base font-semibold md:text-2xl">
          {project.name}
        </h3>
        <p className="text-xs leading-6 md:text-[15px]">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="flex whitespace-nowrap rounded-[0.25rem] bg-primary px-2 py-1 text-center align-baseline text-[75%] font-semibold leading-none text-white text-white"
            >
              <t.icon className="h-3 w-3" />
              <span className="ml-1">{t.name}</span>
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <a
            href={project.url}
            target="_blank"
            className="flex h-[34px] w-[130px] items-center justify-center rounded-md border-[#646a70] bg-[#6c757d] text-xs text-white transition-all hover:bg-[#7a828a] "
          >
            Live Demo
            <FiExternalLink className="ml-1" />
          </a>
          <a
            href={project.sources_code}
            target="_blank"
            className="bg-dark border-dark relative flex h-[34px] w-[180px] items-center justify-center rounded-md text-xs text-white transition-all hover:bg-[#303641] "
          >
            View source code
            <TbBrandGithub className="ml-1" />
            {project.status === "private" && (
              <span className="absolute right-0 top-0 rotate-45 rounded-sm bg-[#6c757d] px-1">
                Private
              </span>
            )}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
