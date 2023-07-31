'use client';
import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/shared/header-menu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';
import { Toggle } from '@/components/ui/toggle';
import Link from 'next/link';

export const navList = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '#contact',
    title: 'Contact',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden');

    const focusTrap = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        setIsOpen(false);
      }

      if (event.key !== 'Tab') return;
    };

    document.addEventListener('keydown', focusTrap);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', focusTrap);
    };
  }, [isOpen]);

  return (
    <header className="flex justify-center items-center w-full pb-6 mb-6">
      <div className="max-w-5xl mx-0 flex justify-between items-center w-full">
        <Link
          href="/"
          className="z-10 text-3xl md:text-5xl font-logo font-extrabold"
          aria-label="Benjo Quilario - BMQ"
        >
          B.
        </Link>
        <div className="flex justify-between items-center gap-3 h-12">
          <nav aria-label="primary">
            {/* <button className="md:hidden absolute top-7 right-6 flex flex-col justify-center items-center bg-transition z-[999]"></button> */}
            <div className="hidden md:block relative">
              <ul className="flex gap-3">
                {navList.map(list => (
                  <li key={list.href}>
                    <Link
                      href={list.href}
                      className="text-muted-foreground/60 transition-colors hover:text-muted-foreground/80 text-sm"
                    >
                      {list.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <HeaderMenu
            className={cn(
              isOpen
                ? 'opacity-100 top-[64px] right-0 visible'
                : '-top-4 opacity-0 -right-[1000px] invisible'
            )}
          />
          <div className="flex gap-2">
            <ThemeToggle />
            <Toggle
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="md:hidden block"
            >
              <Menu className="h-[1.5rem] w-[1.3rem]" />
            </Toggle>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
