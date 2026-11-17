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
  SiMake,
  SiPypi,
  SiZapier,
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
  role: "AI Automation & Integrations Engineer · Founder of Vrymdor",
  description:
    "AI automation and integrations engineer. I build automation systems in n8n, Make and Zapier, connect AI to the tools a business already runs, and keep customer data safe while it runs.",
  summary:
    "I'm an AI automation and integrations engineer and the founder of [Vrymdor](https://vrymdor.com). I build the systems that connect AI to the tools a business already runs: workflows in n8n, Make and Zapier, the APIs, webhooks and OAuth flows behind them, and the checks that keep customer data out of AI models.\n\nAs Vrymdor's only builder, I designed and launched the Vrymdor AI Node, a privacy layer that removes personal data and secret keys before an AI model reads them, and I built its integrations myself: an n8n community node on npm, apps for Make and Zapier, and an MCP server on PyPI and the official MCP Registry. I took each one through the platform's own review, turned the reviewers' feedback into fixes, and backed every submission with automated tests against a live node. I build with AI coding agents (Claude Code), and I own the design, the debugging and the result.\n\nI also work in IT systems at Loup Power District and study cybersecurity at Central Community College. I was a team captain on a national championship football team, and I bring the same habits to customer and engineering work: clear communication, ownership and steady execution.",
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
      "A privacy layer for AI automations: personal data and secret keys removed before any AI model reads them.",
    status: "Publicly launched in November 2026",
    highlights: [
      {
        icon: BrainCircuit,
        title: "AI Node",
        text: "Hides emails, phone numbers, card numbers, US Social Security numbers and secret keys before an AI model reads the text, and records every run.",
      },
      {
        icon: Workflow,
        title: "Integrations",
        text: "Built for the tools teams already automate with: an n8n community node, apps for Make and Zapier, an MCP server for Claude and VS Code, and plain HTTP.",
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
      title: "Founder & AI Automation Engineer",
      // The printed resume's shorter list (one page); the site shows every bullet.
      resumeBullets: [
        "Took Vrymdor from idea to public launch as the only builder, using AI coding agents (Claude Code) held to my own specs, reviews and tests.",
        "Built the Vrymdor AI Node, a privacy layer that removes personal data and secret keys before an AI model reads them, with agent identity, short lived tokens and an audit trail.",
        "Shipped its integrations: an n8n community node on npm, Make and Zapier apps, and an MCP server on PyPI and the official MCP Registry.",
        "Took each through the platform's review: relaunched the n8n node after its first rejection, and resolved all 14 items of Make's review with an OAuth 2.0 client credentials connection.",
        "Built a pre-submission check that runs each platform's own validation and sends each app's real requests to a live node, with a regression test for every bug found.",
      ],
      logoUrl: "/logos/vrymdor.png",
      start: "Oct 2026",
      end: "Present",
      bullets: [
        "Founded Vrymdor and took it from idea to public launch as the only builder, owning product, engineering, design, security and go-to-market, and building with AI coding agents (Claude Code) held to my own specs, code reviews and automated tests.",
        "Built the Vrymdor AI Node, a privacy layer that removes personal data and secret keys before an AI model reads them, with agent identity, short lived tokens, policy checks and an audit record of every run, for teams on n8n, Make, Zapier, LangChain, MCP clients and GitHub Actions.",
        "Built and shipped its integrations myself: an MIT-licensed n8n community node on npm with provenance that also works as a tool for n8n's AI Agent, a Make custom app, a Zapier app, and an MCP server on PyPI and the official MCP Registry for Claude and VS Code.",
        "Took each integration through the platform's own review: renamed and relinted the n8n node after its first rejection, recorded the demo video n8n asked for, and resolved all 14 items of Make's review by moving the app to OAuth 2.0 client credentials with authorization and error handling in the app's Base.",
        "Built a pre-submission check that runs each platform's own validation (n8n lint, zapier validate, Make structure) and sends each app's real requests to a live node, and added a regression test for every bug found in review, such as an n8n crash on older n8n versions and a Make request body sent as a quoted string.",
        "Designed the Arena, an AI-versus-AI security game: ten AI Rivals and community ideas attack an isolated copy of the AI Node, deterministic code (not a model) judges every attempt, and every fixed break becomes a permanent regression test credited in a public patch log.",
        "Launched free browser tools that bring in new users: a secret scanner that finds leaked keys and personal data in n8n workflows and fixes them, and a live masking playground.",
        "Built a one-button release pipeline in Vrymdor's operator console: releases run now or on a schedule, every step is tracked live, a failed release rolls back by itself, and customers see a banner with the version in their own time zone.",
        "Built self-serve sign-up and billing, from a free plan with a hard cap to paid plans with a 14 day trial, so customers start and upgrade without a sales call.",
        "Ran the company's own operations on automation: marketing workflows where every post passes through the AI Node before it is published, and a bug list that clears an error only after a release's checks prove the fix.",
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
      category: "Automation & Integrations",
      items: [
        { name: "n8n (Workflows and Custom Nodes)", icon: Workflow },
        { name: "Make (Custom Apps)", icon: SiMake },
        { name: "Zapier (Platform CLI Apps)", icon: SiZapier },
        { name: "REST APIs and Webhooks", icon: Network },
        { name: "OAuth 2.0", icon: KeyRound },
        { name: "MCP Servers", icon: Network },
        { name: "Integration Testing", icon: Activity },
      ],
    },
    {
      category: "AI Engineering",
      items: [
        { name: "Claude Code and AI Coding Agents", icon: Bot },
        { name: "Claude API", icon: SiAnthropic },
        { name: "OpenAI API", icon: Icons.openai },
        { name: "Agents and Tool Use", icon: BrainCircuit },
        { name: "AI Privacy and Data Masking", icon: ShieldCheck },
        { name: "AI Evaluation and Regression Tests", icon: Activity },
        { name: "Vision and Multimodal Pipelines", icon: Clapperboard },
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
        "Puts data masking and an audit record into automation teams' existing n8n workflows. Passed n8n's automated checks; n8n's verification review is in progress.",
      resumeLine:
        "An n8n node on npm that runs each workflow step through the AI Node and works as an AI Agent tool.",
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
      title: "Make and Zapier Apps",
      href: "https://vrymdor.com/developers/connect",
      dates: "Nov 2026",
      active: true,
      label: "Integrations",
      description:
        "A Make custom app (an OAuth 2.0 client credentials connection, a governed action module with fields nested by action, and a universal API call module) and a Zapier app built with the Zapier Platform CLI (two actions and session auth), both sending each step through the Vrymdor AI Node.",
      impact:
        "Resolved all 14 items of Make's review, and the Zapier app passes Zapier's integration checks with no errors. Both apps are shared by invitation while the public listings are pending.",
      resumeLine:
        "A Make custom app with OAuth 2.0 client credentials and a Zapier CLI app, each tested against a live node.",
      technologies: ["Make", "Zapier", "OAuth 2.0", "JavaScript", "REST APIs", "Integration Testing"],
      links: [
        {
          type: "Guide",
          href: "https://vrymdor.com/developers/connect",
          icon: <BookOpenText className={linkIcon} />,
        },
      ],
      cover: {
        from: "#0d0a1f",
        to: "#24104a",
        accent: "#a78bfa",
        domain: "vrymdor.com",
        icon: Workflow,
      },
    },
    {
      title: "Vrymdor MCP Server",
      href: "https://pypi.org/project/vrymdor-node/",
      dates: "Nov 2026",
      active: true,
      label: "Open source",
      description:
        "A Python client and MCP server, published on PyPI and the official MCP Registry, that lets Claude Desktop, Cursor and VS Code use the Vrymdor AI Node as a tool, with no Docker needed (it runs with uvx).",
      impact: "Brings data masking and policy checks to AI assistants and coding tools, not only to workflows.",
      technologies: ["Python", "MCP", "PyPI", "Open Source"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/vrymdor-node/",
          icon: <SiPypi className={linkIcon} />,
        },
      ],
      cover: {
        from: "#07101f",
        to: "#0b2140",
        accent: "#60a5fa",
        domain: "pypi.org",
        icon: Network,
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
        "A multi-agent pipeline that turns a client's brief and footage into every cut of a commercial, with approval gates, spend caps and vision-model QC.",
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
