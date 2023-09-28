"use client"

import { skillset } from "@/lib/config"
import { Toggle } from "./ui/toggle"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import SkillSet from "@/components/shared/skill-set"
import * as React from "react"

type ModalArsenalProps = {
  className?: string
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

const SkillSetModal = React.forwardRef<HTMLDivElement, ModalArsenalProps>(
  (props, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement | null>(null)

    React.useEffect(() => {
      buttonRef?.current?.focus()
    }, [])

    return (
      <div
        className={cn(
          props.className,
          props.isOpen ? "visible opacity-100" : "invisible opacity-0",
          "transition",
          "fixed left-0 top-0 z-50 !m-0 flex min-h-screen w-full animate-[opacity_0.5s_ease-in-out] items-center justify-center bg-gradient-to-r from-[#00000080] to-[#00000080]"
        )}
      >
        <div
          className={cn(
            "mx-2 flex h-[500px] w-[450px] flex-col overflow-hidden rounded-md bg-background py-4 pl-4 transition",
            props.isOpen
              ? "visible scale-y-100 opacity-100"
              : "invisible scale-y-75 opacity-0"
          )}
          ref={ref}
        >
          <div className="flex items-center justify-between">
            <h4 className="scroll-m-20 font-heading text-base font-semibold leading-tight md:text-lg">
              Full Skill Set List
            </h4>
            <Toggle
              className="mr-2"
              ref={buttonRef}
              onClick={() => props.setIsOpen(!props.isOpen)}
            >
              <X />
            </Toggle>
          </div>
          <div className="my-5 h-full overflow-auto">
            <SkillSet title="Frontend Centric" skillSets={skillset.frontend} />
            <SkillSet title="Backend Centric" skillSets={skillset.backend} />
            <SkillSet title="Ui framework" skillSets={skillset.ui} />
            <SkillSet
              title="Database and Streams"
              skillSets={skillset.database}
            />
            <SkillSet title="Productivity Boost" skillSets={skillset.boost} />
          </div>
          <footer className="flex items-center justify-end py-1 pr-4">
            <p className="text-xs font-light">
              *Some micro frameworks not included
            </p>
          </footer>
        </div>
      </div>
    )
  }
)

SkillSetModal.displayName = "SkillSetModal"

export default SkillSetModal
