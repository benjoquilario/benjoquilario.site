/* eslint-disable @next/next/no-html-link-for-pages */

import React from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { TbBrandGithub } from 'react-icons/tb';
import type { Projects as ProjectType } from '@/lib/types';
import classNames from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './arrow';

type ProjectProps = {
  project: ProjectType;
  className?: string;
};

const settings = {
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <Arrow className="right-2" />,
  prevArrow: <Arrow position="left" />,
};

const Project: React.FC<ProjectProps> = ({ project, className }) => {
  return (
    <div
      className={classNames('flex-col md:flex-row flex gap-4 mt-6', className)}
    >
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {project.image.map(img => (
            <div
              key={img}
              className="relative h-64 md:h-[350px] w-full rounded-md"
            >
              <Image
                src={img}
                alt={project.name}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-left">
        <h3 className="text-base md:text-2xl font-semibold mb-3 text-dark">
          {project.name}
        </h3>
        <p className="text-xs md:text-[15px] leading-6">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-primary text-white font-semibold text-white flex text-[75%] leading-none whitespace-nowrap align-baseline text-center py-1 px-2 rounded-[0.25rem]"
            >
              <t.icon className="h-3 w-3" />
              <span className="ml-1">{t.name}</span>
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <a
            href={project.url}
            target="_blank"
            className="bg-[#6c757d] hover:bg-[#7a828a] text-white border-[#646a70] transition-all w-[130px] flex h-[34px] justify-center items-center text-xs rounded-md "
          >
            Live Demo
            <FiExternalLink className="ml-1" />
          </a>
          <a
            href={project.sources_code}
            target="_blank"
            className="relative bg-dark hover:bg-[#303641] text-white border-dark transition-all w-[180px] flex h-[34px] justify-center items-center text-xs rounded-md "
          >
            View source code
            <TbBrandGithub className="ml-1" />
            {project.status === 'private' && (
              <span className="bg-[#6c757d] px-1 rounded-sm absolute top-0 right-0 rotate-45">
                Private
              </span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
