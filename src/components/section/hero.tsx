'use client';
import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';

const Hero = () => {
  return (
    <section className="flex flex-col mb-12">
      <div className="flex flex-col-reverse items-center gap-4 w-full">
        <div className="flex flex-col w-full">
          <h1 className="mt-2 scroll-m-20 font-heading text-4xl tracking-tight md:text-5xl font-extrabold">
            BenJo M. QuiLario
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm mt-2 !leading-6">
            Hey! How nice of you to look at my personal site,{' '}
            <span className="text-primary font-bold">Thank you!</span> I am
            Frontend developer that specializes at frontend integration,
            recently found myself studying backend apis and UX/UI Design too.
          </p>
        </div>
        <div className="relative w-full">
          <div className="relative w-[125px] h-[125px] p-1 shadow-md rounded-md">
            <AspectRatio className="bg-muted relative rounded-md">
              <Image
                src="https://avatars.githubusercontent.com/u/82529126?v=4"
                alt="Benjo Quilario"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md shadow-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
