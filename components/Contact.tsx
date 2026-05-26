"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { personal } from "@/lib/data";

// ─── Helpers ────────────────────────────────────────────────────────────────

// Safely prepend https:// to a URL if it doesn't already start with http(s)
function ensureHttps(url: string): string {
  if (!url) return "#";
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

// Build a Gmail compose URL that opens Gmail in the browser directly.
// Avoids the "no default mail app" error on Windows machines without
// a configured email client. Works for everyone with a Google account.
function gmailComposeUrl(to: string, subject = "", body = ""): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    ...(subject && { su: subject }),
    ...(body && { body }),
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

// Pull a clean display string from any URL (linkedin.com/in/handle/ → /in/handle)
function pathFromUrl(url: string): string {
  try {
    const u = new URL(ensureHttps(url));
    return (u.pathname.replace(/\/+$/, "") || u.hostname).slice(0, 36);
  } catch {
    return url;
  }
}

// GitHub handle from full URL (https://github.com/user → @user)
function githubHandle(url: string): string {
  const last = url.replace(/\/+$/, "").split("/").pop();
  return last ? `@${last}` : url;
}

// ─── Submission state type ──────────────────────────────────────────────────
type SubmitStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

// ─── Component ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });

  // Controlled form state — we want full control for clearing on success
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ── Honeypot defense ──
  // Checkbox honeypot — browser autofill never touches checkboxes.
  // Bots that auto-fill all form fields will tick it; humans never see it.
  const [botCheck, setBotCheck] = useState(false);
  // Form-open timestamp — bots submit instantly; humans take seconds.
  const [formLoadedAt] = useState<number>(() => Date.now());

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || status.kind === "loading") return;

    setStatus({ kind: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          botCheck,
          elapsedMs: Date.now() - formLoadedAt,
        }),
      });

      const data = await res.json().catch(() => ({} as { error?: string }));

      if (!res.ok || !data.ok) {
        setStatus({
          kind: "error",
          message:
            data.error ??
            "Couldn't send your message. Please try again or email me directly.",
        });
        return;
      }

      // Success — clear the form
      setStatus({ kind: "success" });
      setName("");
      setEmail("");
      setMessage("");
      setAgree(false);

      // Reset status after 6 seconds so the form is ready for another message
      setTimeout(() => setStatus({ kind: "idle" }), 6000);
    } catch (err) {
      console.error("[contact] submit error:", err);
      setStatus({
        kind: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const isLoading = status.kind === "loading";
  const isDisabled = !agree || isLoading;

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-white dark:bg-[#0d142a]/60"
    >
      <div className="container-x">
        <div className="text-center mb-12">
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-ink dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400">
            Let&apos;s build something meaningful together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Let's Connect */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-soft">
            <div className="border-l-4 border-brand-500 pl-3">
              <h3 className="text-lg font-bold text-ink dark:text-white">
                Let&apos;s Connect
              </h3>
            </div>

            <div className="mt-5 space-y-3">
              <ContactRow
                icon={<Mail size={18} />}
                label="EMAIL"
                value={personal.email}
                href={gmailComposeUrl(
                  personal.email,
                )}
              />
              <ContactRow
                icon={<Linkedin size={18} />}
                label="LINKEDIN"
                value={pathFromUrl(personal.linkedin)}
                href={ensureHttps(personal.linkedin)}
              />
              <ContactRow
                icon={<Github size={18} />}
                label="GITHUB"
                value={githubHandle(personal.github)}
                href={ensureHttps(personal.github)}
              />
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
              <div>
                <div className="text-brand-500 font-bold text-lg">
                  {personal.stats.linkedinConnections}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  LinkedIn Connections
                </div>
              </div>
              <div>
                <div className="text-brand-500 font-bold text-lg">
                  {personal.stats.githubRepos}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Github Repositories
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-soft"
            noValidate
          >
            <div className="border-l-4 border-brand-500 pl-3">
              <h3 className="text-lg font-bold text-ink dark:text-white">
                Contact Me
              </h3>
            </div>

            <div className="mt-5 space-y-5">
              {/* ── Honeypot (checkbox version) ──
                  Hidden well off-screen. Browsers never autofill checkboxes,
                  so this won't get accidentally filled like a text input would.
                  Bots that auto-tick all fields will set it to true → silent drop. */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  top: "-10000px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  opacity: 0,
                }}
              >
                <label htmlFor="bot_check_field">
                  Leave this box unchecked
                </label>
                <input
                  id="bot_check_field"
                  type="checkbox"
                  name="bot_check_field"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={botCheck}
                  onChange={(e) => setBotCheck(e.target.checked)}
                />
              </div>

              <Field
                label="NAME"
                name="name"
                type="text"
                value={name}
                onChange={setName}
                disabled={isLoading}
                required
              />
              <Field
                label="EMAIL"
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
                disabled={isLoading}
                required
              />

              <div>
                <label
                  htmlFor="message"
                  className="block text-[11px] tracking-wider font-medium text-slate-500 dark:text-slate-400"
                >
                  HOW CAN I HELP YOU?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  disabled={isLoading}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 focus:border-brand-500 outline-none py-2 text-sm text-ink dark:text-slate-100 resize-none disabled:opacity-60"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  disabled={isLoading}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 accent-brand-500"
                />
                I understand that my name, email, and message will be used to
                contact me.
              </label>

              {/* Submit + status feedback */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isDisabled}
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all min-w-[100px] justify-center ${
                    isDisabled
                      ? "border-brand-200 text-brand-300 cursor-not-allowed dark:border-brand-500/30 dark:text-brand-400/40"
                      : "border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  ) : status.kind === "success" ? (
                    <>
                      <CheckCircle2 size={16} />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send <Send size={14} />
                    </>
                  )}
                </button>

                {status.kind === "success" && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} />
                    Thanks — I&apos;ll get back to you soon.
                  </span>
                )}
              </div>

              {/* Inline error banner */}
              {status.kind === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-700 dark:text-rose-300"
                >
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Hire Me */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2">
            <CheckCircle2 size={22} className="text-brand-500" />
            <h3 className="text-2xl font-bold text-ink dark:text-white">
              Hire Me
            </h3>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            I&apos;m open for full-stack opportunities and freelance work.
            Let&apos;s build something cool.
          </p>
          <a
            href={gmailComposeUrl(
              personal.email,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-brand-500 text-brand-500 text-sm font-semibold hover:bg-brand-500 hover:text-white transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Footer — all social icons now wired to real URLs */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} {personal.name}
            <div className="text-[11px] text-brand-500 font-medium mt-0.5">
              Built with MERN Stack
            </div>
          </div>
          <a
            href="#home"
            className="flex items-center gap-1 font-bold text-ink dark:text-white"
          >
            {personal.initials}
            <span className="text-brand-500">.</span>
          </a>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <SocialIcon
              href={ensureHttps(personal.github)}
              label="GitHub"
              icon={<Github size={18} />}
            />
            <SocialIcon
              href={ensureHttps(personal.linkedin)}
              label="LinkedIn"
              icon={<Linkedin size={18} />}
            />
            <SocialIcon
              href={gmailComposeUrl(personal.email)}
              label="Email (opens in Gmail)"
              icon={<Mail size={18} />}
            />
          </div>
        </div>
      </footer>
    </section>
  );
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors"
    >
      {icon}
    </a>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition-colors"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-9 h-9 rounded-lg grid place-items-center bg-brand-50 dark:bg-brand-500/10 text-brand-500 shrink-0">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-slate-400">
            {label}
          </div>
          <div className="text-sm text-ink dark:text-slate-100 truncate">
            {value}
          </div>
        </div>
      </div>
      <ArrowUpRight
        size={16}
        className="text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
      />
    </a>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  required,
  disabled,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] tracking-wider font-medium text-slate-500 dark:text-slate-400"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 focus:border-brand-500 outline-none py-2 text-sm text-ink dark:text-slate-100 disabled:opacity-60"
      />
    </div>
  );
}
