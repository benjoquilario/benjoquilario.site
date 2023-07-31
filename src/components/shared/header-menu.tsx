import React from 'react';
import { navList as lists } from '../layout/header';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type HeaderMenuProps = {
  className: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'fixed w-full z-50 left-0 transition-all bottom-0 bg-transparent',
        className
      )}
    >
      <div className="bg-background shadow-md px-4 pt-7 pb-12">
        <ul className="text-left">
          {lists.map(list => (
            <li key={list.href} className="mb-2">
              <a
                href={list.href}
                className="relative text-muted-foreground/60 transition-colors hover:text-muted-foreground/80 text-sm"
              >
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
