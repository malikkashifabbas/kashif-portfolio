"use client";

import { useState } from "react";
import { tools } from "@/lib/data";

/**
 * Tools marquee — real brand SVGs self-hosted in public/tool-icons.
 *
 * Logo URL: /tool-icons/{slug}.svg
 *   (downloaded from simple-icons in their default brand color and served
 *    from our own domain — no runtime dependency on a third-party CDN that
 *    could rate-limit/drop requests and break the icons in production)
 *
 * Black-default logos (Next.js, Express, Vercel, GitHub) get CSS-inverted
 * in dark mode via `dark:invert dark:brightness-0`. Detection rule:
 * if the tool has a `darkColor` field in data.ts, it's dark-default.
 *
 * Brands not reliably in simple-icons (AWS, Salesforce) are rendered as
 * styled text badges via `custom: true` in data.ts.
 *
 * Any other logo that fails to load also falls back to a custom badge,
 * so no broken images ever show.
 */
export default function ToolsMarquee() {
  // Duplicate the tools array so the marquee can loop seamlessly
  const loop = [...tools, ...tools];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#0d142a]/60 relative overflow-hidden">
      {/* Section header */}
      <div className="container-x text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          My Stack
        </span>
        <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-ink dark:text-white">
          Tools I Use Daily
        </h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          The full toolkit — from frontend frameworks to third-party platforms I
          integrate into client apps.
        </p>
      </div>

      {/* Edge fade gradients */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-[#0a0f1f] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-[#0a0f1f] to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track py-4">
            {loop.map((tool, i) => (
              <ToolItem key={`${tool.name}-${i}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Single tool — real brand SVG or a styled custom badge.
// ──────────────────────────────────────────────────────────────────────────────
function ToolItem({ tool }: { tool: (typeof tools)[number] }) {
  const [failed, setFailed] = useState(false);
  const useCustom = tool.custom || failed;

  // Self-hosted brand SVGs (downloaded from simple-icons into public/tool-icons).
  // Served from our own domain so production never depends on a third-party CDN
  // that can rate-limit/drop requests and trigger the letter-badge fallback.
  const logoUrl = `/tool-icons/${tool.slug}.svg`;

  // If the tool has a `darkColor` in data.ts, it means the default brand color
  // is dark (Next.js, Express, Vercel, GitHub). In dark mode we invert the SVG
  // to white so it stays visible against the dark background.
  const needsDarkInvert = Boolean(tool.darkColor);

  return (
    <div
      className="group flex flex-col items-center justify-center mx-7 sm:mx-9 shrink-0"
      title={tool.name}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {useCustom ? (
          <CustomBadge tool={tool} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoUrl}
            alt={tool.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className={`w-12 h-12 sm:w-14 sm:h-14 object-contain ${
              needsDarkInvert ? "dark:invert dark:brightness-0 dark:contrast-200" : ""
            }`}
          />
        )}
      </div>

      {/* Name appears on hover */}
      <span className="mt-2 text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {tool.name}
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// CustomBadge — branded rounded badge with short label inside.
// Used for AWS, Salesforce (intentionally) + as a fallback for failed loads.
// ──────────────────────────────────────────────────────────────────────────────
function CustomBadge({ tool }: { tool: (typeof tools)[number] }) {
  const bg = tool.bgColor ?? "F59E0B"; // fallback = brand orange
  const fg = tool.color ?? "FFFFFF";
  const label =
    tool.label ??
    tool.name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

  return (
    <div
      className="w-full h-full rounded-2xl grid place-items-center font-extrabold text-sm sm:text-base shadow-soft border border-black/5 tracking-tight"
      style={{
        backgroundColor: `#${bg}`,
        color: `#${fg}`,
      }}
    >
      {label}
    </div>
  );
}
