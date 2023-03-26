import React from 'react';
import { GrMapLocation, GrMailOption } from 'react-icons/gr';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 w-full">
      <h3 className="font-mono uppercase text-2xl md:text-3xl font-semibold mb-2">
        <span className="text-4xl">C</span>
        ONTACT.
      </h3>
      <h6 className="text-base md:text-lg font-semibold">
        Don&apos;t be shy! Hit me up! 👇
      </h6>
      <div className="mt-6 flex-col md:flex-row flex gap-3 md:gap-8">
        <div className="flex items-center gap-3 text-primary">
          <GrMapLocation className="h-10 w-10" />
          <div className="flex flex-col">
            <div className="text-sm md:text-base font-semibold text-dark">
              Location
            </div>
            <span className="text-dark text-xs md:text-sm">
              Quezon City, Philippines
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <GrMailOption className="h-10 w-10" />
          <div className="flex flex-col">
            <div className="font-semibold text-dark text-sm md:text-base">
              Email
            </div>
            <span className="text-dark text-xs md:text-sm">
              benjoquilario@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
