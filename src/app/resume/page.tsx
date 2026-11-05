import { PrintButton } from "@/components/print-button";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${DATA.name}, Founder of Vrymdor, AI Engineer and Full-Stack Developer.`,
  alternates: { canonical: "/resume/" },
};

const RESUME_SUMMARY =
  "Founder of Vrymdor and full-stack AI engineer who designed, built and publicly launched a security and AI governance platform as its sole builder. Builds production web applications with Next.js, TypeScript, React and PostgreSQL, and AI products with strong privacy, audit and human-approval safeguards. Ready to bring founder-level ownership and full-stack and AI expertise to a high-performing team.";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="break-after-avoid border-b pb-1 text-sm font-bold uppercase tracking-widest text-foreground print:border-black print:text-[11px]">
      {children}
    </h2>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <div className="font-semibold">{left}</div>
      <div className="text-sm tabular-nums text-muted-foreground print:text-[10.5px] print:text-black">{right}</div>
    </div>
  );
}

export default function ResumePage() {
  const featured = DATA.projects.filter((p) =>
    ["Vrymdor AI Node", "Vrymdor Pathway Coach", "Liquidation Hub", "Skinstric"].includes(p.title)
  );
  const skillLine = DATA.skills.map((g) => ({
    category: g.category,
    items: g.items.map((i) => i.name).join(", "),
  }));

  return (
    <main id="content" className="flex flex-col gap-8 text-[15px] leading-relaxed print:gap-3 print:text-[10.5px] print:leading-snug">
      <div className="flex flex-wrap items-center justify-between gap-2 print:hidden">
        <Link href="/" className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "gap-1.5")}>
          <ArrowLeft className="size-4" aria-hidden />
          Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight print:text-2xl">{DATA.name}</h1>
        <p className="text-lg font-medium print:text-sm">Founder of Vrymdor · AI Engineer & Full-Stack Developer</p>
        <p className="text-sm text-muted-foreground print:text-[10.5px] print:text-black">
          {DATA.location} ·{" "}
          <a href={`mailto:${DATA.contact.email}`} className="underline-offset-4 hover:underline">
            {DATA.contact.email}
          </a>{" "}
          ·{" "}
          <a href={DATA.url} className="underline-offset-4 hover:underline">
            ernesthausmann.dev
          </a>{" "}
          ·{" "}
          <a href={DATA.contact.social.GitHub.url} className="underline-offset-4 hover:underline">
            github.com/ernesthausmann15
          </a>{" "}
          ·{" "}
          <a href={DATA.contact.social.LinkedIn.url} className="underline-offset-4 hover:underline">
            LinkedIn
          </a>
        </p>
      </header>

      <section className="flex flex-col gap-2">
        <Heading>Professional Summary</Heading>
        <p>{RESUME_SUMMARY}</p>
      </section>

      <section className="flex flex-col gap-4 print:gap-2">
        <Heading>Experience</Heading>
        {DATA.work.map((w) => (
          <div key={w.company} className="flex flex-col gap-1 break-inside-avoid">
            <Row left={w.company} right={`${w.start} - ${w.end}`} />
            <Row
              left={<span className="font-normal italic">{w.title}</span>}
              right={w.location}
            />
            <ul className="mt-1 list-disc space-y-1 pl-5 print:mt-0 print:space-y-0">
              {w.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 print:gap-2">
        <Heading>Projects</Heading>
        {featured.map((p) => (
          <div key={p.title} className="flex flex-col gap-1 break-inside-avoid">
            <Row
              left={
                <a href={p.href} className="underline-offset-4 hover:underline">
                  {p.title}
                </a>
              }
              right={p.dates}
            />
            <ul className="list-disc space-y-1 pl-5 print:space-y-0">
              <li>{p.description}</li>
              <li>{p.impact}</li>
            </ul>
            <p className="text-sm text-muted-foreground print:text-[10.5px] print:text-black">
              <span className="font-medium text-foreground">Skills: </span>
              {p.technologies.join(", ")}
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4 print:gap-2">
        <Heading>Education & Certifications</Heading>
        {DATA.education.map((e) => (
          <div key={e.school} className="flex flex-col gap-0.5 break-inside-avoid">
            <Row left={e.school} right={e.start ? `${e.start} - ${e.end}` : e.end} />
            <p className="italic">{e.degree}</p>
            {e.detail && <p className="text-sm text-muted-foreground print:text-[10.5px] print:text-black">{e.detail}</p>}
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-2">
        <Heading>Skills</Heading>
        <ul className="space-y-1">
          {skillLine.map((s) => (
            <li key={s.category}>
              <span className="font-semibold">{s.category}: </span>
              {s.items}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <Heading>Athletic Leadership</Heading>
        {DATA.leadership.map((l) => (
          <div key={l.title} className="flex flex-col gap-1 break-inside-avoid">
            <Row left={l.title} right={l.dates} />
            <Row left={<span className="font-normal italic">{l.organization}</span>} right={l.location} />
            <p>{l.description}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-2">
        <Heading>Languages</Heading>
        <p>English (highly proficient)</p>
      </section>
    </main>
  );
}
