/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

function ProjectCover({ project }: { project: Project }) {
  const { cover, title, label } = project;
  const Icon = cover.icon;
  return (
    <div
      className="relative h-44 w-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${cover.from} 0%, ${cover.to} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at 70% 30%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, black 10%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 size-44 rounded-full blur-3xl opacity-40"
        style={{ background: cover.accent }}
      />
      <div className="relative flex h-full flex-col justify-between p-5">
        <span
          className="w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          style={{ borderColor: `${cover.accent}66`, color: cover.accent }}
        >
          {label}
        </span>
        <div className="flex items-center gap-3">
          <div
            className="flex size-11 flex-none items-center justify-center overflow-hidden rounded-xl border bg-black/40"
            style={{ borderColor: `${cover.accent}55` }}
          >
            {cover.logo ? (
              <img src={cover.logo} alt="" className="size-9 object-contain" />
            ) : Icon ? (
              <span style={{ color: cover.accent }}>
                <Icon className="size-5" />
              </span>
            ) : null}
          </div>
          <div className="min-w-0">
            <p className="line-clamp-2 text-base font-semibold leading-tight text-white">{title}</p>
            <p className="truncate font-mono text-xs text-white/60">{cover.domain}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const { title, href, dates, description, impact, technologies, links } = project;
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:ring-2 hover:ring-muted",
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`} className="block">
        <ProjectCover project={project} />
      </a>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold leading-tight">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open ${title} in a new tab`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
        <p className="text-sm leading-relaxed text-pretty">
          <span className="font-medium text-foreground">Impact: </span>
          <span className="text-muted-foreground">{impact}</span>
        </p>
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          {technologies.map((tag) => (
            <Badge key={tag} className="h-6 w-fit border border-border px-2 text-[11px] font-medium" variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <Badge className="flex items-center gap-1.5 bg-primary text-xs text-primary-foreground hover:bg-primary/90">
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
