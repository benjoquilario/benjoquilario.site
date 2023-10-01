import { TfiTwitter } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa"
import { TbBrandGithub } from "react-icons/tb"
import { AiOutlineLinkedin } from "react-icons/ai"
import { CgMail } from "react-icons/cg"

type ContactLink = {
  title: string
  icon: any
  href: string
}

const contactLinks: ContactLink[] = [
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

export default contactLinks
