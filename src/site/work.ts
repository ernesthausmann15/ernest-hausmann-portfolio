import fs from "node:fs";
import path from "node:path";

/** One commercial's case study, written by `factory publish` into content/work/{slug}.json. */
export type Work = {
  slug: string;
  title: string;
  brand: string;
  badge: "SPEC" | "CLIENT";
  category: string;
  year: string;
  duration: number;
  youtube: string;
  youtubeVertical?: string;
  poster: string;
  preview: string;
  og: string;
  logline: string;
  brief: string;
  strategy: Partial<Record<"insight" | "big_idea" | "audience" | "strategy" | "why_it_wins" | "spec_angle", string>>;
  look?: { lens?: string; lighting?: string; grade_intent?: string; look_name?: string; film_look?: string };
  process: { src: string; caption: string }[];
  credits: string[];
  disclaimer: string;
  aiDisclosure: string;
  score?: number | null;
  order?: number;
};

const DIR = path.join(process.cwd(), "content", "work");

export function allWork(): Work[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Work)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || (b.score ?? 0) - (a.score ?? 0) || b.year.localeCompare(a.year));
}

export function getWork(slug: string): Work | undefined {
  return allWork().find((w) => w.slug === slug);
}

export type Showreel = { youtube?: string; preview?: string; poster?: string };

export function showreel(): Showreel {
  const f = path.join(process.cwd(), "content", "showreel.json");
  if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, "utf8")) as Showreel;
  const top = allWork()[0];
  return top ? { preview: top.preview, poster: top.poster } : {};
}
