export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedIn: string
    email: string
  }
  email: string
  username: string
  mainNav: Array<{ title: string; href: string }>
  otherNav: Array<{ title: string; href: string }>
}

export type Article = {
  slug: string
  description: string
  title: string
  date: Date
}
