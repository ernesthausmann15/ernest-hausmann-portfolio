import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { FileText, Mail } from "lucide-react";

export default function ContactSection() {
  const { GitHub, LinkedIn } = DATA.contact.social;
  return (
    <div className="relative rounded-xl border p-8 sm:p-10">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">Contact</span>
      </div>
      <div className="absolute inset-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let&apos;s talk</h2>
        <p className="mx-auto max-w-lg text-balance text-muted-foreground">
          I&apos;m open to AI engineering, full-stack and security roles. The best way to reach me is by email at{" "}
          <a
            href={`mailto:${DATA.contact.email}`}
            className="rounded-sm text-blue-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-blue-400"
          >
            {DATA.contact.email}
          </a>
          .
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a href={`mailto:${DATA.contact.email}`} className={cn(buttonVariants({ size: "sm" }), "gap-2")}>
            <Mail className="size-4" aria-hidden />
            Email me
          </a>
          <a
            href={LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-2")}
          >
            <LinkedIn.icon className="size-4" />
            LinkedIn
          </a>
          <a
            href={GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-2")}
          >
            <GitHub.icon className="size-4" />
            GitHub
          </a>
          <a href={DATA.resumeUrl} className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-2")}>
            <FileText className="size-4" aria-hidden />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
