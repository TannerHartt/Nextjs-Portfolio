import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { WordPress } from "@/components/ui/svgs/wordpress";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { Php } from "@/components/ui/svgs/php";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Figma } from "@/components/ui/svgs/figma";
import { Notion } from "@/components/ui/svgs/notion";
import { Github } from "@/components/ui/svgs/github";
import { Angular } from "@/components/ui/svgs/angular";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { Gemini } from "@/components/ui/svgs/gemini";
import { Grok } from "@/components/ui/svgs/grok";
import { Firebase } from "@/components/ui/svgs/firebase";
import { OpenAI } from "@/components/ui/svgs/openai";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { VueJS } from "@/components/ui/svgs/vuejs";
import { N8N } from "@/components/ui/svgs/n8n";
import { AirTable } from "@/components/ui/svgs/airtable";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Git } from "@/components/ui/svgs/git";
import { VisualStudioCode } from "@/components/ui/svgs/vscode";
import { Postman } from "@/components/ui/svgs/postman";
import { VisualStudio } from "@/components/ui/svgs/visualstudio";
import { Css3 } from "@/components/ui/svgs/css3";
import { Claude } from "@/components/ui/svgs/claude";
import { Html5 } from "@/components/ui/svgs/html5";
import { CPlusPlus } from "@/components/ui/svgs/cpp";
import { JQuery } from "@/components/ui/svgs/jquery";
import { WebComponentsAPI } from "@/components/ui/svgs/webcomponentsapi";
import { Adobe } from "@/components/ui/svgs/adobe";
import { ThreeJS } from "@/components/ui/svgs/threejs";
import { Express } from "@/components/ui/svgs/expressjs";
import { Semrush } from "@/components/ui/svgs/semrush";

export const DATA = {
  name: "Tanner Hart",
  initials: "TH",
  url: "https://tannerh.me",
  location: "Chico, CA",
  locationLink: "https://www.google.com/maps/place/chico",
  description:
    "Software Developer for AMain Sports & Hobbies. I have a passion for building and scaling SaaS products, and I'm always looking for new \
    opportunities to learn and grow as a developer.",
  summary: 
    "I am a self-taught software developer with a passion for working on a wide variety of projects. I have experience working \
    with many different technologies, and I am always looking for new opportunities to learn and grow as a developer. I have a strong \
    background in system & web development, digital marketing, and developing software and I am particularly interested in building scalable and \
    efficient applications. I am also interested in AI and automation. I build automation tools in [n8n](https://n8n.io/) for \
    various business applications. I am currently working as a Software Developer for [AMain Sports & Hobbies](https://amainhobbies.com), where I work \
    on a custom commerce software stack for our brands. I have built and maintained 30+ websites for clients from a wide variety of different domains, \
    some of which I still independently maintain.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Javascript", icon: JavaScript },
    { name: "JQuery", icon: JQuery },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Supabase", icon: Supabase },
    { name: "Docker", icon: Docker },
    { name: "C#", icon: Csharp },
    { name: "C++", icon: CPlusPlus },
    { name: "Java", icon: Java },
    { name: "PHP", icon: Php },
    { name: "Wordpress", icon: WordPress },
    { name: "Figma", icon: Figma },
    { name: "Notion", icon: Notion },
    { name: "Github", icon: Github },
    { name: "Angular", icon: Angular },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Gemini", icon: Gemini },
    { name: "Grok", icon: Grok },
    { name: "Firebase", icon: Firebase },
    { name: "Open AI", icon: OpenAI },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Vue JS", icon: VueJS },
    { name: "n8n", icon: N8N },
    { name: "AirTable", icon: AirTable },
    { name: "MySQL", icon: MySQL },
    { name: "Git", icon: Git },
    { name: "VS Code", icon: VisualStudioCode },
    { name: "Visual Studio", icon: VisualStudio },
    { name: "Postman", icon: Postman },
    { name: "CSS", icon: Css3 },
    { name: "Claude Code", icon: Claude },
    { name: "HTML 5", icon: Html5 },
    { name: "Web Components API", icon: WebComponentsAPI },
    { name: "Adobe", icon: Adobe },
    { name: "ThreeJS", icon: ThreeJS },
    { name: "ExpressJS", icon: Express },
    { name: "Semrush", icon: Semrush },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tannerhartt",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AMain Sports & Hobbies",
      href: "https://amainhobbies.com",
      badges: [],
      location: "On Site - Chico, CA",
      title: "Software Developer",
      logoUrl: "/amain.webp",
      start: "September 2025",
      end: "Present",
      description:
        "I work as a part of a Software Development team that built and maintain a custom Ecommerce Software Stack for AMain Sports & Hobbies, \
        and its subsidiary brands - Performance Bike, HobbyTown, & more. I have been involved in adding new features, integration testing, \
        and general maintenance of the software stack to ensure a smooth shopping experience for our customers. We provide completely custom solutions \
        for our brands, and I have had the opportunity to work on a wide variety of projects with our team. \ ",
    },
    {
      company: "TC Painting",
      badges: [],
      href: "https://tcpaintingchicoca.com",
      location: "On Site - Chico, CA",
      title: "Residential Painter",
      logoUrl: "/tcpainting.webp",
      start: "December 2024",
      end: "Present",
      description:
        "During my time learning to be a software developer, I wanted to start a side business to help stay active and build something of my own \
        outside of software. I started a residential painting business in my local area and have been running it for the past year. \
        I have had the opportunity to work on a variety of projects and have learned a lot about running a small business."
    },
    {
      company: "Method Marketing",
      badges: [],
      href: "https://methodmarketing.com",
      location: "On Site - Chico, CA",
      title: "Web Developer",
      logoUrl: "/mm.webp",
      start: "August 2023",
      end: "September 2025",
      description:
        "Starting as an internship, I was later hired full time where I continued to work for a small digital marketing agency in Chico, I was a web developer and apart of a diverse team of developers, designers, \
        and marketers to build custom solutions for our clients. I built and maintained 30+ websites for clients from a wide variety of different domains. \
        Our developer team also built and maintained custom Aggricultural Software for a large client in the agriculture industry. \
        We also had several ecommerce clients in which we helped them build and maintain their stores that were hosted on a many of the major ecommerce \
        platforms such as Shopify, Magento, and WooCommerce. \ "
    },
    {
      company: "Cognizant",
      href: "",
      badges: [],
      location: "Remote",
      title: "Junior Software Developer",
      logoUrl: "/cognizant.webp",
      start: "January 2022",
      end: "June 2023",
      description:
        "I worked as a Junior Software Developer for Cognizant, a large IT consulting company. It was a sort of \"pseudo\" internership where I was \
        working as a developer trainee and worked on custom software for their internal infrastructure. I learned a lot about systems programming and \
        it helped prepare me for my future roles as a software developer. "
    },
    // {
    //   company: "Mason George Motercycles",
    //   href: "",
    //   badges: [],
    //   location: "On Site - Felton, CA",
    //   title: "Sales Associate & Assistant",
    //   logoUrl: "/nvidia.png",
    //   start: "February 2021",
    //   end: "January 2022",
    //   description:
    //     "I had just moved to California and as I was beginning to teach myself how to code, I decided to begin working at a family friend's motorcycle \
    //     shop to help make some money while I was learning. I worked as a sales associate and assistant to the mechanics, where I helped \
    //     customers into the shop for services and more."
    // },
    {
      company: "Best Buy",
      href: "",
      badges: [],
      location: "On Site",
      title: "Computer Sales Associate",
      logoUrl: "/nvidia.png",
      start: "March 2019",
      end: "June 2020",
      description:
        "While I worked here I delivered friendly, knowledgeable customer service while helping clients find the right computers, appliances, components, \
        accessories, and software solutions for their needs. Provided guidance on technology decisions, answered technical questions, \
        and offered troubleshooting support to ensure customers felt confident using their products."
    },
  ],
  education: [
    {
      school: "California State University, Chico",
      href: "https://www.csuchico.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/csuchico.webp",
      start: "2023",
      end: "2025",
    },
    {
      school: "DeVry University",
      href: "https://www.devry.edu/",
      degree: "Bachelor's Degree in Software Development (BSD), Associates of Information Technology & Networking, Programming Essentials Certificate",
      logoUrl: "/devry.webp",
      start: "2021",
      end: "2024",
    },

  ],
  projects: [
    {
      title: "Clipshare",
      href: "https://clips-app-tan.vercel.app/",
      dates: "",
      active: true,
      description:
        "This is a web application which allows users to share and view clips of their favorite video clips. Users can \
        create accounts, browse, and upload video clips, and view clips that have been shared by other users. The application \
        is lightweight and fast, and it provides a simple and intuitive interface for sharing and viewing video clips.",
      technologies: [
        "Angular",
        "Typescript",
        "Firebase",
        "Video.js",
        "TailwindCSS",
        "RxJS",
        "Material UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://clips-app-tan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "MoviesDB",
      href: "https://moviesdb-alpha.vercel.app/",
      dates: "",
      active: true,
      description:
        "I built a lightweight Movie Database Application. It is built using [The Movie DB](https://www.themoviedb.org/). The Movie DB \
        provides a free API for accessing movie data, and I used it to build a simple and intuitive interface for browsing and searching \
        for movies & TV shows. The application is built using Angular and TailwindCSS, and it is deployed on Vercel.",
      technologies: [
        "Angular",
        "TailwindCSS",
        "Firebase",
        "Prime NG",
        "TMDB API",
        "Material UI",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://moviesdb-alpha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TannerHartt/MoviesApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  peronsal_projects: [
    {
      title: "Automatic Redirect Table Repair Workflow - n8n",
      dates: "",
      location: "Hydrobuilder - Chico, CA",
      description:
        "Assisted a client with a Magento -> Shopify migration by building a custom n8n workflow which automatically repaired all broken redirects in the client's Shopify store.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "2D Browser Shooter Game",
      dates: "",
      location: "",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "React Prompt Library Builder",
      dates: "February 2026",
      location: "Local Sandbox",
      description:
        "Developed a custom React and Vite application to build and store system prompts. Features a dynamic prompt builder panel with interactive variable parsing, auto-growing text areas, and a Supabase-inspired sidebar navigation structure.",
      icon: "code",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: ".NET MVC Architecture Sandbox",
      dates: "July 2026",
      location: "Visual Studio",
      description:
        "Constructed an exploratory backend Web API sandbox using C#, Entity Framework, and the MVC design pattern. Utilized to practice algorithm construction, including doubly linked list to array conversions.",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
} as const;
