import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
} from 'react-icons/si';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const techIcon = [
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
      <h4 className="md:text-lg mb-4 font-heading scroll-m-20 tracking-tight font-medium">
        Here are few technologies that are cup of my tea coffee .
      </h4>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-2/3">
          {techIcon.map(icon => (
            <div className="flex gap-2 text-primary" key={icon.techName}>
              <icon.icon className="h-6 w-6" />
              <p className="text-muted-foreground text-sm">{icon.techName}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-start items-start mt-1 mb-2">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            See my full arsenal
            <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tech;
