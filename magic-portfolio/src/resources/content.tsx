import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
  BasePageConfig,
} from "@/types";
import Link from "next/link";

const person: Person = {
  firstName: "Sajid",
  lastName: "Pervez",
  name: `Sajid Pervez`,
  role: "Principal Product Security Engineer",
  avatar: "/Sajid-1.jpeg",
  email: "hello@sajidpervez.com",
  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Stay up to date with {person.firstName}</>,
  description: <>Essays, reading picks, and security insights—delivered occasionally.</>,
  ctaUrl: "https://sajidpervez.kit.com/c978e30ec2/index.js",
  ctaLabel: "Join the newsletter",
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "X",
    icon: "x",
    link: "https://x.com/sajid233",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sajidpervez/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SajidPervez",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Cybersecurity & Product Security`,
  description: `Insights, essays, and collections from ${person.name}, ${person.role}.`,
  headline: <>I share my cybersecurity journey, offering insights and real-world experiences to inspire and inform.</>,
  featured: {
    display: false,
    title: null,
    href: "",
  },
  subline: (
    <>
      Reviewing code (with GenAI assistance), conducting security architecture reviews, threat modeling, experimenting with AI tools, and staying current through books and podcasts.<br />
      Currently helping shape product security at{" "}
      <Link href="https://www.myob.com" target="_blank" rel="noopener noreferrer">
        MYOB
      </Link>
      .
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Melbourne, Australia.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Some context",
    description: (
      <>
        <p>
          My career lives at the intersection of application security, cloud security, and building software.
          I spend my days digging into design flaws, figuring out how systems really work, and helping teams ship secure products without slowing down.
        </p>
        <p>
          Titles keep changing, but the mission is constant—solving software security puzzles and finding pragmatic fixes for every design flaw and coding bug.
        </p>
        <p>
          Right now I'm a Principal Product Security Engineer at{" "}
          <Link href="https://www.myob.com" target="_blank" rel="noopener noreferrer">
            MYOB
          </Link>
          , a SaaS company supporting businesses across Australia and New Zealand.
        </p>
        <p>
          I started my journey back in 2005 writing cryptography solutions, integrating PKI and 2FA into enterprise stacks, and happily breaking applications to make them stronger.
        </p>
        <p>
          Since moving to Australia, I’ve helped organisations of every size build sustainable product security programs—whether that means bootstrapping tooling, coaching developers, or steering strategy with leadership.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MYOB",
        timeframe: "Jun 2022 – Present",
        role: "Principal Product Security Engineer",
        achievements: [
          <>
            Leading product security across MYOB’s SaaS portfolio—security architecture reviews, threat modelling, vulnerability management, developer enablement, and more.
          </>,
          <>Helping teams ship faster by embedding sustainable guardrails and lightweight security workflows.</>,
        ],
        images: [
          {
            src: "/myob-logo.png",
            alt: "MYOB logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "NBN Co",
        timeframe: "Sep 2020 – Jun 2022",
        role: "Application Security Lead",
        achievements: [
          <>Ran an application security maturity assessment and rolled SAST and SCA across critical applications.</>,
          <>Designed and delivered secure coding training while partnering with engineers on remediation strategies.</>,
        ],
        images: [
          {
            src: "/nbn-logo.png",
            alt: "NBN Co logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AGL Energy",
        timeframe: "Aug 2019 – Jun 2020",
        role: "Senior Security Engineer",
        achievements: [
          <>Managed application security tooling, automation, reporting, and developer triage workflows.</>,
          <>Built developer training content to improve remediation outcomes across the portfolio.</>,
        ],
        images: [
          {
            src: "/agl-logo.png",
            alt: "AGL logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Telstra",
        timeframe: "Apr 2018 – Aug 2019",
        role: "Application Security Consultant",
        achievements: [
          <>Supported delivery teams with tooling automation, vulnerability triage, and remediation guidance.</>,
          <>Provided reporting and enablement to keep product releases aligned with security expectations.</>,
        ],
        images: [
          {
            src: "/telstra.png",
            alt: "Telstra logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "UL Solutions",
        timeframe: "Oct 2015 – Mar 2018",
        role: "Senior TS Advisor (PCI-QSA)",
        achievements: [
          <>Assessed payment applications as a PCI-QSA while delivering LAMP-stack solutions for mobile, payments, and transit clients.</>,
          <>Guided organisations through complex compliance requirements without sacrificing product velocity.</>,
        ],
        images: [
          {
            src: "/ul-ts.png",
            alt: "UL Solutions logo",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights through my blog",
  description: `Security notes, field stories, and curated resources from ${person.name}.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const library: BasePageConfig = {
  path: "/books",
  label: "Library",
  title: `Library – ${person.name}`,
  description: `Books that has shaped how I approaches product security and leadership.`,
};

const tags: BasePageConfig = {
  path: "/tags",
  label: "Tags",
  title: `Tags – ${person.name}`,
  description: `Browse essays and notes from ${person.name} by topic.`,
};

const podcastsPage: BasePageConfig = {
  path: "/podcasts",
  label: "Podcasts",
  title: `Listening – ${person.name}`,
  description: `Conversations and shows that keep me curious about security and beyond.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects and experiments by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  library,
  tags,
  podcastsPage,
  work,
  gallery,
};
