import Link from "next/link";
import { Wordmark } from "./wordmark";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/studio/", label: "Hire the studio" },
  { href: "/resume/", label: "Resume" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-[2px]">
        <Link href="/" className="text-foreground no-underline" aria-label="Home">
          <Wordmark />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 text-sm sm:gap-7">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={`text-muted-foreground transition-colors hover:text-foreground ${l.label === "About" ? "hidden sm:inline" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
