import { Icons } from "@/components/icons";
import {
  Activity,
  BookOpenText,
  Bot,
  BrainCircuit,
  Clapperboard,
  Droplets,
  FileText,
  FolderKanban,
  HomeIcon,
  KeyRound,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  SiAnthropic,
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type IconComponent = React.ComponentType<{ className?: string }>;

export type ProjectLink = {
  type: string;
  href: string;
  icon: React.ReactNode;
};

export type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  label: string;
  description: string;
  impact: string;
  resumeLine?: string;
  technologies: readonly string[];
  links: readonly ProjectLink[];
  cover: {
    from: string;
    to: string;
    accent: string;
    domain: string;
    logo?: string;
    icon?: IconComponent;
  };
};

const linkIcon = "size-3";

export const DATA = {
  name: "Ernest Hausmann",
  initials: "EH",
  url: "https://ernesthausmann.dev",
  location: "Columbus, Nebraska",
  locationLink: "https://www.google.com/maps/place/Columbus,+NE",
  role: "AI Creative Technologist · Founder of Vrymdor",
  description:
    "AI product engineer. I build AI products end to end, and I build them with AI tools, from the first idea to a public launch.",
  summary:
    "I'm an AI product engineer and the founder of [Vrymdor](https://vrymdor.com). I take AI products from idea to launch, and I build them with AI: I direct coding agents like Claude Code through planning, building, testing and release, while I own the product decisions, the quality bar and the launch.\n\nAs Vrymdor's only builder, I designed and launched the Vrymdor AI Node, a privacy filter that hides customer data and secret keys before any AI model reads them, together with its self-serve plans, its integrations for n8n, MCP, Make and Zapier, an AI-versus-AI security Arena and the console that releases it all. I also build AI products beyond Vrymdor: a live well-tracking website for a clean-water nonprofit, and an AI studio that turns a client's footage and brief into a finished commercial.\n\nBefore Vrymdor, I built production web applications with Next.js, TypeScript, React and PostgreSQL. I also work in IT systems at Loup Power District and study cybersecurity at Central Community College. I was a team captain on a national championship football team, and I bring the same habits to engineering: clear communication, ownership and steady execution.",
  avatarUrl: "/logos/vrymdor.png",
  resumeUrl: "/resume/",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: FolderKanban, label: "Projects" },
    { href: "/resume/", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "ernesthausmann15@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ernesthausmann15",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ernest-hausmann-a4755a387/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Vrymdor: {
        name: "Vrymdor",
        url: "https://vrymdor.com",
        icon: ShieldCheck,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:ernesthausmann15@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  founder: {
    company: "Vrymdor",
    legalName: "Vrymnox Systems LLC",
    href: "https://vrymdor.com",
    logoUrl: "/logos/vrymdor.png",
    tagline:
      "A privacy filter for AI: private details hidden before any AI model reads them.",
    status: "Publicly launched in November 2026",
    highlights: [
      {
        icon: BrainCircuit,
        title: "AI Node",
        text: "Hides emails, phone numbers, card numbers, US Social Security numbers and secret keys before an AI model reads the text, and records every run.",
      },
      {
        icon: ShieldCheck,
        title: "Free tools",
        text: "A secret scanner for n8n workflows and a live masking playground that run in the browser, plus the Arena, where ten AI Rivals attack an isolated copy of the AI Node and the community sends them attack ideas.",
      },
      {
        icon: KeyRound,
        title: "Self-serve plans",
        text: "A free Community plan with no card, and paid plans that start with a 14 day trial, all started and changed online.",
      },
      {
        icon: Network,
        title: "Open source",
        text: "A published n8n community node on npm and an MCP server on PyPI and the official MCP Registry, so the AI Node works inside n8n, Claude and VS Code.",
      },
    ],
    links: [
      { type: "Website", href: "https://vrymdor.com", icon: <Icons.globe className={linkIcon} /> },
      {
        type: "Docs",
        href: "https://docs.vrymdor.com/ai-node.html",
        icon: <BookOpenText className={linkIcon} />,
      },
      { type: "Status", href: "https://status.vrymdor.com", icon: <Activity className={linkIcon} /> },
      {
        type: "npm",
        href: "https://www.npmjs.com/package/n8n-nodes-vrymdor",
        icon: <SiNpm className={linkIcon} />,
      },
    ],
  },

  work: [
    {
      company: "Vrymdor (Vrymnox Systems LLC)",
      href: "https://vrymdor.com",
      location: "Nebraska",
      title: "Founder & AI Product Engineer",
      // The printed resume's shorter list (one page); the site shows every bullet.
      resumeBullets: [
        "Took Vrymdor from idea to public launch as the only builder (product, engineering, design, security and go-to-market), building with AI coding agents (Claude Code) held to my own specs, reviews and automated tests.",
        "Built the Vrymdor AI Node, a privacy filter that hides personal data and secret keys before any AI model reads them and keeps an audit record of every run.",
        "Designed an AI-versus-AI security Arena: ten AI Rivals attack an isolated copy of the AI Node, code (not a model) judges every attempt, and each fixed break becomes a permanent regression test.",
        "Shipped integrations where teams already work: an n8n community node on npm, an MCP server on PyPI and the official MCP Registry, and Make and Zapier apps.",
        "Built self-serve billing and a one-button release pipeline with live steps and automatic rollback.",
      ],
      logoUrl: "/logos/vrymdor.png",
      start: "Oct 2026",
      end: "Present",
      bullets: [
        "Founded Vrymdor and took it from idea to public launch as the only builder, owning product, engineering, design, security and go-to-market, and building with AI coding agents (Claude Code) held to my own specs, reviews and automated tests.",
        "Built the Vrymdor AI Node, a privacy filter that hides personal data and secret keys before any AI model reads the text and keeps an audit record of every run, for teams on n8n, Make, Zapier, LangChain, MCP clients and GitHub Actions.",
        "Designed the Arena, an AI-versus-AI security game: ten AI Rivals and community ideas attack an isolated copy of the AI Node, deterministic code (not a model) judges every attempt, and every fixed break becomes a permanent regression test credited in a public patch log.",
        "Launched free browser tools that bring in new users: a secret scanner that finds leaked keys and personal data in n8n workflows and fixes them, and a live masking playground.",
        "Built a one-button release pipeline in Vrymdor's operator console: releases run now or on a schedule, every step is tracked live, a failed release rolls back by itself, and customers see a banner with the version in their own time zone.",
        "Built self-serve sign-up and billing, from a free plan with a hard cap to paid plans with a 14 day trial, so customers start and upgrade without a sales call.",
        "Put the AI Node inside the tools teams already use: an open-source n8n community node on npm (passed n8n's automated review), an MCP server on PyPI and the official MCP Registry for Claude and VS Code, and apps for Make and Zapier.",
        "Ran the company's own operations on AI: automated marketing workflows where every post passes through the AI Node before it is published, and a bug list that clears an error only after a release's checks prove the fix.",
        "Launched Vrymdor Pathway Coach, a free AI career-practice tool for K-12 students that needs no accounts and stores no student data.",
      ],
    },
    {
      company: "Loup Power District",
      href: "https://loup.com",
      location: "Columbus, NE",
      title: "IT Systems & Infrastructure Intern",
      logoUrl: "/logos/loup.png",
      start: "Jun 2026",
      end: "Present",
      bullets: [
        "Improved internal operational interfaces and workstation provisioning workflows to raise usability and system reliability for technical staff.",
        "Collaborated on security gateway configuration (SEL-3620/3622) and systems architecture documentation to support clearer technical handoffs and stronger endpoint performance.",
      ],
    },
  ],

  education: [
    {
      school: "FES Institute",
      href: "https://www.frontendsimplified.com",
      degree: "Frontend Development Bootcamp, Graduate",
      logoUrl: "/logos/fes.png",
      start: "",
      end: "Sep 2026",
      detail:
        "Intensive frontend engineering coursework and a practical virtual internship: HTML, CSS, JavaScript, TypeScript, React, Next.js, Redux and Node.js.",
    },
    {
      school: "Central Community College",
      href: "https://www.cccneb.edu",
      degree: "Certificate in Cybersecurity, in progress",
      logoUrl: "/logos/cccneb.png",
      start: "",
      end: "Expected May 2027",
      detail:
        "Coursework in Python programming, Linux server administration and network security architecture.",
    },
    {
      school: "University of Michigan",
      href: "https://umich.edu",
      degree: "Undergraduate Studies",
      logoUrl: "/logos/umich.png",
      start: "Jan 2023",
      end: "Jan 2026",
      detail: "",
    },
    {
      school: "University of Nebraska–Lincoln",
      href: "https://www.unl.edu",
      degree: "Undergraduate Coursework",
      logoUrl: "/logos/unl.png",
      start: "Jan 2022",
      end: "Jan 2023",
      detail: "",
    },
  ],

  skills: [
    {
      category: "AI Product Engineering",
      items: [
        { name: "Claude Code and AI Coding Agents", icon: Bot },
        { name: "Claude API", icon: SiAnthropic },
        { name: "OpenAI API", icon: Icons.openai },
        { name: "Agents and Tool Use", icon: BrainCircuit },
        { name: "MCP Servers", icon: Network },
        { name: "Vision and Multimodal Pipelines", icon: Clapperboard },
        { name: "AI Evaluation and Regression Tests", icon: Activity },
        { name: "AI Privacy and Data Masking", icon: ShieldCheck },
        { name: "Workflow Automation (n8n)", icon: Workflow },
      ],
    },
    {
      category: "Languages & Frameworks",
      items: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
      ],
    },
    {
      category: "Data & Payments",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Firebase", icon: SiFirebase },
        { name: "Stripe", icon: SiStripe },
      ],
    },
    {
      category: "Cloud, Security & DevOps",
      items: [
        { name: "Linux Administration", icon: SiLinux },
        { name: "Network Security", icon: ShieldCheck },
        { name: "Identity & MFA", icon: KeyRound },
        { name: "Docker", icon: SiDocker },
        { name: "Render", icon: SiRender },
        { name: "Vercel", icon: SiVercel },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "Git", icon: SiGit },
        { name: "CI/CD", icon: SiGithubactions },
      ],
    },
  ],

  projects: [
    {
      title: "Vrymdor AI Node",
      href: "https://docs.vrymdor.com/ai-node.html",
      dates: "Oct 2026 - Present",
      active: true,
      label: "Vrymdor product",
      description:
        "A privacy filter that sits in front of AI models. It hides emails, phone numbers, card numbers, US Social Security numbers and secret keys (even when they are encoded or disguised) before the model reads the text, and keeps a record of every run.",
      impact:
        "Lets a team send customer messages, invoices and tickets to AI without handing over private data. Works with n8n, Make, Zapier, GitHub Actions, LangChain, MCP clients and plain HTTP.",
      technologies: ["AI/LLM", "Privacy", "API Design", "Audit Logging", "Python", "TypeScript"],
      links: [
        {
          type: "Docs",
          href: "https://docs.vrymdor.com/ai-node.html",
          icon: <BookOpenText className={linkIcon} />,
        },
      ],
      cover: {
        from: "#0a0f1a",
        to: "#08202a",
        accent: "#22d3ee",
        domain: "docs.vrymdor.com",
        logo: "/logos/vrymdor.png",
      },
    },
    {
      title: "Vrymdor free tools",
      href: "https://vrymdor.com/scan/",
      dates: "Nov 2026 - Present",
      active: true,
      label: "Vrymdor product",
      description:
        "A free secret scanner for n8n workflows, a live masking playground and use-case demos that run in the browser, plus the Arena, where ten AI Rivals attack an isolated copy of the AI Node and the community sends them attack ideas.",
      impact:
        "Shows people what their own workflows leak, and how to fix it, without the workflow leaving their browser.",
      technologies: ["TypeScript", "Next.js", "React", "Privacy", "Security"],
      links: [
        { type: "Scanner", href: "https://vrymdor.com/scan/", icon: <Icons.globe className={linkIcon} /> },
        { type: "Playground", href: "https://vrymdor.com/playground/", icon: <Icons.globe className={linkIcon} /> },
        { type: "Arena", href: "https://app.vrymdor.com/arena", icon: <Icons.globe className={linkIcon} /> },
      ],
      cover: {
        from: "#0b0918",
        to: "#1b1633",
        accent: "#a78bfa",
        domain: "vrymdor.com",
        logo: "/logos/vrymdor.png",
      },
    },
    {
      title: "Vrymdor n8n Community Node",
      href: "https://www.npmjs.com/package/n8n-nodes-vrymdor",
      dates: "Nov 2026",
      active: true,
      label: "Open source",
      description:
        "An MIT-licensed n8n node, published on npm with provenance, that routes each workflow step through the Vrymdor AI Node and works as a tool for n8n's AI Agent. Ready-to-import example workflows are included.",
      impact:
        "Puts data masking and an audit record into automation teams' existing n8n workflows.",
      technologies: ["TypeScript", "Node.js", "n8n", "npm", "Open Source"],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/n8n-nodes-vrymdor",
          icon: <SiNpm className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/n8n-nodes-vrymdor",
          icon: <Icons.github className={linkIcon} />,
        },
      ],
      cover: {
        from: "#140a12",
        to: "#2a0e1f",
        accent: "#ff6d5a",
        domain: "npmjs.com",
        icon: Workflow,
      },
    },
    {
      title: "Vrymdor Pathway Coach",
      href: "https://coach.vrymdor.com",
      dates: "Oct 2026",
      active: true,
      label: "Vrymdor product",
      description:
        "K-12 students practice an informational interview with an AI mentor, then get feedback on four interview skills and a printable \"What I learned\" card.",
      impact:
        "Mentor answers stay true to U.S. Bureau of Labor Statistics career data, and no accounts, cookies or student data are kept.",
      technologies: ["Next.js", "TypeScript", "Claude API", "Python", "Privacy by Design"],
      links: [
        {
          type: "Website",
          href: "https://coach.vrymdor.com",
          icon: <Icons.globe className={linkIcon} />,
        },
      ],
      cover: {
        from: "#07140f",
        to: "#0d2a1c",
        accent: "#34d399",
        domain: "coach.vrymdor.com",
        logo: "/logos/vrymdor.png",
      },
    },
    {
      title: "AI Commercial Studio",
      href: "",
      dates: "Nov 2026 - Present",
      active: true,
      label: "AI product",
      description:
        "A production studio run by AI agents. From a client's website, footage and brief, it writes the brand report, three concepts and the shot list, makes the storyboard, voice-over and music, cuts every length and aspect ratio, checks every frame with a vision model and builds an editable DaVinci Resolve project for the human finishing pass.",
      impact:
        "Each paid step waits for approval and runs under a spend cap. Its own frame checks caught weak AI-generated shots in the first commercial, which led to a better design that cuts the client's real footage in directly.",
      resumeLine:
        "A multi-model AI pipeline that turns a client's website, footage and brief into concepts, a storyboard, voice-over, music and every cut of a commercial, with approval gates, spend caps and vision-model QC.",
      technologies: ["Python", "Claude API", "Vision Models", "Multi-Model Pipeline", "ElevenLabs", "DaVinci Resolve"],
      links: [],
      cover: {
        from: "#120c05",
        to: "#2a1a08",
        accent: "#f5b041",
        domain: "private tool",
        icon: Clapperboard,
      },
    },
    {
      title: "Light Beneath the Well",
      href: "https://lightbeneaththewell.org",
      dates: "Nov 2026 - Present",
      active: true,
      label: "Nonprofit product",
      description:
        "The website of a clean-water nonprofit in Uganda, where donors follow every well live from survey to water flowing. The field team posts updates from their phones, and the foundation reviews and publishes from a simple dashboard.",
      impact:
        "Turns each step of a well into a public update, so donors see exactly where their gift went, and the team in Uganda can report without any training.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Product Design"],
      links: [
        {
          type: "Website",
          href: "https://lightbeneaththewell.org",
          icon: <Icons.globe className={linkIcon} />,
        },
      ],
      cover: {
        from: "#04121f",
        to: "#0a2a4a",
        accent: "#e0b301",
        domain: "lightbeneaththewell.org",
        icon: Droplets,
      },
    },
    {
      title: "Liquidation Hub",
      href: "https://liquidation-hub-d3g9.onrender.com",
      dates: "Sep 2026 - Present",
      active: true,
      label: "Full-stack showcase",
      description:
        "An e-commerce marketplace for overstock and open-box deals, with a live storefront and an operator console for managing inventory.",
      impact:
        "One-click demo logins let recruiters explore it without an account, and a simulated live order stream shows real-time stock changes.",
      technologies: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Render"],
      links: [
        {
          type: "Website",
          href: "https://liquidation-hub-d3g9.onrender.com",
          icon: <Icons.globe className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/liquidation_hub",
          icon: <Icons.github className={linkIcon} />,
        },
      ],
      cover: {
        from: "#0b0a1a",
        to: "#1b1035",
        accent: "#a78bfa",
        domain: "onrender.com",
        icon: FolderKanban,
      },
    },
    {
      title: "Skinstric",
      href: "https://skinstric-internship-nu-nine.vercel.app",
      dates: "Sep 2026",
      active: false,
      label: "Virtual internship",
      description:
        "Built the frontend for an AI skincare onboarding platform, with a guided setup, a camera and photo-capture step, and a results screen that ranks age, sex and race estimates.",
      impact: "Turns raw AI responses into clear, ranked lists that stay readable on any phone.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://skinstric-internship-nu-nine.vercel.app",
          icon: <Icons.globe className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/Skinstric-Internship",
          icon: <Icons.github className={linkIcon} />,
        },
      ],
      cover: {
        from: "#121212",
        to: "#2b2b2b",
        accent: "#e5e5e5",
        domain: "vercel.app",
        icon: Activity,
      },
    },
    {
      title: "Summarist",
      href: "https://virtual-internship-umber.vercel.app",
      dates: "Sep 2026",
      active: false,
      label: "Virtual internship",
      description:
        "A book-summary app where users read or listen to key ideas, save titles to a personal library and subscribe through Stripe.",
      impact: "Covers sign-in, a saved library and a working subscription checkout from start to finish.",
      technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Firebase", "Stripe", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://virtual-internship-umber.vercel.app",
          icon: <Icons.globe className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/Summarist",
          icon: <Icons.github className={linkIcon} />,
        },
      ],
      cover: {
        from: "#04121f",
        to: "#032b44",
        accent: "#2bd97c",
        domain: "vercel.app",
        icon: BookOpenText,
      },
    },
    {
      title: "Movie Grab",
      href: "https://movie-grab-typescript.vercel.app",
      dates: "Sep 2026",
      active: false,
      label: "FES project",
      description:
        "A film search app with loading skeletons, a stable detail page for every movie and a light or dark theme that is saved between visits.",
      impact: "Shows clean routing, shared layout and state that survives a page refresh.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OMDb API"],
      links: [
        {
          type: "Website",
          href: "https://movie-grab-typescript.vercel.app",
          icon: <Icons.globe className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/movie-grab-typescript",
          icon: <Icons.github className={linkIcon} />,
        },
      ],
      cover: {
        from: "#1a0707",
        to: "#3a0d0d",
        accent: "#f87171",
        domain: "vercel.app",
        icon: FolderKanban,
      },
    },
  ] satisfies Project[],

  leadership: [
    {
      title: "Team Captain & National Champion",
      organization: "University of Michigan Football",
      location: "Ann Arbor, MI",
      dates: "Jan 2023 - Jan 2025",
      logoUrl: "/logos/umich.png",
      description:
        "Selected by teammates as team captain, with a focus on communication, accountability and daily preparation. Contributed to a 15-0 season that ended in an NCAA Division I Football National Championship.",
    },
  ],
} as const;
