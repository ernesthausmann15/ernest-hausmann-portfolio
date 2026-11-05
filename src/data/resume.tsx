import { Icons } from "@/components/icons";
import {
  Activity,
  BookOpenText,
  BrainCircuit,
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
  role: "Founder of Vrymdor · AI Engineer & Full-Stack Developer",
  description:
    "AI engineer and full-stack developer. I design, build and launch secure AI products and web applications, from first idea to public release.",
  summary:
    "I'm the founder of [Vrymdor](https://vrymdor.com), a security and AI governance company that I designed, built and launched on my own. Vrymdor helps small and mid-size businesses protect their servers and keep their AI agents in check, while their sensitive data stays under their control.\n\nBefore Vrymdor, I built production web applications with Next.js, TypeScript, React and PostgreSQL. Today I also work in IT systems and infrastructure at Loup Power District and study cybersecurity at Central Community College. I was a team captain on a national championship football team, and I bring the same habits to engineering: clear communication, ownership and steady execution.",
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
      "Security and AI governance for small and mid-size businesses, with their data kept under their control.",
    status: "Publicly launched in November 2026",
    highlights: [
      {
        icon: ShieldCheck,
        title: "Business Security",
        text: "Server monitoring and hourly self-scans that keep raw logs on the customer's own servers.",
      },
      {
        icon: BrainCircuit,
        title: "AI Node",
        text: "A governance gateway that checks every AI agent request against company policy.",
      },
      {
        icon: KeyRound,
        title: "Human approval",
        text: "High-risk changes wait for a person to approve them with a hardware security key.",
      },
      {
        icon: Network,
        title: "Open source",
        text: "A published n8n community node that brings the AI Node into automation workflows.",
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
        href: "https://www.npmjs.com/package/n8n-nodes-vrymnox",
        icon: <SiNpm className={linkIcon} />,
      },
    ],
  },

  work: [
    {
      company: "Vrymdor (Vrymnox Systems LLC)",
      href: "https://vrymdor.com",
      location: "Nebraska",
      title: "Founder & Lead Engineer",
      logoUrl: "/logos/vrymdor.png",
      start: "Oct 2026",
      end: "Present",
      bullets: [
        "Founded Vrymdor and took it from idea to public launch as the sole builder, owning product, engineering, design, security and go-to-market.",
        "Built Vrymdor Business Security, a platform that helps small and mid-size businesses monitor their Linux and Windows servers, find exposed services and review sign-in activity, while raw logs stay on their own servers.",
        "Built the Vrymdor AI Node, a governance gateway that checks each AI agent request against company policy, removes personal data and secrets, and keeps a tamper-evident audit record.",
        "Designed human-in-the-loop safeguards so that no high-risk change runs until a person approves it with a hardware security key.",
        "Published an open-source n8n community node on npm and automated Vrymdor's own marketing workflows, with every post passing through the AI Node before it is published.",
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
      category: "AI & Automation",
      items: [
        { name: "LLM Integration", icon: BrainCircuit },
        { name: "AI Agent Governance", icon: ShieldCheck },
        { name: "Claude API", icon: SiAnthropic },
        { name: "OpenAI API", icon: Icons.openai },
        { name: "Workflow Automation (n8n)", icon: Workflow },
        { name: "Data Pipelines", icon: Network },
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
      title: "Vrymdor Business Security",
      href: "https://vrymdor.com",
      dates: "Oct 2026 - Present",
      active: true,
      label: "Vrymdor product",
      description:
        "A security platform for small and mid-size businesses. Each server checks itself every hour, flags exposed services with a plain-English fix, and reports to one shared dashboard.",
      impact:
        "Gives a small team clear security answers without sending its raw logs to an outside cloud.",
      technologies: ["Python", "TypeScript", "Next.js", "PostgreSQL", "AI/LLM", "Security"],
      links: [
        { type: "Website", href: "https://vrymdor.com", icon: <Icons.globe className={linkIcon} /> },
      ],
      cover: {
        from: "#0b0b0f",
        to: "#1c1606",
        accent: "#f5b301",
        domain: "vrymdor.com",
        logo: "/logos/vrymdor.png",
      },
    },
    {
      title: "Vrymdor AI Node",
      href: "https://docs.vrymdor.com/ai-node.html",
      dates: "Oct 2026 - Present",
      active: true,
      label: "Vrymdor product",
      description:
        "A governance gateway that AI agents call instead of reaching tools and models directly. It checks the agent, applies company policy, removes personal data and secrets, and writes an audit record.",
      impact:
        "Lets a business adopt AI agents with guardrails it can prove. Works with n8n, Make, GitHub Actions, LangChain, MCP clients and plain HTTP.",
      technologies: ["AI Agents", "API Design", "Privacy", "Audit Logging", "TypeScript"],
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
      title: "Vrymdor n8n Community Node",
      href: "https://www.npmjs.com/package/n8n-nodes-vrymnox",
      dates: "Nov 2026",
      active: true,
      label: "Open source",
      description:
        "An MIT-licensed n8n node, published on npm, that routes each workflow step through the Vrymdor AI Node. Ready-to-import example workflows are included.",
      impact:
        "Puts policy checks, data masking and audit records into automation teams' existing n8n workflows.",
      technologies: ["TypeScript", "Node.js", "n8n", "npm", "Open Source"],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/n8n-nodes-vrymnox",
          icon: <SiNpm className={linkIcon} />,
        },
        {
          type: "Source",
          href: "https://github.com/ernesthausmann15/n8n-nodes-vrymnox",
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
