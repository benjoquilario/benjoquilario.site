import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import { siteConfig } from "./site"

export const REPOS = [
  "t3-insider",
  "chatty",
  "animehi",
  "blogfolio",
  "crud-invoice-app",
  "amabank-landing-page",
]

export const SocialLinks = [
  {
    title: "Twitter",
    icon: TwitterIcon,
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
