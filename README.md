# Mehran Yousafzai — Portfolio v2

A production-oriented personal portfolio for **Mehran Yousafzai — AI/ML Developer & Full-Stack Web Developer**.

## Design

- Deep black background with restrained purple/violet glow
- Rounded floating pill navigation
- Large editorial typography
- Glass surfaces and subtle borders
- Smooth reveal, hover, marquee and floating effects
- Responsive mobile navigation
- Accessibility-friendly reduced-motion mode
- No UI framework and no animation package — fewer dependencies means fewer deployment problems

## Pages

- `/` — Home, introduction, selected projects, stack and hiring CTA
- `/about` — Background, education, approach and technology
- `/projects` — Project portfolio with GitHub/live links
- `/contact` — Email, LinkedIn, Fiverr, GitHub and availability

## Tech stack

- Next.js 16.3.3 (Active LTS)
- React 19.2.0
- TypeScript 5.8.3
- CSS

Only the core Next.js/React runtime is required in production. The project intentionally avoids Tailwind, Framer Motion/Motion, icon packages, UI kits and other unnecessary runtime dependencies.

## Run locally

Use Node.js 24 (or any Node version supported by Next.js 16.3):

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

Always run this before pushing:

```bash
npm run build
npm run start
```

You can also type-check with:

```bash
npm run typecheck
```

## Deploy to GitHub

```bash
git init
git add .
git commit -m "feat: build Mehran Yousafzai portfolio v2"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Framework: **Next.js**.
3. Root Directory: repository root.
4. Install Command: `npm install`.
5. Build Command: `npm run build`.
6. Node.js: **24.x**.
7. Deploy.

No environment variables are required for the current version.

Vercel supplies `VERCEL_URL` automatically; the metadata and sitemap use it when available and fall back to localhost during local development.

## Where to edit content

All personal content, links, skills and project entries are centralized in:

`data/site.ts`

## Photo

Replace `public/mehran.jpg` with a new portrait if desired. Keep the same filename to avoid changing code.

## Important

The project does not claim that a local build was executed in this environment when npm dependencies are unavailable. The dependency surface is intentionally minimal and pinned to compatible versions. Run `npm install && npm run build` locally before the first production deployment.
