"use client"

import React from "react"
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si"
import { ExternalLink } from "lucide-react"
import { Badge } from "./ui/badge"

const techIcon = [
  {
    techName: "JavaScript",
    icon: SiJavascript,
  },
  {
    techName: "TypeScript",
    icon: SiTypescript,
  },
  {
    techName: "HTLM5",
    icon: SiHtml5,
  },
  {
    techName: "CSS3",
    icon: SiCss3,
  },
  {
    techName: "React",
    icon: SiReact,
  },
  {
    techName: "NextJs",
    icon: SiNextdotjs,
  },
  {
    techName: "NodeJS",
    icon: SiNodedotjs,
  },
  {
    techName: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    techName: "PostgreSQL",
    icon: SiPostgresql,
  },
]

type TechProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Tech: React.FC<TechProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mt-4 flex w-full flex-col">
      <h4 className="mb-4 scroll-m-20 font-heading font-medium tracking-tight md:text-lg">
        Here are few technologies that are cup of my tea coffee .
      </h4>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {techIcon.map((icon) => (
            <Badge key={icon.techName}>{icon.techName}</Badge>
          ))}
        </div>
        <div className="my-3 flex items-start justify-start">
          <button
            className="flex items-center text-sm active:scale-[.98]"
            onClick={() => setIsOpen(!isOpen)}
          >
            See my full arsenal
            <ExternalLink className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tech
