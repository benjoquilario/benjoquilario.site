import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'BenJo QuiLario',
  description: '21 y/o Frontend Developer base in Philippines',
  url: 'https://benjoquilario.vercel.app/',
  ogImage: 'https://avatars.githubusercontent.com/u/82529126?v=4',
  mainNav: [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  links: {
    twitter: 'https://twitter.com/iam_benjo',
    github: 'https://github.com/benjoquilario',
    linkedIn: 'https://www.linkedin.com/in/benjo-quilario-415a351bb/',
    email: 'mail:benjoquilario@gmail.com',
  },
};
