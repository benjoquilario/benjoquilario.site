/* eslint-disable @next/next/no-img-element */
import React from "react"
import { TfiTwitter } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa"
import { TbBrandGithub } from "react-icons/tb"
import { AiOutlineLinkedin } from "react-icons/ai"
import { CgMail } from "react-icons/cg"
import classNames from "classnames"

const ICONLIST = [
  {
    title: "Twitter",
    icon: TfiTwitter,
    href: "https://twitter.com/iam_benjo",
  },
  {
    title: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/Benjo.Add07/",
  },
  {
    title: "Github",
    icon: TbBrandGithub,
    href: "https://github.com/benjoquilario",
  },
  {
    title: "LinkedIn",
    icon: AiOutlineLinkedin,
    href: "https://www.linkedin.com/in/benjo-quilario-415a351bb/",
  },
  {
    title: "Gmail",
    icon: CgMail,
    href: "mailto:benjoquilario@gmail.com",
  },
]

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-8 md:flex-row">
        <div className="flex w-full flex-col md:w-[60%]">
          <p className="text-dark font-light">Ohh you found me?. Howdy! I am</p>
          <h1 className="text-dark mt-4 font-sans text-2xl font-bold md:text-5xl">
            BENJO M.
          </h1>
          <h2 className="font-sans text-3xl font-bold text-primary md:text-7xl">
            QUILARIO.
          </h2>
          <p className="text-dark text-sm md:text-base">
            Or you could call me JO. That works too . . .
          </p>
          <h3 className="mt-2 text-base font-bold text-primary">
            Frontend Developer
          </h3>
          <p className="mt-2 text-xs !leading-6 md:text-sm">
            Hey! How nice of you to look at my personal site,{" "}
            <span className="font-bold text-primary">Thank you!</span> I am
            Frontend developer that specializes at frontend integration,
            recently found myself studying backend apis and UX/UI Design too.
          </p>
          <a
            href="#!"
            className={classNames(
              "border-dark mt-6 flex h-12 w-32 items-center justify-center rounded-sm border-[1px] text-sm transition hover:scale-105",
              "focus:outline-none focus:outline-offset-1 focus:outline-secondary",
              "transition duration-150 ease-in-out",
              "active:border-dark active:text-[#7a828a]"
            )}
          >
            Get in touch!
          </a>
          <div className="mt-7 flex gap-2">
            {ICONLIST.map((icon) => (
              <a
                href={icon.href}
                className="text-dark transition hover:text-primary"
                key={icon.title}
                target="_blank"
              >
                <icon.icon className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative ml-0 w-full md:ml-4 md:w-[40%]">
          <figure className="h-[155px] w-[155px] rounded-2xl p-1 shadow-lg">
            <img
              className="rounded-2xl"
              src="/benjo.jpg"
              alt="Benjo Quilario"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Hero
