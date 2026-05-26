"use client";

import Image, { type StaticImageData } from "next/image";
import {
  ExternalLink,
  ArrowUpRight,
  Check,
  FileText,
  Github,
} from "lucide-react";
import { projects, personal } from "@/lib/data";
// Local logo imports — Next.js handles static asset URLs automatically.
// Filenames with spaces are fine in import strings.
import myCrmsimLogo from "../app/images/myCRMSIM LOGO.png";
// Local project screenshot imports
import serenabedsAdminImg from "../app/images/SarenaBeds admin dashboard.png";
// Integration platform logos — used by the "Third-Party Integrations" project
import zapierLogo from "../app/images/Integrations Logo/zapier.png";
import makeLogo from "../app/images/Integrations Logo/make.png";
import n8nLogo from "../app/images/Integrations Logo/n8n.svg";
import salesforceLogo from "../app/images/Integrations Logo/salesforce.svg";

// Map project titles to their imported logo files. Logos render on a branded
// background (white + orange accents). Use this when you want the brand to
// dominate, not the screenshot.
const LOGO_MAP: Record<string, StaticImageData> = {
  myCRMSIM: myCrmsimLogo,
};

// Map project titles to imported full-bleed screenshots. Images render as
// the project preview (object-cover). Use this for real product screenshots.
const IMAGE_MAP: Record<string, StaticImageData> = {};

// Integration platform logos — keyed by `logoGrid` slugs from data.ts.
// Used to render a 2×2 brand grid for projects like "Third-Party Integrations".
//
// `darkInvert: true` is for logos whose default color is dark/black (Make, n8n).
// On dark backgrounds they'd be invisible — the CSS filter
// `dark:invert dark:hue-rotate-180` flips brightness while preserving brand
// colors, so black text becomes white but purples/pinks stay correct.
const INTEGRATION_LOGOS: Record<
  string,
  { src: StaticImageData; name: string; darkInvert?: boolean }
> = {
  zapier:     { src: zapierLogo,     name: "Zapier" },                   // orange box, works on dark
  make:       { src: makeLogo,       name: "Make", darkInvert: true },   // black "make" text → needs invert
  n8n:        { src: n8nLogo,        name: "n8n",  darkInvert: true },   // black "n8n" text → needs invert
  salesforce: { src: salesforceLogo, name: "Salesforce" },               // blue cloud, works on dark
};

// Helper — does this URL point to GitHub?
const isGitHubUrl = (url?: string) => !!url && /github\.com/i.test(url);

// Helper — return the resolved logo URL for a project (or undefined).
function getLogoSrc(title: string, fallback?: string): string | undefined {
  if (LOGO_MAP[title]) return LOGO_MAP[title].src;
  return fallback;
}

// Helper — return the resolved project image (local import or remote URL).
function getProjectImage(
  title: string,
  fallback: string
): string | StaticImageData {
  if (IMAGE_MAP[title]) return IMAGE_MAP[title];
  return fallback;
}

export default function Projects() {
  const featured = projects[0];          // myCRMSIM — the big hero card
  const secondary = projects.slice(1);   // The rest

  const featuredLogo = getLogoSrc(featured.title, featured.logo);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-white dark:bg-[#0d142a]/60 relative overflow-hidden"
    >
      {/* Soft ambient blobs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section label */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Selected Work
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-ink dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A handful of projects I&apos;ve shipped in production — full-stack
            platforms, admin dashboards, and CRM integrations.
          </p>
        </div>

        {/* ─── FEATURED PROJECT (full-width hero card) ─────────────── */}
        <article className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card mb-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image / Logo panel — theme-aware brand background */}
          <div
            className={`relative aspect-[16/11] lg:aspect-auto overflow-hidden ${
              featuredLogo
                ? "bg-white dark:bg-[#0a0f1f]"
                : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            {featuredLogo ? (
              // ── Branded logo display: white/dark navy with orange brand accents ──
              <div className="absolute inset-0 grid place-items-center p-8">
                {/* Brand-orange radial accent — top-left corner */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.20),transparent_60%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.32),transparent_65%)] pointer-events-none" />
                {/* Brand-amber secondary accent — bottom-right corner */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.22),transparent_60%)] pointer-events-none" />
                {/* Subtle grid texture for depth */}
                <div className="absolute inset-0 bg-grid opacity-25 dark:opacity-15 pointer-events-none" />
                {/* Central soft glow behind logo */}
                <div className="absolute w-3/4 h-3/4 rounded-full bg-brand-500/10 dark:bg-brand-500/20 blur-3xl pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredLogo}
                  alt={`${featured.title} logo`}
                  className="relative max-w-[80%] max-h-[60%] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <>
                <Image
                  src={getProjectImage(featured.title, featured.image)}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white dark:lg:to-slate-900" />
              </>
            )}
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-500 text-white text-[10px] font-bold tracking-wider uppercase shadow-soft z-10">
              ★ Featured
            </span>
          </div>

          {/* Body */}
          <div className="p-7 sm:p-10 flex flex-col justify-center">
            <span className="text-[11px] font-bold tracking-widest text-brand-500">
              {featured.category}
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-ink dark:text-white">
              {featured.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {featured.subtitle}
            </p>

            <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {featured.description}
            </p>

            {/* Metrics row — the trust signal */}
            {featured.metrics && featured.metrics.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-3">
                {featured.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-brand-50/50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 p-3"
                  >
                    <div className="text-brand-600 dark:text-brand-400 font-bold text-base sm:text-lg">
                      {m.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all hover:shadow-soft"
              >
                Visit Live Site
                <ArrowUpRight
                  size={15}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href={featured.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-brand-500 hover:text-brand-500 transition-colors"
              >
                <FileText size={14} />
                Case Study
              </a>
            </div>
          </div>
        </article>

        {/* ─── SECONDARY PROJECTS (smaller cards) ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {secondary.map((p) => {
            const logoSrc = getLogoSrc(p.title, p.logo);
            return (
            <article
              key={p.title}
              className="card-hover rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col"
            >
              {/* Image / Logo panel — theme-aware brand background */}
              <div
                className={`relative aspect-[16/9] overflow-hidden ${
                  logoSrc || p.logoGrid
                    ? "bg-white dark:bg-[#0a0f1f]"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {logoSrc ? (
                  // ── Single brand logo (e.g., myCRMSIM) ──
                  <div className="absolute inset-0 grid place-items-center p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.30),transparent_65%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.20),transparent_60%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-grid opacity-25 dark:opacity-15 pointer-events-none" />
                    <div className="absolute w-2/3 h-2/3 rounded-full bg-brand-500/10 dark:bg-brand-500/20 blur-3xl pointer-events-none" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logoSrc}
                      alt={`${p.title} logo`}
                      className="relative max-w-[75%] max-h-[60%] object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : p.logoGrid ? (
                  // ── 2×2 integration logo grid (Third-Party Integrations) ──
                  <div className="absolute inset-0 p-4">
                    {/* Brand accent backdrop */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.28),transparent_65%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(252,189,75,0.18),transparent_60%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-10 pointer-events-none" />

                    {/* The 2×2 grid of brand cards */}
                    <div className="relative h-full w-full grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
                      {p.logoGrid.map((slug) => {
                        const entry = INTEGRATION_LOGOS[slug];
                        if (!entry) return null;
                        return (
                          <div
                            key={slug}
                            className="group/lg relative rounded-xl bg-white dark:bg-slate-800/90 shadow-sm border border-slate-200/80 dark:border-slate-700/70 overflow-hidden hover:shadow-md hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all"
                            title={entry.name}
                          >
                            {/* Inner flex wrapper for reliable centering (works around SVG viewBox quirks) */}
                            <div className="absolute inset-0 flex items-center justify-center p-3 pb-5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={entry.src.src}
                                alt={entry.name}
                                className={`max-w-[70%] max-h-[55%] w-auto h-auto object-contain transition-transform duration-300 group-hover/lg:scale-105 ${
                                  entry.darkInvert
                                    ? "dark:invert dark:hue-rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                            <span className="absolute bottom-1.5 right-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 pointer-events-none">
                              {entry.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  // ── Fallback regular project screenshot ──
                  <Image
                    src={getProjectImage(p.title, p.image)}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 dark:bg-slate-900/95 text-brand-600 dark:text-brand-400 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm border border-brand-200/60 dark:border-brand-500/30 z-10">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-ink dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {p.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>

                {/* Bullets */}
                <ul className="mt-3 space-y-1.5">
                  {p.bullets.slice(0, 3).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <Check
                        size={13}
                        className="mt-0.5 text-brand-500 shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics — compact */}
                {p.metrics && p.metrics.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50/60 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 text-xs"
                      >
                        <span className="font-bold text-brand-600 dark:text-brand-400">
                          {m.value}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wide">
                          {m.label}
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions — GitHub repos get GitHub icon + label */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {p.liveUrl && p.liveUrl !== "#" ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white transition-colors"
                    >
                      {isGitHubUrl(p.liveUrl) ? (
                        <>
                          <Github size={12} />
                          View on GitHub
                        </>
                      ) : (
                        <>
                          <ExternalLink size={12} />
                          Visit Live
                        </>
                      )}
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400">
                      Live coming soon
                    </span>
                  )}
                  <a
                    href={p.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <FileText size={12} />
                    {isGitHubUrl(p.caseStudyUrl) ? "README" : "Case Study"}
                  </a>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      {/* Marquee CTA — clickable, opens GitHub profile in new tab */}
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 block overflow-hidden bg-brand-500 hover:bg-brand-600 text-white py-3 transition-colors cursor-pointer"
        aria-label="View all projects on GitHub"
      >
        <div className="marquee-track">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-semibold whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="text-white/70">{`</>`}</span>
              More Projects on Github
              <span className="text-white/70">{`</>`}</span>
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
