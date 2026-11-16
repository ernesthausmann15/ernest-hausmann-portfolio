import { SiteNav } from "@/components/studio/site-nav";
import { Wordmark } from "@/components/studio/wordmark";
import { STUDIO } from "@/site/theme";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display" });

const TITLE = `${STUDIO.owner} | ${STUDIO.title}, ${STUDIO.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(STUDIO.url),
  title: { default: TITLE, template: `%s | ${STUDIO.name}` },
  description: `${STUDIO.positioning} ${STUDIO.intro}`,
  applicationName: STUDIO.name,
  authors: [{ name: STUDIO.owner, url: STUDIO.url }],
  creator: STUDIO.owner,
  keywords: ["Ernest Hausmann", "Hausmann Studio", "AI Creative Technologist", "AI commercial production", "AI cinematography", "motion design",
    "DaVinci Resolve", "spec commercial", "showreel", "creative technologist"],
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: STUDIO.positioning, url: STUDIO.url, siteName: STUDIO.name, locale: "en_US", type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: STUDIO.name }] },
  twitter: { title: TITLE, description: STUDIO.positioning, card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#0a0a0b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans text-foreground antialiased", geist.variable, geistMono.variable, display.variable)}>
        {STUDIO.analyticsDomain && <script defer data-domain={STUDIO.analyticsDomain} src="https://plausible.io/js/script.js" />}
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ember focus:px-3 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <SiteNav />
        {children}
        <footer className="mx-auto mt-32 max-w-7xl border-t border-border px-4 py-10 text-sm text-muted-foreground sm:px-8 print:hidden">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <Wordmark className="text-foreground" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={`mailto:${STUDIO.email}`} className="hover:text-foreground">Email</a>
              <a href={STUDIO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
              {STUDIO.youtube && <a href={STUDIO.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">YouTube</a>}
              <Link href="/studio/" className="hover:text-foreground">Hire the studio</Link>
              <Link href="/resume/" className="hover:text-foreground">Resume</Link>
            </div>
          </div>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} {STUDIO.owner}. Spec pieces are portfolio work, not affiliated with or endorsed by the brands shown.</p>
        </footer>
      </body>
    </html>
  );
}
