import { STUDIO } from "@/site/theme";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: `${STUDIO.owner}, ${STUDIO.title}, and how ${STUDIO.name} makes a commercial.`, alternates: { canonical: "/about/" } };

const STEPS = [
  ["Research", "The studio reads the brand's own site and materials. Every claim on screen traces back to a quoted source."],
  ["Concept", "Three distinct concepts, a treatment with a pacing curve and a hero moment, and a strategy one-pager."],
  ["Animatic", "A moving rough cut with temp music and scratch voice-over. Nothing expensive is made until it is approved."],
  ["Cinematography", "Image first, several candidates per shot from different models, each one checked for continuity and artifacts. Real people are never animated."],
  ["Motion design", "Every title, caption, lower third and end card is designed and animated from the brand's type system, timed to the beat."],
  ["Finishing", "Shot matching and a graded look, a mix ducked under the voice and mastered to broadcast loudness, every format and cutdown."],
  ["Quality", "A critic with veto power scores thirteen craft categories. Anything under eight goes back to the agent that made it."],
];

export default function About() {
  return (
    <main id="content" className="mx-auto max-w-5xl px-4 pt-32 sm:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-ember">About</p>
      <h1 className="font-display mt-4 text-5xl leading-[1.02] sm:text-7xl">{STUDIO.owner}</h1>
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
        I&apos;m an AI creative technologist. I built {STUDIO.name}, a production pipeline of AI agents that works like a film crew, and I direct and
        finish every film it makes. Before the studio I founded Vrymdor, an AI privacy product I designed, built and launched on my own, and I was a team
        captain on a national championship football team. The same habits run the studio: preparation, ownership and a high bar.
      </p>
      <h2 className="font-display mt-20 text-4xl">How a commercial gets made</h2>
      <ol className="mt-10 space-y-8">
        {STEPS.map(([t, d], i) => (
          <li key={t} className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[120px_1fr]">
            <span className="font-mono text-sm text-ember">{String(i + 1).padStart(2, "0")} · {t}</span>
            <p className="text-muted-foreground">{d}</p>
          </li>
        ))}
      </ol>
      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/#work" className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink">Watch the work</Link>
        <Link href="/resume/" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Resume</Link>
      </div>
    </main>
  );
}
