import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 w-full bg-dark">
      <div className="flex items-center justify-between px-4 max-w-5xl mx-auto w-full">
        <span className="text-white text-xs md:text-base w-full">
          Copyright © 2023. All rights are reserved
        </span>
        <div className="text-white justify-end flex gap-2">
          <a href="https://github.com/benjoquilario" target="_blank">
            <TbBrandGithub className="h-6 w-6" />
          </a>
          <a href="https://github.com/benjoquilario" target="_blank">
            <AiOutlineLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
