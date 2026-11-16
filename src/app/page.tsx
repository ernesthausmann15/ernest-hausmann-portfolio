import BlurFade from "@/components/magicui/blur-fade";
import { WorkGrid } from "@/components/studio/work-grid";
import { YouTube } from "@/components/studio/youtube";
import { STUDIO } from "@/site/theme";
import { allWork, showreel } from "@/site/work";
import Link from "next/link";

export default function Home() {
  const work = allWork();
  const reel = showreel();
  return (
    <main id="content">
      <section className="grain relative flex min-h-[92svh] items-end overflow-hidden">
        {reel.preview ? (
          <video src={reel.preview} poster={reel.poster} autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover opacity-60" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,91,46,0.18),transparent_55%),radial-gradient(ellipse_at_20%_80%,rgba(243,239,231,0.06),transparent_50%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24">
          <BlurFade delay={0.05}>
            <p className="text-xs uppercase tracking-[0.32em] text-ember">{STUDIO.owner} · {STUDIO.title}</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">{STUDIO.positioning}</h1>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{STUDIO.intro}</p>
          </BlurFade>
          <BlurFade delay={0.35}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]">Watch the work</a>
              <Link href="/studio/" className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-bone/50">Hire the studio</Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {reel.youtube && (
        <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-8" aria-label="Showreel">
          <YouTube id={reel.youtube} title={`${STUDIO.name} showreel`} poster={reel.poster} />
        </section>
      )}

      <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-24 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl">Work</h2>
          <p className="max-w-sm text-right text-sm text-muted-foreground">Every film concepted, generated, cut, graded and mixed by the studio. Spec pieces are labeled.</p>
        </div>
        {work.length ? (
          <WorkGrid work={work} />
        ) : (
          <p className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">The first films premiere here this week.</p>
        )}
      </section>

      <section className="mx-auto mt-32 grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <h2 className="font-display text-4xl sm:text-5xl">A studio built like a film crew.</h2>
        <div className="space-y-5 text-muted-foreground">
          <p>Every commercial starts with the brand: its own words, its audience, the campaigns it already runs. A team of AI agents I designed writes three concepts, a treatment and a script, then builds an animatic before a dollar is spent on final shots.</p>
          <p>Generated shots are made image first, several candidates per shot, and only the best survive a strict quality critic. Real people are never animated or altered. Every title, caption and end card is designed and animated by the studio, then the film is graded, mixed to broadcast loudness and finished in DaVinci Resolve.</p>
          <Link href="/about/" className="inline-block text-foreground underline decoration-ember underline-offset-8">How the studio works</Link>
        </div>
      </section>

      <section id="contact" className="mx-auto mt-32 max-w-7xl px-4 sm:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <h2 className="font-display text-4xl sm:text-5xl">Let&apos;s make something.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Hiring a creative technologist, or need a commercial? Write to me directly.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${STUDIO.email}`} className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink">{STUDIO.email}</a>
            <a href={STUDIO.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">LinkedIn</a>
            <Link href="/resume/" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Resume</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
