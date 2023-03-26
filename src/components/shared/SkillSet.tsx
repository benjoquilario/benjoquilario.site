import { SkillSet } from '@/lib/types';
import React from 'react';

type SkillSetProps = {
  title: string;
  skillSets: SkillSet[];
};

const SkillSet: React.FC<SkillSetProps> = ({ title, skillSets }) => {
  return (
    <div className="">
      <div className="text-sm md:text-[15px] font-semibold mb-2">{title}</div>
      <div className="border-t border-dark grid grid-cols-2 w-full py-4 gap-2">
        {skillSets.map((skill, index) => (
          <div className="text-primary flex items-center" key={index}>
            <skill.icon className="h-6 w-6" />
            <span className="text-dark font-light ml-2 text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
