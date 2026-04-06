# Nasikh Mahamood CL — Personal Portfolio

Personal portfolio website built with Next.js, showcasing my work as a Frontend Developer.

**Live site:** coming soon (Vercel)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans, Geist Mono, Dancing Script

## Features

- Dark / light theme toggle with localStorage persistence
- Fixed right sidebar with navigation, profile, and social links
- Scroll-triggered animations on all sections
- Typewriter effect on hero
- Fully responsive — sidebar collapses to mobile hamburger nav
- Sections: Hero, Featured Work, Experience, Projects, Skills, Contact

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with sidebar
│   ├── page.tsx          # Home page
│   └── globals.css       # Design system & CSS variables
├── components/
│   ├── layout/           # Sidebar, MobileNav, ThemeToggle
│   └── sections/         # Hero, Experience, Projects, Skills, Contact
└── data/
    └── portfolio.ts      # Single source of truth for all content
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Updating Content

All site content lives in `data/portfolio.ts` — edit that file to update experience, projects, skills, or personal info.

---

Designed & developed by [Nasikh Mahamood CL](https://linkedin.com/in/nasikh-cl)
