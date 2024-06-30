import { GithubIcon, LinkedinIcon } from "lucide-react"
import { RiTwitterXLine } from "react-icons/ri"
import { siteConfig } from "./site"

export const REPOS = [
  "animehi-stream",
  "t3-insider",
  "chatty",
  "blogfolio",
  "crud-invoice-app",
  "amabank-landing-page",
]

export const SocialLinks = [
  {
    title: "Twitter",
    icon: RiTwitterXLine,
    path: siteConfig.links.twitter,
  },
  {
    title: "Github",
    icon: GithubIcon,
    path: siteConfig.links.github,
  },
  {
    title: "LinkedIn",
    icon: LinkedinIcon,
    path: siteConfig.links.linkedIn,
  },
]
