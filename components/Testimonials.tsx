"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 relative bg-surface dark:bg-[#0a0f1f] overflow-hidden"
    >
      {/* Soft background blobs for ambience */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-brand-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            What Clients Say
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-ink dark:text-white">
            Testimonials
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative max-w-4xl mx-auto">
          <article
            key={active}
            className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-card animate-[fadeIn_0.5s_ease-out]"
          >
            {/* Decorative quote icon */}
            <Quote
              size={56}
              className="absolute top-8 left-8 text-brand-200 dark:text-brand-500/30"
              strokeWidth={2}
            />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-brand-400 text-brand-400"
                />
              ))}
            </div>

            {/* Short summary (bold opener) */}
            <p className="text-center text-base sm:text-lg text-ink dark:text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto">
              {current.short}
            </p>

            {/* Full quote (italic body) */}
            <p className="mt-6 text-center text-sm sm:text-base text-slate-500 dark:text-slate-400 italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Divider + Author */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="w-12 h-0.5 bg-brand-500 rounded-full" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-white font-bold text-sm shadow-soft">
                  {current.avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-ink dark:text-white">
                    {current.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {current.role}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500 hover:shadow-soft transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500 hover:shadow-soft transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-brand-500"
                  : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
