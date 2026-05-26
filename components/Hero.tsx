"use client";

import { useEffect, useState } from "react";
import { Building2, Calendar, ArrowRight } from "lucide-react";
import { personal } from "@/lib/data";

// ── Bubble config ──────────────────────────────────────────────────────
type Bubble = {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
};

const bubbles: Bubble[] = [
  // ── Large background bubbles ──
  { size: 260, top: "-15%", left: "-10%", duration: 32, delay: 0,    opacity: 0.30, color: "#fcbd4b" },
  { size: 220, top: "-8%",  left: "15%",  duration: 30, delay: 6,    opacity: 0.28, color: "#f59e0b" },
  { size: 200, top: "-12%", left: "-18%", duration: 34, delay: 11,   opacity: 0.32, color: "#fdd689" },
  { size: 240, top: "-20%", left: "30%",  duration: 36, delay: 15,   opacity: 0.25, color: "#fba424" },
  { size: 190, top: "5%",   left: "-22%", duration: 33, delay: 19,   opacity: 0.28, color: "#fcbd4b" },
  // ── Medium bubbles ──
  { size: 140, top: "-6%",  left: "5%",   duration: 24, delay: 2,    opacity: 0.50, color: "#f59e0b" },
  { size: 130, top: "8%",   left: "-8%",  duration: 22, delay: 5,    opacity: 0.48, color: "#fba424" },
  { size: 150, top: "-10%", left: "22%",  duration: 26, delay: 8,    opacity: 0.42, color: "#fcbd4b" },
  { size: 120, top: "15%",  left: "-12%", duration: 23, delay: 13,   opacity: 0.45, color: "#f59e0b" },
  { size: 160, top: "-4%",  left: "40%",  duration: 28, delay: 17,   opacity: 0.38, color: "#fdd689" },
  { size: 110, top: "22%",  left: "0%",   duration: 21, delay: 4,    opacity: 0.50, color: "#fba424" },
  { size: 135, top: "-14%", left: "8%",   duration: 25, delay: 22,   opacity: 0.44, color: "#fcbd4b" },
  // ── Small accents ──
  { size: 80,  top: "-2%",  left: "12%",  duration: 18, delay: 1,    opacity: 0.60, color: "#f59e0b" },
  { size: 70,  top: "12%",  left: "-4%",  duration: 16, delay: 3,    opacity: 0.65, color: "#fcbd4b" },
  { size: 90,  top: "18%",  left: "-2%",  duration: 19, delay: 7,    opacity: 0.55, color: "#fba424" },
  { size: 65,  top: "-5%",  left: "28%",  duration: 15, delay: 10,   opacity: 0.62, color: "#f59e0b" },
  { size: 75,  top: "25%",  left: "5%",   duration: 17, delay: 14,   opacity: 0.58, color: "#fcbd4b" },
  { size: 85,  top: "3%",   left: "-6%",  duration: 18, delay: 16,   opacity: 0.55, color: "#fdd689" },
  { size: 72,  top: "10%",  left: "32%",  duration: 16, delay: 20,   opacity: 0.60, color: "#fba424" },
  { size: 95,  top: "-8%",  left: "45%",  duration: 20, delay: 9,    opacity: 0.48, color: "#f59e0b" },
  // ── Tiny sparkles ──
  { size: 35,  top: "5%",   left: "10%",  duration: 12, delay: 2,    opacity: 0.75, color: "#f59e0b" },
  { size: 28,  top: "16%",  left: "-2%",  duration: 11, delay: 5,    opacity: 0.80, color: "#fcbd4b" },
  { size: 40,  top: "-3%",  left: "20%",  duration: 13, delay: 7,    opacity: 0.70, color: "#fba424" },
  { size: 25,  top: "20%",  left: "8%",   duration: 10, delay: 11,   opacity: 0.85, color: "#f59e0b" },
  { size: 32,  top: "8%",   left: "-5%",  duration: 11, delay: 14,   opacity: 0.78, color: "#fdd689" },
  { size: 22,  top: "-2%",  left: "35%",  duration: 9,  delay: 18,   opacity: 0.85, color: "#fcbd4b" },
  { size: 38,  top: "14%",  left: "25%",  duration: 12, delay: 21,   opacity: 0.72, color: "#f59e0b" },
  { size: 30,  top: "22%",  left: "15%",  duration: 11, delay: 6,    opacity: 0.80, color: "#fba424" },
  { size: 26,  top: "-6%",  left: "8%",   duration: 10, delay: 12,   opacity: 0.82, color: "#fcbd4b" },
  { size: 42,  top: "4%",   left: "38%",  duration: 13, delay: 23,   opacity: 0.68, color: "#fdd689" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = personal.tagline[phraseIdx];
    const typingSpeed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % personal.tagline.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-surface dark:bg-[#0a0f1f]"
    >
      {/* ── Grid background ──────────────────────────────────────── */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* ── Bubbles drifting diagonally ──────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              top: b.top,
              left: b.left,
              background: `radial-gradient(circle at 30% 30%, ${b.color}cc, ${b.color}33 70%, transparent 100%)`,
              boxShadow: `0 0 ${b.size / 3}px ${b.color}55`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
            }}
          />
        ))}
      </div>

      {/* ── Foreground content ─────────────────────────────────── */}
      <div className="container-x relative z-10">
        <div className="max-w-5xl">
          {/* QuantumStack badge — links to the team page */}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-sm text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-8 hover:border-brand-500/60 hover:shadow-soft transition-all shadow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Building2 size={14} className="text-brand-500" />
            Currently at <span className="font-semibold text-ink dark:text-white">{personal.company}</span>
            <ArrowRight
              size={12}
              className="text-slate-400 group-hover/badge:text-brand-500 group-hover/badge:translate-x-0.5 transition-all"
            />
          </a>

          {/* Headline — big bold statement with accent words */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-ink dark:text-white leading-[1.05] drop-shadow-[0_4px_12px_rgba(10,21,48,0.08)]">
            {personal.headline.pre}{" "}
            <span className="text-gradient">{personal.headline.accent1}</span>{" "}
            {personal.headline.middle}{" "}
            <span className="text-gradient">{personal.headline.accent2}</span>
            {personal.headline.end}
          </h1>

          {/* Typing tagline — now SPECIALTIES, not titles */}
          <div className="mt-7 sm:mt-9 text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 min-h-[1.4em]">
            <span className="text-slate-400 dark:text-slate-500">I focus on </span>
            <span className="typing-caret text-ink dark:text-white font-semibold">{text}</span>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {personal.description}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all hover:shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:-translate-y-0.5"
            >
              View Case Studies
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-ink dark:border-slate-200 text-ink dark:text-slate-100 font-semibold hover:bg-ink hover:text-white dark:hover:bg-slate-100 dark:hover:text-ink transition-all hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              Book a Call
            </a>
          </div>

          {/* Stats bar — trust signals */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl border-t border-slate-200 dark:border-slate-800 pt-8">
            <Stat value={personal.stats.projectsShipped} label="Projects Shipped" />
            <Stat value={personal.stats.integrations} label="Integrations Built" />
            <Stat value="AWS" label="Cloud Native" />
            <Stat value={personal.stats.linkedinConnections} label="LinkedIn Network" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}
