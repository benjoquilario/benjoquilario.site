import type { SkillSet } from "@/lib/types"
import React from "react"

type SkillSetProps = {
  title: string
  skillSets: SkillSet[]
}

const SkillSet: React.FC<SkillSetProps> = ({ title, skillSets }) => {
  return (
    <div className="">
      <div className="mb-2 text-sm font-semibold md:text-[15px]">{title}</div>
      <div className="border-dark grid w-full grid-cols-2 gap-2 border-t py-4">
        {skillSets.map((skill, index) => (
          <div className="flex items-center text-primary" key={index}>
            <skill.icon className="h-6 w-6" />
            <span className="ml-2 text-sm font-light text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSet
