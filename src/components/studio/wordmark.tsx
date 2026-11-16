/** The studio's wordmark: an editorial serif name with a tally-light dot. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`} aria-label="Hausmann Studio">
      <span aria-hidden className="relative top-[-0.1em] inline-block size-2 rounded-full bg-ember shadow-[0_0_12px_2px_rgba(255,91,46,0.55)]" />
      <span className="font-display text-xl leading-none tracking-tight">Hausmann</span>
      <span className="text-[10px] font-medium uppercase leading-none tracking-[0.32em] text-muted-foreground">Studio</span>
    </span>
  );
}
