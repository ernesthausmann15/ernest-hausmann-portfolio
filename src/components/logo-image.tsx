/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function LogoImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  const base = "size-8 md:size-10 flex-none rounded-full border shadow ring-2 ring-border";
  if (!src || error) {
    return <div className={cn(base, "bg-muted", className)} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={cn(base, "overflow-hidden bg-white object-contain p-1", className)}
      onError={() => setError(true)}
    />
  );
}
