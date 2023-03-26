import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiPhp,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import classNames from 'classnames';

const TECHICON = [
  {
    techName: 'JavaScript',
    icon: SiJavascript,
  },
  {
    techName: 'TypeScript',
    icon: SiTypescript,
  },
  {
    techName: 'HTLM5',
    icon: SiHtml5,
  },
  {
    techName: 'CSS3',
    icon: SiCss3,
  },
  {
    techName: 'React',
    icon: SiReact,
  },
  {
    techName: 'NextJs',
    icon: SiNextdotjs,
  },
  {
    techName: 'NodeJS',
    icon: SiNodedotjs,
  },
  {
    techName: 'TailwindCSS',
    icon: SiTailwindcss,
  },
];

type TechProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Tech: React.FC<TechProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mt-4 flex flex-col w-full">
      <div className="text-base md:text-lg mb-4 text-dark font-medium">
        Here are few technologies that are cup of my tea coffee .
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-2/3">
          {TECHICON.map(icon => (
            <div className="flex gap-2 text-primary" key={icon.techName}>
              <icon.icon className=" h-6 w-6" />
              <p className="text-dark text-sm">{icon.techName}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(
            'flex gap-2 items-center font-medium text-left text-primary mt-2 w-40 text-[13px] hover:text-secondary'
          )}
        >
          See my full arsenal
          <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

export default Tech;
