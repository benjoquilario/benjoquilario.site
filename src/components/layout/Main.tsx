import React, { useState, useRef, useEffect } from 'react';
import About from '@/components/section/About';
import Projects from '@/components/section/Projects';
import Hero from '@/components/shared/Hero';
import Tech from '@/components/techstack/Tech';
import Contact from '@/components/section/Contact';
import SkillSetModal from '../techstack/SkillSetModal';
import useClickOutside from '@/lib/hooks/useClickOutside';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    isOpen && (document.body.style.overflow = 'hidden');

    const focusTrap = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
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

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <main className="flex flex-col justify-center items-center min-h-[calc(100vh_-_96px)] mt-24 px-4 max-w-5xl mx-auto w-full">
      <Hero />
      <Tech isOpen={isOpen} setIsOpen={setIsOpen} />
      <About />
      <Projects />
      <Contact />
      <SkillSetModal isOpen={isOpen} setIsOpen={setIsOpen} ref={ref} />
    </main>
  );
};

export default Main;
