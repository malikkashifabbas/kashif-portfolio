"use client";

import {
  Download,
  GraduationCap,
  Briefcase,
  Quote,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { about, personal } from "@/lib/data";
// Personal photo — Next.js static import; filenames with spaces are fine
import profileImg from "../app/images/personal myCRMSIM img.png";

// Words that should get the brand-color highlight in the bio.
// Any matched word/phrase gets wrapped in a colored <span>.
const HIGHLIGHT = [
  "QuantumStack",
  "third-party integrations",
  "workflow automation",
  "Zapier",
  "Make",
  "Salesforce",
  "Zoho",
  "HubSpot",
  "Send SMS",
  "AWS",
  "RESTful APIs",
];

function renderBioParagraph(text: string, key: number) {
  // Build a regex that matches any highlight phrase (longer first)
  const sorted = [...HIGHLIGHT].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(re);

  return (
    <p key={key} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
      {parts.map((part, i) =>
        HIGHLIGHT.includes(part) ? (
          <span
            key={i}
            className="font-bold text-brand-500 dark:text-brand-400"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

const STACK_BADGES = [
  "TypeScript", "React", "Next.js", "Node.js", "Express", "Python",
  "PostgreSQL", "MongoDB", "Docker", "AWS",
  "Zapier", "Make", "Salesforce", "HubSpot", "Zoho",
  "Webhooks", "REST APIs",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-white dark:bg-[#0d142a]/60 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-brand-400/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-brand-500/8 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section label */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            About Me
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-ink dark:text-white">
            Building <span className="text-gradient">scalable</span> products
            <br />that <span className="text-gradient">ship fast</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Photo + quick info */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Soft orange glow halo behind the photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-400/30 to-brand-500/10 blur-2xl" />

              {/* Photo container — white in light mode, dark navy in dark mode, with brand color accents */}
              <div className="relative w-full h-full rounded-3xl bg-white dark:bg-[#0a0f1f] border-4 border-white dark:border-slate-800 shadow-card overflow-hidden">
                {/* Brand-orange radial accent — top-left corner */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(245,158,11,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_25%_20%,rgba(245,158,11,0.28),transparent_60%)] pointer-events-none" />
                {/* Brand-amber secondary accent — bottom-right corner */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(252,189,75,0.14),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_85%,rgba(252,189,75,0.20),transparent_55%)] pointer-events-none" />
                {/* Subtle grid texture in brand orange */}
                <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profileImg.src}
                  alt={personal.name}
                  className="relative w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating QuantumStack badge — clickable, opens team page */}
              <a
                href={personal.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/qs absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-card rounded-2xl pl-4 pr-3 py-3 flex items-center gap-2 hover:border-brand-500/60 hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] hover:-translate-y-0.5 transition-all"
              >
                <Building2 size={18} className="text-brand-500" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">
                    Currently at
                  </div>
                  <div className="text-sm font-bold text-ink dark:text-white">
                    {personal.company}
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-400 group-hover/qs:text-brand-500 group-hover/qs:translate-x-0.5 group-hover/qs:-translate-y-0.5 transition-all ml-1"
                />
              </a>
            </div>

            {/* Resume CTA */}
            <a
              href={personal.resumeUrl}
              download
              className="mt-12 inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-brand-500 text-brand-500 text-sm font-semibold hover:bg-brand-500 hover:text-white transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Bio + stack */}
          <div className="lg:col-span-3">
            {/* Pull-quote */}
            <div className="border-l-4 border-brand-500 pl-4 mb-6 italic">
              <Quote size={18} className="inline text-brand-500 mr-1" />
              <span className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
                I don&apos;t just write features — I think about system design,
                performance, scalability, and developer experience.
              </span>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              {about.bio.map((para, i) => renderBioParagraph(para, i))}
            </div>

            {/* Stack badges (matches reference screenshot) */}
            <div className="mt-7 flex flex-wrap gap-2">
              {STACK_BADGES.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:border-brand-500/60 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education / Experience cards — items-stretch keeps both at equal height */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto items-stretch">
          {/* ─── EDUCATION CARD — minimal Triple-Track version ─── */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-brand-500/40 transition-colors">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-brand-500 font-semibold text-sm">
                <GraduationCap size={18} />
                Education
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/30">
                <Sparkles size={11} />
                Triple Track
              </span>
            </div>

            {/* Triple-track explainer — BOLD, prominent */}
            <p className="mt-5 text-sm sm:text-[15px] font-semibold text-ink dark:text-white leading-relaxed">
              {about.education.tripleTrack}
            </p>

            {/* Single education entry — compact bordered card */}
            {about.education.entries.map((entry, i) => (
              <div
                key={i}
                className="mt-6 rounded-xl border border-brand-200 dark:border-brand-500/30 bg-gradient-to-br from-brand-50/40 to-transparent dark:from-brand-500/5 p-4"
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h4 className="text-base sm:text-lg font-bold text-ink dark:text-white leading-tight">
                    {entry.degree}
                  </h4>
                  {entry.current && (
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-brand-500 text-white shrink-0">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-brand-500 font-medium">
                  {entry.school}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {entry.period}
                </p>
              </div>
            ))}
          </article>

          {/* ─── EXPERIENCE CARD — parallel structure to Education ─── */}
          <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-brand-500/40 transition-colors relative overflow-hidden">
            {/* Subtle decorative sparkles in corner */}
            <Sparkles
              size={64}
              className="absolute -top-4 -right-4 text-brand-100 dark:text-brand-500/15 pointer-events-none"
            />

            {/* Header — mirrors Education header */}
            <div className="flex items-center justify-between flex-wrap gap-2 relative">
              <div className="flex items-center gap-2 text-brand-500 font-semibold text-sm">
                <Briefcase size={18} />
                Experience
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Full-time
              </span>
            </div>

            {/* Bold opener — mirrors Education's tripleTrack paragraph */}
            <p className="mt-5 text-sm sm:text-[15px] font-semibold text-ink dark:text-white leading-relaxed">
              {about.experience.bold}
            </p>

            {/* Inner card — mirrors Education's degree card */}
            <div className="mt-6 rounded-xl border border-brand-200 dark:border-brand-500/30 bg-gradient-to-br from-brand-50/40 to-transparent dark:from-brand-500/5 p-4">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h4 className="text-base sm:text-lg font-bold text-ink dark:text-white leading-tight">
                  {about.experience.role}
                </h4>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-brand-500 text-white shrink-0">
                  Current
                </span>
              </div>
              <a
                href={personal.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/co mt-1.5 inline-flex items-center gap-1 text-sm text-brand-500 font-medium hover:text-brand-600 transition-colors"
              >
                {about.experience.company}
                <ArrowUpRight
                  size={13}
                  className="group-hover/co:translate-x-0.5 group-hover/co:-translate-y-0.5 transition-transform"
                />
              </a>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {about.experience.period}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
