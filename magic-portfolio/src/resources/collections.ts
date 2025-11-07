import { Book, MerchItem, Podcast } from "@/types";

export const books: Book[] = [
  {
    title: "97 Things Every Application Security Professional Should Know",
    author: "Reet Kaur (Author), Yabing Wang (Author)",
    cover: {
      src: "/97-things-every-appsec-pro-should-know.png",
      alt: "97 Things Every AppSec Professional Should Know",
    },
    comments:
      "Practical advice spanning web, mobile, API, and cloud development across every flavour of SDLC.",
    url: "https://amzn.asia/d/goYRFtg",
    status: "reading",
  },
  {
    title: "Alice and Bob Learn Application Security",
    author: "Tanya Janca",
    cover: {
      src: "/alice-and-bob-learn-app-sec.jpg",
      alt: "Alice and Bob Learn Application Security Book Cover",
    },
    comments:
      "An accessible companion for weaving security into every SDLC phase—complete with stories, analogies, and deep dives.",
    url: "https://www.amazon.com.au/Alice-Bob-Learn-Application-Security-ebook/dp/B08KTHYNVM",
    status: "read",
  },
  {
    title: "API Security for White Hat Hackers",
    author: "Confidence Staveley",
    cover: {
      src: "/api-security-for-white-hat-hackers.jpg",
      alt: "API Security for White Hat Hackers Book Cover",
    },
    comments:
      "Hands-on guidance for testing, finding, and fixing API weaknesses—written for security engineers and developers alike.",
    url: "https://www.amazon.com.au/API-Security-White-Hackers-implementation-ebook/dp/B0CLG8NR4V",
    status: "reading",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: {
      src: "/atomic-habits.jpg",
      alt: "Atomic Habits Book Cover",
    },
    comments:
      "A toolkit for building small, compounding habits that reshape how you work, learn, and lead.",
    url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    status: "read",
  },
  {
    title: "Not with a Bug but with a Sticker",
    author: "Ram Shankar Siva Kumar, Hyrum Anderson",
    cover: {
      src: "/not-with-a-bug-but-with-a-sticker.png",
      alt: "Not with a Bug but with a Sticker Book Cover",
    },
    comments:
      "A tour of adversarial machine learning and why ML systems lag behind traditional software security maturity.",
    url: "https://www.amazon.com.au/Not-Bug-But-Sticker-Learning/dp/1119883989",
    status: "reading",
  },
  {
    title: "Securing DevOps",
    author: "Julien Vehent",
    cover: {
      src: "/securing-devops.jpg",
      alt: "Securing DevOps Book Cover",
    },
    comments:
      "Practical security patterns for modern pipelines—covering build, deploy, cloud, and detection in high-velocity teams.",
    url: "https://www.amazon.com.au/Securing-DevOps-Security-Julien-Vehent/dp/1617294136",
    status: "read",
  },
  {
    title: "The Web Application Hacker's Handbook 2",
    author: "Dafydd Stuttard & Marcus Pinto",
    cover: {
      src: "/the-web-app-hackers-handbook-2.jpg",
      alt: "The Web Application Hacker's Handbook 2 Book Cover",
    },
    comments:
      "The classic manual for uncovering and exploiting web app flaws—still essential for builders and breakers.",
    url: "https://www.amazon.com.au/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470",
    status: "read",
  },
];

export const podcasts: Podcast[] = [
  {
    name: "Absolute AppSec",
    host: "Ken Johnson & Seth Law",
    description: "Weekly conversations covering the realities of building and breaking modern applications.",
    cover: {
      src: "/absolute-appsec.jpeg",
      alt: "Absolute AppSec Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/absolute-appsec/id1402701626",
  },
  {
    name: "The Application Security Podcast",
    host: "Chris Romeo & Robert Hulburt",
    description:
      "Tips, tactics, and stories from practitioners who make application security work inside real organisations.",
    cover: {
      src: "/application-security-podcast.jpeg",
      alt: "The Application Security Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/the-application-security-podcast/id1154351685",
  },
  {
    name: "Application Security Weekly",
    host: "Mike Shema, John Kinsella, Keith Hoodlet",
    description:
      "Security Weekly’s take on the week’s biggest application security news, vulns, and trends.",
    cover: {
      src: "/application-security-weekly.jpeg",
      alt: "Application Security Weekly Podcast Logo",
    },
    url: "https://securityweekly.com/category/application-security-weekly/",
  },
  {
    name: "Cloud Security Podcast",
    host: "Ashish Rajan & Shilpi Bhattacharjee",
    description:
      "Deep dives on building cloud security programs, with perspectives from practitioners, vendors, and researchers.",
    cover: {
      src: "/cloud-security.jpeg",
      alt: "Cloud Security Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/cloud-security-podcast/id1489678590",
  },
  {
    name: "Future of Application Security",
    host: "Harshil Parikh",
    description:
      "A playbook for modern AppSec leaders—covering program strategy, metrics, and the humans behind it.",
    cover: {
      src: "/future-of-app-sec.jpeg",
      alt: "Future of Application Security Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/future-of-application-security/id1615681970",
  },
  {
    name: "Lex Fridman Podcast",
    host: "Lex Fridman",
    description:
      "Wide-ranging long-form interviews on AI, science, technology, history, and what it means to be human.",
    cover: {
      src: "/lex-fridman-podcast.jpeg",
      alt: "Lex Fridman Podcast Logo",
    },
    url: "https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584",
  },
  {
    name: "The OWASP Podcast Series",
    host: "Matt Tesauro",
    description:
      "Discussions with OWASP leaders and practitioners on the projects and ideas shaping software security.",
    cover: {
      src: "/owasp-podcast.jpeg",
      alt: "OWASP Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/the-owasp-podcast-series/id300769012",
  },
  {
    name: "Secured by Galah Cyber",
    host: "Cole Cornford",
    description:
      "Australian security stories from practitioners who forged unconventional career paths in AppSec.",
    cover: {
      src: "/secured.jpeg",
      alt: "Secured Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/secured-by-galah-cyber/id1680660068",
  },
  {
    name: "The Boring AppSec",
    host: "Anushman & Sandesh",
    description: "Hot takes and honest conversations about the day-to-day life of application security.",
    cover: {
      src: "/the-boring-appsec.jpeg",
      alt: "The Boring AppSec Podcast Logo",
    },
    url: "https://podcasts.apple.com/au/podcast/the-boring-appsec-podcast/id1734293204",
  },
  {
    name: "Unsupervised Learning",
    host: "Daniel Miessler",
    description:
      "Weekly distillations of security news, analysis, and concepts—perfect for staying sharp on the essentials.",
    cover: {
      src: "/unsupervised-learning.jpeg",
      alt: "Unsupervised Learning Podcast Logo",
    },
    url: "https://podcasts.apple.com/us/podcast/unsupervised-learning/id1099711235",
  },
];

export const merch: MerchItem[] = [
  {
    name: "GRC Life",
    description: '“GRC Life: Guarding against reckless choices since forever.”',
    cover: {
      src: "/work-164179925-classic-t-shirt.jpg",
      alt: "GRC Life T-Shirt Design",
    },
    purchaseLinks: [
      {
        platform: "Redbubble",
        url: "https://www.redbubble.com/shop/ap/164179925?asc=u",
      },
    ],
  },
  {
    name: "Living the GRC Dream",
    description: '“Living the GRC Dream: Compliance Never Sleeps.”',
    cover: {
      src: "/work-164206739-classic-t-shirt.jpg",
      alt: "Living the GRC Dream T-Shirt Design",
    },
    purchaseLinks: [
      {
        platform: "Redbubble",
        url: "https://www.redbubble.com/shop/ap/164180143",
      },
    ],
  },
  {
    name: "Living the SOC Life",
    description: '“Living the SOC Life: Scanning, observing, caffeinating.”',
    cover: {
      src: "/work-164198126-premium-t-shirt.jpg",
      alt: "SOC Life T-Shirt Design",
    },
    purchaseLinks: [
      {
        platform: "Redbubble",
        url: "https://www.redbubble.com/shop/ap/164198126?asc=u",
      },
    ],
  },
  {
    name: "SOC Life: Securing Our Chaos",
    description: '“SOC Life: Securing Our Chaos, One Alert at a Time.”',
    cover: {
      src: "/work-164180143-active-t-shirt.jpg",
      alt: "SOC Life: Securing Our Chaos T-Shirt Design",
    },
    purchaseLinks: [
      {
        platform: "Redbubble",
        url: "https://www.redbubble.com/shop/ap/164198126?asc=u",
      },
    ],
  },
];
