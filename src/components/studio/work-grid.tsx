"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { Work } from "@/site/work";

function Card({ w }: { w: Work }) {
  const v = useRef<HTMLVideoElement>(null);
  return (
    <Link
      href={`/work/${w.slug}/`}
      className="group block no-underline"
      onMouseEnter={() => v.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (v.current) { v.current.pause(); v.current.currentTime = 0; }
      }}
      onFocus={() => v.current?.play().catch(() => {})}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={w.poster} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        {w.preview && (
          <video ref={v} src={w.preview} muted loop playsInline preload="none" className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${w.badge === "CLIENT" ? "bg-bone text-ink" : "bg-ink/80 text-bone ring-1 ring-bone/30"}`}>
          {w.badge}
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{w.brand}</p>
          <h3 className="font-display text-2xl leading-tight text-foreground">{w.title}</h3>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{w.duration}s</span>
      </div>
    </Link>
  );
}

export function WorkGrid({ work }: { work: Work[] }) {
  const cats = useMemo(() => ["All", ...Array.from(new Set(work.map((w) => w.category)))], [work]);
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? work : work.filter((w) => w.category === cat);
  return (
    <div>
      {cats.length > 2 && (
        <div role="tablist" aria-label="Filter by category" className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={c === cat}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${c === cat ? "border-ember bg-ember text-ink" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => (
          <Card key={w.slug} w={w} />
        ))}
      </div>
    </div>
  );
}
