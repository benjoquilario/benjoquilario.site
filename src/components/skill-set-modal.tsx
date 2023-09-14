"use client"
import * as React from "react"
import Backdrop from "@/components/shared/backdrop"
import SkillSet from "@/components/shared/skill-set"
import { skillset } from "@/lib/config"
import { Toggle } from "./ui/toggle"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type ModalArsenalProps = {
  className?: string
  setIsOpen: (isOpen: boolean) => void
  isOpen: boolean
}

const SkillSetModal = React.forwardRef<HTMLDivElement, ModalArsenalProps>(
  (props, ref) => {
    return (
      <Backdrop
        className={cn(
          props.className,
          props.isOpen ? "visible opacity-100" : "invisible opacity-0",
          "transition"
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
            <Toggle onClick={() => props.setIsOpen(!props.isOpen)}>
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
      </Backdrop>
    )
  }
)

SkillSetModal.displayName = "SkillSetModal"

export default SkillSetModal
