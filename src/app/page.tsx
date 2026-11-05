import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { LogoImage } from "@/components/logo-image";
import ContactSection from "@/components/section/contact-section";
import FounderSection from "@/components/section/founder-section";
import LeadershipSection from "@/components/section/leadership-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileText, MapPin, ShieldCheck } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export default function Page() {
  return (
    <main id="content" className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-3 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-amber-500" aria-hidden />
                  Founder of Vrymdor
                </span>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <a
                  href={DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <MapPin className="size-3.5" aria-hidden />
                  {DATA.location}
                </a>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                <AvatarFallback className="bg-linear-to-br from-zinc-900 to-zinc-700 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-wrap gap-2">
              <a href="#projects" className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}>
                View projects
              </a>
              <a
                href={DATA.founder.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}
              >
                Visit Vrymdor
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              <a href={DATA.resumeUrl} className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}>
                <FileText className="size-3.5" aria-hidden />
                Resume
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <SectionTitle>About</SectionTitle>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-a:text-foreground">
              <Markdown
                components={{
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="vrymdor">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <FounderSection />
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <SectionTitle>Experience</SectionTitle>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <SectionTitle>Skills</SectionTitle>
          </BlurFade>
          {DATA.skills.map((group, gi) => (
            <BlurFade key={group.category} delay={BLUR_FADE_DELAY * 11 + gi * 0.05}>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium text-muted-foreground">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-3 ring-2 ring-border/20"
                    >
                      <skill.icon className="size-4" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <SectionTitle>Education & Certifications</SectionTitle>
          </BlurFade>
          <div className="flex flex-col gap-7">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 14 + index * 0.05}>
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-x-3"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-x-3">
                    <LogoImage src={education.logoUrl} alt={`${education.school} logo`} />
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex items-center gap-2 font-semibold leading-tight">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                      {education.detail && (
                        <p className="text-sm leading-relaxed text-muted-foreground/80">{education.detail}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex-none pt-0.5 text-right text-xs tabular-nums text-muted-foreground">
                    {education.start ? `${education.start} - ${education.end}` : education.end}
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <SectionTitle>Leadership</SectionTitle>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <LeadershipSection />
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
