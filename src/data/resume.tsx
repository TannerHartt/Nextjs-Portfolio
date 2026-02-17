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
    with a wide variety of technologies, and I am always looking for new opportunities to learn and grow as a developer. I have a strong \
    background in web development, digital marketing, and developing software and I am particularly interested in building scalable and \
    efficient applications. I am also interested in AI and automation as well. I build automation tools in [n8n](https://n8n.io/) for \
    various business applications. I am currently working as a Software Developer for [AMain Sports & Hobbies](https://amainhobbies.com), where I work \
    on a custom commerce software stack for our brands. I have built and maintained 30+ websites for clients from a wide variety of different domains, \
    some of which I still independently maintain. ",
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
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
