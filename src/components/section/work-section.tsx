"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LogoImage } from "@/components/logo-image";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function WorkSection() {
  return (
    <Accordion
      type="multiple"
      defaultValue={DATA.work.map((w) => w.company)}
      className="grid w-full gap-6"
    >
      {DATA.work.map((work) => (
        <AccordionItem key={work.company} value={work.company} className="grid w-full gap-3 border-b-0">
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage src={work.logoUrl} alt={`${work.company} logo`} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-tight">
                    {work.company}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-transform duration-200",
                        "group-data-[state=open]:rotate-180"
                      )}
                    />
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title} · {work.location}
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                <span>
                  {work.start} - {work.end}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ml-11 p-0 text-sm text-muted-foreground md:ml-13">
            <ul className="list-disc space-y-1.5 pl-4 leading-relaxed marker:text-muted-foreground/60">
              {work.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
