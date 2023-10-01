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
} from "react-icons/si"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
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
        <div className="grid w-2/3 grid-cols-2 gap-4 md:grid-cols-4">
          {techIcon.map((icon) => (
            <Badge variant="outline" className="px-2.5 py-2">
              <div
                className="flex items-center gap-1 text-primary"
                key={icon.techName}
              >
                <icon.icon className="h-5 w-5" />
                <p className="text-xs text-foreground/70">{icon.techName}</p>
              </div>
            </Badge>
          ))}
        </div>
        <div className="my-3 flex items-start justify-start">
          <button
            className="flex items-center text-sm"
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
