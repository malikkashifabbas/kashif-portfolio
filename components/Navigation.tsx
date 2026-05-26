"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { navLinks, personal } from "@/lib/data";

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`glass flex items-center gap-1 sm:gap-3 rounded-full border border-slate-200/60 dark:border-slate-700/60 px-3 sm:px-5 py-2 shadow-soft transition-all ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 px-3 py-1.5 rounded-full font-bold text-ink dark:text-slate-100 text-sm sm:text-base tracking-tight"
        >
          <span>{personal.initials}</span>
          <span className="text-brand-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-ink dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-ink dark:hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <>
                    <span className="text-brand-500 mr-1">&lt;</span>
                    {link.label}
                    <span className="text-brand-500 ml-1">/&gt;</span>
                  </>
                )}
                {!isActive && link.label}
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={personal.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold pl-3 pr-4 py-2 rounded-full transition-colors shadow-soft"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-3 shadow-card flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            download
            className="mt-1 inline-flex items-center justify-center gap-1.5 bg-brand-500 text-white text-sm font-semibold px-4 py-2 rounded-xl"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
