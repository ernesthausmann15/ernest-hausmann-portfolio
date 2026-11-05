import { LogoImage } from "@/components/logo-image";
import { DATA } from "@/data/resume";
import { Trophy } from "lucide-react";

export default function LeadershipSection() {
  return (
    <div className="flex flex-col gap-6">
      {DATA.leadership.map((item) => (
        <div key={item.title} className="flex gap-x-3">
          <LogoImage src={item.logoUrl} alt={`${item.organization} logo`} />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2 font-semibold leading-tight">
                  {item.title}
                  <Trophy className="size-3.5 text-amber-500" aria-hidden />
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.organization} · {item.location}
                </div>
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">{item.dates}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
