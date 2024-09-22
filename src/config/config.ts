import { GithubIcon, LinkedinIcon } from "lucide-react"
import { RiTwitterXLine } from "react-icons/ri"
import { siteConfig } from "./site"

export const REPOS = [
  "animehi-stream",
  "t3-insider",
  "chatty",
  "blogfolio",
  "just-work",
  "marino-clothing",
]

export const REPOS_URL = [
  ...REPOS,
  "anitaku-api",
  "amabank-landing-page",
  "next-movies",
  "crud-invoice-app",
]

export const qa = [
  {
    question: "Where are you currently studying?",
    answer:
      "I'm currently studying Bachelor of Science in Information Technology at AMA University - Quezon City.",
  },
  {
    question: "Have you worked on any projects?",
    answer:
      "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams.",
  },
  {
    question: "Can we recruit you?",
    answer:
      "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams.",
  },
  {
    question:
      "How do you stay updated with the latest developments in your field?",
    answer:
      "I read articles, watch videos, follow industry leaders and participate in online courses ",
  },
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
