/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function FounderSection() {
  const f = DATA.founder;
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-[#0b0b0f] p-6 text-white shadow-lg sm:p-8">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-64 rounded-full bg-[#f5b301] opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 80% 0%, black 10%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 80% 0%, black 10%, transparent 65%)",
        }}
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={f.logoUrl}
              alt="Vrymdor logo"
              className="size-14 flex-none rounded-xl border border-white/15 bg-black object-contain p-1"
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#f5b301]">Founder</p>
              <h3 className="text-2xl font-bold tracking-tight">{f.company}</h3>
              <p className="text-xs text-white/60">{f.legalName}</p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {f.status}
          </span>
        </div>
        <p className="text-pretty text-base leading-relaxed text-white/80 sm:text-lg">{f.tagline}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {f.highlights.map((h) => (
            <div key={h.title} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h.icon className="mt-0.5 size-5 flex-none text-[#f5b301]" aria-hidden />
              <div>
                <p className="text-sm font-semibold">{h.title}</p>
                <p className="text-sm leading-relaxed text-white/65">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {f.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              <Badge className="flex items-center gap-1.5 border border-white/15 bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20">
                {l.icon}
                {l.type}
                <ArrowUpRight className="size-3 opacity-60" aria-hidden />
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
