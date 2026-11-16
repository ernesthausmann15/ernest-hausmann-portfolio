import { STUDIO } from "@/site/theme";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hire the studio", description: `Commercials and social films by ${STUDIO.name}.`, alternates: { canonical: "/studio/" } };

const SERVICES = [
  ["Commercials", "A 30 or 60 second film for your brand, from concept to every format, with your real product and real footage when you have it."],
  ["Social cutdown packages", "15 and 6 second cuts in vertical, square and 4:5, with hook variants for A/B testing and burned-in captions."],
  ["Product launch films", "A hero film and its cutdowns for a launch, built around your own product photography."],
  ["Nonprofit storytelling", "Films that show real impact truthfully, with dignity, from your own footage."],
  ["Brand refresh films", "A film that introduces a new look, line or chapter for your brand."],
];
const PACKAGES = [
  ["Social", "Request a quote", "One 15 second film, vertical and square, captions, two hook variants."],
  ["Commercial", "Request a quote", "One 30 second film in every format, 15 and 6 second cutdowns, music and voice-over, two revision rounds."],
  ["Campaign", "Request a quote", "A hero film plus a set of social films, localized versions, a broadcast master."],
];
const FAQ = [
  ["How fast?", "An animatic within days of the brief; the finished film within a week of your approval."],
  ["Do you use AI people?", "Only as atmosphere, never presented as your real customers or team, and labeled where platforms require it. Real people are never altered."],
  ["Who owns the film?", "You do, for the uses in your agreement. Music and every asset are licensed for commercial use and listed in your delivery report."],
];

export default function Studio() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 pt-32 sm:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-ember">Hire the studio</p>
      <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.02] sm:text-7xl">Commercials at global-brand standard, for your brand.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Brief, concept, animatic, film, delivery. You approve the animatic before anything expensive is made, and the final before it ships.</p>
      <section className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([t, d]) => (
          <div key={t} className="border-t border-border pt-5">
            <h2 className="font-display text-2xl">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="mt-24">
        <h2 className="font-display text-4xl">Packages</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map(([t, p, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-3xl">{t}</h3>
              <p className="mt-1 font-mono text-sm text-ember">{p}</p>
              <p className="mt-4 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">Questions</h2>
          <dl className="mt-8 space-y-6">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold">{q}</dt>
                <dd className="mt-1 text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-4xl">Start a project</h2>
          <p className="mt-3 text-muted-foreground">Tell me about your brand, the film you need and your timeline. I reply within one business day.</p>
          <a href={`mailto:${STUDIO.email}?subject=${encodeURIComponent("Commercial project")}&body=${encodeURIComponent("Brand:\nWebsite:\nFilm I need:\nTimeline:\nBudget:\n")}`}
            className="mt-8 inline-block rounded-full bg-ember px-6 py-3 text-sm font-semibold text-ink">Request a quote</a>
        </div>
      </section>
    </main>
  );
}
