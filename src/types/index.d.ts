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
}
