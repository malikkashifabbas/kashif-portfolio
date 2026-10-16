import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  ExternalLink,
  Inbox,
  GitBranch,
  BookOpen,
  Wrench,
  Send,
  ShieldCheck,
  Gauge,
  Workflow,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { personal } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "MyCRMSim-AI case study — Malik Kashif Abbas",
  description:
    "How two coordinated LLM agents, RAG over each client's knowledge base and CRM automation power MyCRMSim-AI in production.",
  alternates: { canonical: "/case-studies/mycrmsim-ai" },
};

const DEMO_URL = "https://mycrmsim.com/";
const APP_URL = "https://app.mycrmsim.com/";

const STACK = [
  "Python", "FastAPI", "LangChain", "LangGraph", "OpenAI", "DeepSeek",
  "React", "Next.js", "Node.js", "Express", "MySQL", "Redis", "Docker",
];

const FLOW: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: Inbox, title: "Inbound message", sub: "SMS · iMessage · WhatsApp · RCS" },
  { icon: GitBranch, title: "Agent graph", sub: "Classify intent, pick a path" },
  { icon: BookOpen, title: "Knowledge (RAG)", sub: "Client's own documents" },
  { icon: Wrench, title: "Tools", sub: "Calendar, CRM, workflows" },
  { icon: Send, title: "Reply", sub: "Human-paced, on the same channel" },
];

const PARTS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: GitBranch,
    title: "Booking & qualification agent (LangGraph)",
    body:
      "A state graph runs each conversation: it checks a qualification script, classifies intent (book, cancel, reschedule, question, task, stop), retrieves knowledge or matches the client's workflows, then replies, calling calendar and CRM tools. Bookings go through an explicit confirmation step, so the agent never books a slot the contact didn't agree to.",
  },
  {
    icon: Bot,
    title: "“Simi” — the in-app support agent",
    body:
      "Simi helps users inside the product. In Guide mode it points at the right part of the UI and walks people through a task one step at a time. In Auto mode it can do the task itself, with read-only tools running freely and any change paused for the user's approval first. Responses stream to the browser over SSE.",
  },
  {
    icon: BookOpen,
    title: "RAG over each client's knowledge base",
    body:
      "Clients upload their own documents. They're chunked and embedded with OpenAI embeddings, and every answer is grounded in a vector similarity search scoped to that client and that agent, so one business never sees another's data.",
  },
  {
    icon: Gauge,
    title: "Production plumbing",
    body:
      "Webhooks acknowledge fast and hand work to background workers on Redis. Rapid messages are batched and replies are sent with human-like timing. Every LLM and tool step is traced with token and cost tracking, and calls go through retries, a rate limiter and multi-provider routing (OpenAI + DeepSeek).",
  },
];

const ROLE = [
  "Core developer on the AI service: agent nodes, tool-calling, prompts and the RAG pipeline.",
  "Built Simi's guided walkthroughs and the confirm-before-change flow for its actions.",
  "Built React/Next.js dashboard features on Node.js/Express REST APIs backed by MySQL.",
  "Owned the CRM integrations end to end: Zapier, Make, Salesforce, HubSpot and Zoho via webhooks and OAuth.",
];

const RESULTS = [
  { value: "2", label: "Coordinated LLM agents" },
  { value: "~30k", label: "Lines of code" },
  { value: "5", label: "CRM platforms integrated" },
  { value: "Live", label: "In production today" },
];

export default function MyCrmSimCaseStudy() {
  return (
    <main className="min-h-screen bg-surface dark:bg-[#0a0f1f]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-surface/85 dark:bg-[#0a0f1f]/85 backdrop-blur">
        <div className="container-x h-16 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <Link href="/" className="font-bold text-ink dark:text-white">
            {personal.initials}
            <span className="text-brand-500">.</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <Reveal className="container-x relative py-16 sm:py-24 max-w-5xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Case study · MyCRMSim-AI
          </span>
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-white leading-[1.1]">
            Two LLM agents that answer from{" "}
            <span className="text-gradient">each client&apos;s own knowledge</span>{" "}
            and act inside their CRM.
          </h1>
          <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            MyCRMSim-AI is the AI layer of myCRMSIM, a platform that connects
            businesses&apos; own phones and SIMs to their CRM for SMS, iMessage,
            WhatsApp and RCS. I was a core developer on it at QuantumStack
            (Aug 2025 – Oct 2026).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Try Simi live
              <ArrowUpRight size={15} />
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              <ExternalLink size={15} />
              Visit App
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Simi is the chat assistant in the corner of mycrmsim.com — ask it
            anything about the product.
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {STACK.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="container-x max-w-5xl pb-20 sm:pb-28 space-y-16 sm:space-y-20">
        {/* Problem */}
        <Section eyebrow="01 · The problem" title="Fast replies that are right, not just fast">
          <p>
            Businesses on myCRMSIM get a constant stream of inbound messages:
            new leads asking questions, existing contacts wanting to book,
            cancel or reschedule. Every minute without a reply loses deals, but
            a generic chatbot makes things up and can&apos;t actually do
            anything in the CRM.
          </p>
          <p>
            At the same time, the product itself is large — channels, devices,
            routing, automations — and new users needed help finding their way
            around without waiting for a support call.
          </p>
        </Section>

        {/* Flow */}
        <Section eyebrow="02 · How a message flows" title="From inbound message to a grounded reply">
          <Stagger className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {FLOW.map(({ icon: Icon, title, sub }, i) => (
              <StaggerItem
                key={title}
                className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400">
                    <Icon size={16} />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-3 text-sm font-bold text-ink dark:text-white leading-tight">
                  {title}
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  {sub}
                </div>
                {i < FLOW.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="hidden sm:block absolute top-1/2 -right-[11px] -translate-y-1/2 text-brand-500"
                  />
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* Architecture */}
        <Section eyebrow="03 · How it works" title="The agents, the knowledge, and the plumbing">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTS.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title} className="h-full">
              <article
                className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-soft"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-100 to-brand-200/60 dark:from-brand-500/20 dark:to-brand-500/5 text-brand-600 dark:text-brand-400">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink dark:text-white leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {body}
                </p>
              </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* Integrations */}
        <Section eyebrow="04 · Integrations" title="Wired into the CRMs clients already use">
          <p>
            Agents are only useful if what they learn lands where the team
            works. Webhooks and OAuth connections to Zapier, Make, Salesforce,
            HubSpot and Zoho keep leads, contacts and appointments in sync, and
            any inbound message, reply or keyword can trigger a workflow.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Zapier", "Make", "Salesforce", "HubSpot", "Zoho"].map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
              >
                <Workflow size={12} className="text-brand-500" />
                {p}
              </span>
            ))}
          </div>
        </Section>

        {/* My role */}
        <Section eyebrow="05 · My role" title="What I built">
          <ul className="space-y-3">
            {ROLE.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <ShieldCheck size={18} className="mt-0.5 text-brand-500 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Results */}
        <Section eyebrow="06 · Result" title="Running in production">
          <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RESULTS.map((m) => (
              <StaggerItem
                key={m.label}
                className="rounded-2xl bg-brand-50/60 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 p-4"
              >
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {m.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6">
            Both agents serve real businesses on app.mycrmsim.com, and Simi
            answers visitors on mycrmsim.com — the quickest way to see this work
            is to ask it a question.
          </p>
        </Section>

        {/* CTA */}
        <Reveal className="rounded-3xl border border-brand-300/60 dark:border-brand-500/30 bg-white dark:bg-slate-900/60 p-8 sm:p-10 text-center shadow-card">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink dark:text-white">
            See Simi answer a real question
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Open mycrmsim.com and use the chat assistant in the corner.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle size={16} />
              Try Simi live
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="text-[11px] font-bold tracking-widest uppercase text-brand-500">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink dark:text-white">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        {children}
      </div>
    </Reveal>
  );
}
