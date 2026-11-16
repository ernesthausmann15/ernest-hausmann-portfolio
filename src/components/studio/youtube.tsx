"use client";

import { useState } from "react";

/** A YouTube film behind a poster (a facade): nothing from YouTube loads until the viewer presses play, so the
 * page stays fast. Uses the privacy-enhanced youtube-nocookie domain. */
export function YouTube({ id, title, poster, vertical = false }: { id: string; title: string; poster?: string; vertical?: boolean }) {
  const [play, setPlay] = useState(false);
  const ratio = vertical ? "aspect-[9/16]" : "aspect-video";
  if (!id) return null;
  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-border bg-black ${ratio}`}>
      {play ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 size-full cursor-pointer" aria-label={`Play ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" className="absolute inset-0 size-full object-cover opacity-90 transition-opacity group-hover:opacity-100" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-ember/95 text-ink shadow-[0_0_40px_rgba(255,91,46,0.45)] transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-current" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
