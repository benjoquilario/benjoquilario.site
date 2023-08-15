import {
  SiTrpc,
  SiNextdotjs,
  SiPrisma,
  SiFramer,
  SiMongodb,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReacthookform,
  SiFigma,
  SiNodedotjs,
  SiGraphql,
  SiReactquery,
  SiReactrouter,
  SiSocketdotio,
  SiStyledcomponents,
  SiChakraui,
  SiVisualstudiocode,
  SiGnubash,
  SiGit,
  SiExpress,
  SiHeroku,
} from "react-icons/si"

export const projects = [
  {
    name: "Insider",
    description:
      "A Fullstack social media application intended to make a community, friends, and make the world more open and connected.",
    image: ["/insider.png", "/insider-2.png", "/insider-3.png"],
    url: "https://t3-insider.vercel.app/",
    sources_code: "https://github.com/benjoquilario/next-insider",
    tech: [
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Trpc",
        icon: SiTrpc,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "React-hook-form",
        icon: SiReacthookform,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
    ],
    status: "public",
  },
  {
    name: "AnimeZia",
    description:
      "AnimeZia is a popular anime streaming services where everyone can search, browse and watch anime without ads and no vpn required.",
    image: [
      "/animezia.png",
      "/animezia-2.png",
      "/animezia-4.png",
      "/animezia-3.png",
    ],
    url: "https://animezia.com/",
    sources_code: "https://github.com/benjoquilario/animezia-hi",
    tech: [
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
      {
        name: "Heroku",
        icon: SiHeroku,
      },
    ],
    status: "private",
  },
  {
    name: "D-Invoices",
    description:
      "D-Invoices is used to manage invoices and allows the user to create, read, update, filter by status and delete invoices.",
    image: ["/invoices.png", "/invoices-2.png", "/invoices-3.png"],
    url: "https://invoices-benjo.netlify.app/",
    sources_code: "https://github.com/benjoquilario/crud-invoice-app",
    tech: [
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "CSS3",
        icon: SiCss3,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "Framer",
        icon: SiFramer,
      },
    ],
    status: "public",
  },
  {
    name: "AMABank",
    description:
      "AMABank is a responsive landing page which showcases accessibility practices from skip links to tabbable contents.",
    image: ["/amabank.png", "/amabank-2.png", "/amabank-3.png"],
    url: "https://amabank-benjo.netlify.app/",
    sources_code: "https://github.com/benjoquilario/AMABank-Landing-page",
    status: "public",
    tech: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Sass",
        icon: SiSass,
      },
      {
        name: "CSS3",
        icon: SiCss3,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },
]

export const skillset = {
  backend: [
    {
      name: "Node",
      icon: SiNodedotjs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
    },
    {
      name: "JavaScript (ES6+)",
      icon: SiJavascript,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
  ],
  frontend: [
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "NextJs",
      icon: SiNodedotjs,
    },
    {
      name: "Redux",
      icon: SiRedux,
    },
    {
      name: "React-hook-form",
      icon: SiReacthookform,
    },
    {
      name: "React Query",
      icon: SiReactquery,
    },
    {
      name: "React Router",
      icon: SiReactrouter,
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Socket.io",
      icon: SiSocketdotio,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
    },
    {
      name: "Trpc",
      icon: SiTrpc,
    },
  ],
  ui: [
    {
      name: "Styled Components",
      icon: SiStyledcomponents,
    },
    {
      name: "Chakra ui",
      icon: SiChakraui,
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      name: "Sass",
      icon: SiSass,
    },
  ],
  boost: [
    {
      name: "VSCode",
      icon: SiVisualstudiocode,
    },
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "Bash",
      icon: SiGnubash,
    },
  ],
}
