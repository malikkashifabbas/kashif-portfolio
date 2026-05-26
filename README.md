# Malik Kashif Abbas — Portfolio

A modern, responsive portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with dark mode)
- **Animations:** Framer Motion
- **Charts:** Recharts (radar charts for skills)
- **Icons:** Lucide React

## Sections
1. **Hero** — Animated typing tagline, intro, CTAs
2. **Expertise** — Bento grid of what you do
3. **Projects** — 6 featured project cards (with dummy names you can replace)
4. **Skills & Technologies** — Categorized badges + radar visualizations
5. **Tools I Use** — Infinite-scroll marquee
6. **About Me** — Bio, education, experience
7. **Contact** — Contact info, form, and footer

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Customization
- **Personal info:** Edit `lib/data.ts`
- **Colors / theme:** Edit `tailwind.config.ts` (primary color is `amber/orange`)
- **Projects:** Replace the dummy project entries in `lib/data.ts`
- **Profile photo:** Drop your image into `public/profile.jpg`
- **Resume:** Add your file as `public/resume.pdf`

## Deploy
Easiest deploy is to Vercel — just push to GitHub and import the repo.

---
Built with the MERN mindset.
