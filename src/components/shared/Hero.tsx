/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TfiTwitter } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandGithub } from 'react-icons/tb';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import classNames from 'classnames';

const ICONLIST = [
  {
    title: 'Twitter',
    icon: TfiTwitter,
    href: 'https://twitter.com/iam_benjo',
  },
  {
    title: 'Facebook',
    icon: FaFacebookF,
    href: 'https://www.facebook.com/Benjo.Add07/',
  },
  {
    title: 'Github',
    icon: TbBrandGithub,
    href: 'https://github.com/benjoquilario',
  },
  {
    title: 'LinkedIn',
    icon: AiOutlineLinkedin,
    href: 'https://www.linkedin.com/in/benjo-quilario-415a351bb/',
  },
  {
    title: 'Gmail',
    icon: CgMail,
    href: 'mailto:benjoquilario@gmail.com',
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col items-center gap-8 w-full">
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="text-dark font-light">Ohh you found me?. Howdy! I am</p>
          <h1 className="mt-4 text-dark text-2xl md:text-5xl font-bold font-sans">
            BENJO M.
          </h1>
          <h2 className="text-primary text-3xl md:text-7xl font-bold font-sans">
            QUILARIO.
          </h2>
          <p className="text-dark text-sm md:text-base">
            Or you could call me JO. That works too . . .
          </p>
          <h3 className="mt-2 text-base text-primary font-bold">
            Frontend Developer
          </h3>
          <p className="text-xs md:text-sm mt-2 !leading-6">
            Hey! How nice of you to look at my personal site,{' '}
            <span className="text-primary font-bold">Thank you!</span> I am
            Frontend developer that specializes at frontend integration,
            recently found myself studying backend apis and UX/UI Design too.
          </p>
          <a
            href="#!"
            className={classNames(
              'flex hover:scale-105 transition justify-center border-[1px] items-center h-12 w-32 text-sm mt-6 rounded-sm border-dark',
              'focus:outline-none focus:outline-offset-1 focus:outline-secondary',
              'transition duration-150 ease-in-out',
              'active:border-dark active:text-[#7a828a]'
            )}
          >
            Get in touch!
          </a>
          <div className="flex mt-7 gap-2">
            {ICONLIST.map(icon => (
              <a
                href={icon.href}
                className="text-dark hover:text-primary transition"
                key={icon.title}
                target="_blank"
              >
                <icon.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
        <div className="ml-0 md:ml-4 relative w-full md:w-[40%]">
          <figure className="h-[155px] w-[155px] p-1 rounded-2xl shadow-lg">
            <img
              className="rounded-2xl"
              src="/benjo.jpg"
              alt="Benjo Quilario"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
