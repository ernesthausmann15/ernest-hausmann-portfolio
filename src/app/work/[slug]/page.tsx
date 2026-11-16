import { YouTube } from "@/components/studio/youtube";
import { STUDIO } from "@/site/theme";
import { allWork, getWork } from "@/site/work";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  const w = allWork();
  return w.length ? w.map((x) => ({ slug: x.slug })) : [{ slug: "premiere" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return { title: "Coming soon" };
  return {
    title: `${w.brand}: ${w.title}`,
    description: w.logline,
    alternates: { canonical: `/work/${w.slug}/` },
    openGraph: { title: `${w.brand}: “${w.title}”`, description: w.logline, images: [{ url: w.og, width: 1200, height: 630 }], type: "video.other" },
    twitter: { card: "summary_large_image", images: [w.og] },
  };
}

const LABELS: Record<string, string> = { insight: "Insight", big_idea: "Big idea", audience: "Audience", strategy: "Strategy", why_it_wins: "Why it wins", spec_angle: "The campaign" };

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) {
    if (slug === "premiere")
      return (
        <main id="content" className="mx-auto max-w-3xl px-4 pt-40 text-center sm:px-8">
          <h1 className="font-display text-5xl">The first films premiere this week.</h1>
          <Link href="/" className="mt-8 inline-block underline decoration-ember underline-offset-8">Back to the studio</Link>
        </main>
      );
    notFound();
  }
  const others = allWork().filter((x) => x.slug !== w.slug).slice(0, 3);
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 pt-28 sm:px-8">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className={w.badge === "CLIENT" ? "text-bone" : "text-ember"}>{w.badge}</span> · {w.brand} · {w.category} · {w.year}
      </p>
      <h1 className="font-display mt-4 text-5xl leading-[1.02] sm:text-7xl">{w.title}</h1>
      <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{w.logline}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto]">
        <YouTube id={w.youtube} title={`${w.brand}: ${w.title}`} poster={w.poster} />
        {w.youtubeVertical && (
          <div className="w-full max-w-[300px] justify-self-center lg:w-[300px]">
            <YouTube id={w.youtubeVertical} title={`${w.brand}: ${w.title} (vertical)`} vertical />
          </div>
        )}
      </div>
      {(w.disclaimer || w.aiDisclosure) && (
        <div className="mt-6 space-y-1 text-sm text-muted-foreground">
          {w.disclaimer && <p>{w.disclaimer}</p>}
          {w.aiDisclosure && <p>{w.aiDisclosure}</p>}
        </div>
      )}
      <section className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl">The brief</h2>
          <p className="mt-4 text-muted-foreground">{w.brief}</p>
          <h2 className="font-display mt-10 text-3xl">Craft</h2>
          <ul className="mt-4 space-y-1 text-muted-foreground">
            {w.credits.map((c) => (
              <li key={c}>{c}: {STUDIO.name}</li>
            ))}
          </ul>
          {w.look?.grade_intent && (
            <>
              <h2 className="font-display mt-10 text-3xl">Look</h2>
              <p className="mt-4 text-muted-foreground">{[w.look.lens, w.look.lighting, w.look.grade_intent].filter(Boolean).join(". ")}</p>
            </>
          )}
        </div>
        <dl className="grid gap-8 sm:grid-cols-2">
          {Object.entries(w.strategy || {}).filter(([, v]) => v).map(([k, v]) => (
            <div key={k} className="border-t border-border pt-4">
              <dt className="text-xs uppercase tracking-[0.24em] text-ember">{LABELS[k] ?? k}</dt>
              <dd className="mt-2 text-foreground/90">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
      {w.process.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl">Shot by shot</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {w.process.map((p) => (
              <figure key={p.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.caption} loading="lazy" className="aspect-video w-full rounded-lg border border-border object-cover" />
                <figcaption className="mt-2 text-xs text-muted-foreground">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      {others.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl">More work</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}/`} className="group no-underline">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.poster} alt="" className="aspect-video w-full rounded-lg border border-border object-cover transition-transform group-hover:scale-[1.02]" />
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{o.brand}</p>
                <p className="font-display text-xl text-foreground">{o.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
