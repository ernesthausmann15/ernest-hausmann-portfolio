# ernesthausmann.dev

The personal portfolio of **Ernest Hausmann**, Founder of [Vrymdor](https://vrymdor.com), AI engineer and
full-stack developer.

- **Home** (`/`): about, the Vrymdor founder overview, experience, skills, projects, education, leadership and contact.
- **Resume** (`/resume/`): a print-ready resume. Use the "Print or save as PDF" button to download it.

## Stack

Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Motion, Lucide and
Simple Icons (via `react-icons`).

## Edit the content

All text, links, dates and icons live in one file: [`src/data/resume.tsx`](src/data/resume.tsx).
Organization logos are in `public/logos/`, and the social preview image is `public/og.png`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # writes the static site to out/
npx serve out      # optional: preview the production build
```

Requires Node.js 20.9 or newer (`.nvmrc` pins 22).

## Deploy on Render

The site is a static export, so it runs as a free Render **Static Site** on Render's CDN, with no server and
no cold starts. Security headers, caching and the custom domains are defined in [`render.yaml`](render.yaml).

1. Push this repository to GitHub.
2. In Render: **New → Blueprint**, select the repository, and apply. Render runs `npm ci && npm run build`
   and publishes `out/`.
3. Move the domain. `ernesthausmann.dev` currently points to Vercel. In the Render service, open
   **Settings → Custom Domains**, confirm `ernesthausmann.dev` and `www.ernesthausmann.dev`, and copy the DNS
   records Render shows. At your DNS provider, replace the Vercel records with Render's (an `A` or `ALIAS`
   record for the apex and a `CNAME` for `www`), then click **Verify** in Render. Render issues the TLS
   certificate automatically.
4. Once the Render site is live on the domain, remove the domain from the old Vercel project.

Every push to the default branch redeploys automatically.

## Credits

Built on the open-source [Magic UI portfolio template](https://github.com/dillionverma/portfolio) by Dillion
Verma (MIT). See [`LICENSE`](LICENSE).

The MIT license covers the code. The written content, the Vrymdor name and logo, and the logos of other
organizations belong to their respective owners and are not licensed for reuse.
