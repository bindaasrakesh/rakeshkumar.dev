# Rakesh Kumar · Portfolio

Professional one-page portfolio for Rakesh Kumar, Lead Software Engineer (Frontend / React).

Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
npm start
```

## Adding Your Resume

To enable the resume link in the header:

1. Add your resume PDF to `public/resume.pdf`
2. Update `content/site.ts`:
   ```typescript
   resumePath: "/resume.pdf"
   ```

The header will automatically show the Resume link once `resumePath` is not null.

**Important**: Do not set `resumePath` until you have a real PDF at `public/resume.pdf`. The link must not 404.

Reference resume content is available in `docs/resume.md`.

## Content Management

All site content is managed through typed exports in `content/site.ts`:

- `siteConfig`: Name, title, tagline, contact info, location
- `skills`: Skills list (displays in order)
- `impactItems`: Impact bullets (exactly 3)
- `caseStudies`: Selected work case studies (exactly 3)
- `getHeaderLinks()`: Dynamic header navigation based on `resumePath`

Edit `content/site.ts` to update any content. The components are presentational only.

## Project Structure

```
/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Impact.tsx
│   ├── CaseStudies.tsx
│   └── Footer.tsx
├── content/          # Content management
│   └── site.ts       # All site content (typed)
├── public/           # Static assets
│   └── resume.pdf    # (add your resume here)
├── docs/
│   └── resume.md     # Resume source for reference
└── __tests__/        # Vitest tests
    └── content.test.ts
```

## Design Principles

- **Recruiter-friendly**: ~30 second skim, quiet professional aesthetic
- **Light & clean**: Neutral backgrounds, lots of whitespace, system fonts
- **Single accent color**: `#1d4ed8` (blue-700) for links and highlights
- **No animations**: Professional, static presentation
- **Responsive**: Works on all screen sizes

## Deployment

This project is Vercel-ready. Connect your repository to Vercel for automatic deployments.

Alternatively, build and deploy the static output:

```bash
npm run build
# Deploy the .next folder to your hosting provider
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest
- **Deployment**: Vercel-ready

---

**Live**: [rakeshkumar.dev](https://rakeshkumar.dev) _(configure your domain)_
