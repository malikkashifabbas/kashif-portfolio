"use client";

import {
  Code2,
  Server,
  Database,
  Layers,
  BrainCircuit,
  Zap,
  Plug,
  Inbox,
  RefreshCcw,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ──────────────────────────────────────────────────────────────────────────────
// Card data — defined inline so each card can carry its own visual content.
// ──────────────────────────────────────────────────────────────────────────────
type CardKind = "ai" | "mern" | "python" | "frontend" | "integrations" | "database";

interface ExpertiseCard {
  num: string;
  kind: CardKind;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  techChips?: string[];
  className: string;          // grid placement
  featured?: boolean;
}

// 3×3 bento: AI spans 2 cols, CRM spans 2 rows, Databases fills the last 2 cols.
const cards: ExpertiseCard[] = [
  {
    num: "01",
    kind: "ai",
    tag: "AI",
    title: "AI Application Engineering",
    description:
      "LLM agents on LangGraph, RAG with LangChain, embeddings & vector search, tool-calling and prompt engineering with OpenAI & DeepSeek, turned into production features.",
    icon: BrainCircuit,
    className: "md:col-span-2 md:row-span-1",
    featured: true,
  },
  {
    num: "02",
    kind: "mern",
    tag: "MERN",
    title: "MERN Full-Stack",
    description:
      "React/Next.js frontends on Node.js/Express REST APIs with MySQL and MongoDB, JWT auth and real-time data sync. Shipped, not just prototyped.",
    icon: Layers,
    techChips: ["React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL", "JWT", "Redux"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "03",
    kind: "python",
    tag: "Python",
    title: "Python Backend & Microservices",
    description:
      "FastAPI, Django and Flask services talking over Apache Kafka, with async workers, SSE streaming and clean REST APIs.",
    icon: Server,
    techChips: ["FastAPI", "Django", "Flask", "Apache Kafka", "Pydantic", "SSE", "Async workers"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "04",
    kind: "frontend",
    tag: "UI",
    title: "Frontend: React & Angular",
    description:
      "React, Next.js and Tailwind CSS, plus Angular with RxJS, NgRx and Angular Material for typed, component-driven apps.",
    icon: Code2,
    techChips: ["React", "Next.js", "Tailwind CSS", "Angular", "RxJS", "NgRx", "Angular Material", "TypeScript"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "05",
    kind: "integrations",
    tag: "CRM",
    title: "CRM Automation & Integrations",
    description:
      "End-to-end Zapier, Make, Salesforce, HubSpot & Zoho integrations: webhooks and event-driven workflows that sync leads, contacts and bookings.",
    icon: Plug,
    className: "md:col-span-1 md:row-span-2",
    featured: true,
  },
  {
    num: "06",
    kind: "database",
    tag: "Data",
    title: "Databases & Data",
    description:
      "MySQL, PostgreSQL, MongoDB, Azure Cosmos DB and Redis: schema design, query optimization and pgvector for semantic search.",
    icon: Database,
    className: "md:col-span-2 md:row-span-1",
  },
];

const AI_TILES: Tile[] = [
  { name: "LangGraph", group: "Agents", desc: "Multi-step agent graphs", color: "#F59E0B" },
  { name: "LangChain", group: "RAG",    desc: "Retrieval pipelines",     color: "#1C9E7A" },
  { name: "OpenAI",    group: "LLM",    desc: "GPT models + tools",      color: "#10A37F" },
  { name: "DeepSeek",  group: "LLM",    desc: "Multi-provider routing",  color: "#4D6BFE" },
];

const DB_TILES: Tile[] = [
  { name: "MySQL",      group: "SQL",   desc: "Multi-tenant SaaS",    color: "#4479A1" },
  { name: "PostgreSQL", group: "SQL",   desc: "+ pgvector",           color: "#4169E1" },
  { name: "MongoDB",    group: "NoSQL", desc: "Document store",       color: "#47A248" },
  { name: "Cosmos DB",  group: "Azure", desc: "Globally distributed", color: "#0078D4" },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-20 sm:py-28 relative overflow-hidden bg-surface dark:bg-[#0a0f1f]"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-400/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-500/8 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* ─── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Capabilities
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-ink dark:text-white">
            What I <span className="text-gradient">build</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            From LLM agents and RAG pipelines to MERN apps, Python microservices
            and CRM automation — built end to end for production.
          </p>
        </div>

        {/* ─── Bento grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(260px,auto)]">
          {cards.map((card) => (
            <Card key={card.num} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Card — the main reusable container. Renders a unique visual based on `kind`.
// ──────────────────────────────────────────────────────────────────────────────
function Card({ card }: { card: ExpertiseCard }) {
  const Icon = card.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-white dark:bg-slate-900/60 p-6 sm:p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${
        card.featured
          ? "border-brand-300/60 dark:border-brand-500/30 hover:border-brand-500"
          : "border-slate-200 dark:border-slate-800 hover:border-brand-400/50"
      } ${card.className}`}
    >
      {/* Numbered tag — top right */}
      <span className="absolute top-5 right-6 text-xs font-mono font-bold text-slate-300 dark:text-slate-700 tracking-wider">
        {card.num}
      </span>

      {/* Featured chip */}
      {card.featured && (
        <span className="absolute -top-px -left-px inline-flex items-center gap-1.5 px-3 py-1 rounded-tl-3xl rounded-br-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-[10px] font-bold tracking-widest uppercase shadow-soft">
          <Sparkles size={11} />
          {card.tag}
        </span>
      )}

      {/* Header row: icon + tag */}
      <header className="flex items-start gap-3 mb-5">
        <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200/60 dark:from-brand-500/20 dark:to-brand-500/5 text-brand-600 dark:text-brand-400 shadow-sm group-hover:scale-110 transition-transform duration-300">
          <Icon size={22} strokeWidth={2} />
        </div>
        {!card.featured && (
          <span className="mt-3 text-[10px] uppercase tracking-widest font-semibold text-slate-400">
            {card.tag}
          </span>
        )}
      </header>

      {/* Title + description */}
      <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-white leading-tight">
        {card.title}
      </h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {card.description}
      </p>

      {/* Kind-specific visual content */}
      <div className="mt-5">
        {card.kind === "integrations" && <WorkflowViz />}
        {card.kind === "ai" && (
          <ServiceTiles tiles={AI_TILES} status="Agents live in production" badge="AI Native" />
        )}
        {card.kind === "database" && (
          <ServiceTiles tiles={DB_TILES} status="Plus Redis for queues, caching & rate limits" badge="Data Layer" />
        )}
        {card.techChips && <TechChips chips={card.techChips} />}
      </div>

      {/* Hover-revealed corner arrow */}
      <ArrowRight
        size={16}
        className="absolute bottom-5 right-5 text-slate-300 dark:text-slate-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-500 transition-all duration-300"
      />
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// WorkflowViz — animated mini visualization showing:
// [Inbound event] → [Trigger] → [CRM synced]
// ──────────────────────────────────────────────────────────────────────────────
function WorkflowViz() {
  return (
    <div className="mt-2 space-y-4">
      {/* Mini workflow chain */}
      <div className="space-y-3">
        <WorkflowNode
          icon={<Inbox size={14} />}
          label="Inbound Event"
          sub="Webhook receives a message or lead"
          delay="0s"
        />
        <FlowLine />
        <WorkflowNode
          icon={<Zap size={14} />}
          label="Trigger Fires"
          sub="Zapier / Make / native app"
          delay="0.6s"
          highlight
        />
        <FlowLine />
        <WorkflowNode
          icon={<RefreshCcw size={14} />}
          label="CRM Synced"
          sub="Leads, contacts & bookings"
          delay="1.2s"
        />
      </div>

      {/* Platform chips */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-2">
          Platforms
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Zapier", "Make", "HubSpot", "Salesforce", "Zoho"].map((p) => (
            <span
              key={p}
              className="text-[10px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({
  icon,
  label,
  sub,
  delay,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  delay: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${
        highlight
          ? "border-brand-300 dark:border-brand-500/40 bg-brand-50/60 dark:bg-brand-500/10"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
      }`}
    >
      <div
        className={`grid place-items-center w-7 h-7 rounded-lg shrink-0 ${
          highlight
            ? "bg-brand-500 text-white"
            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
        }`}
        style={{
          animation: highlight
            ? `node-pulse 2.4s ease-in-out infinite`
            : undefined,
          animationDelay: delay,
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-ink dark:text-white leading-none">
          {label}
        </div>
        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-none">
          {sub}
        </div>
      </div>
    </div>
  );
}

function FlowLine() {
  return (
    <div className="flex justify-start pl-[18px]">
      <svg width="2" height="14" viewBox="0 0 2 14" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="14"
          stroke="rgb(245, 158, 11)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          style={{
            animation: "flow-dash 1.4s linear infinite",
          }}
        />
      </svg>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ServiceTiles — 4-tile grid with a brand-color stripe, group label and descriptor.
// ──────────────────────────────────────────────────────────────────────────────
interface Tile {
  name: string;
  group: string;
  desc: string;
  color: string;
}

function ServiceTiles({
  tiles,
  status,
  badge,
}: {
  tiles: Tile[];
  status: string;
  badge: string;
}) {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {tiles.map((s) => (
          <div
            key={s.name}
            className="group/svc relative overflow-hidden flex flex-col items-start justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-brand-400/60 transition-all hover:-translate-y-0.5 min-h-[88px]"
          >
            <span
              className="absolute top-0 left-0 h-1 w-full"
              style={{ backgroundColor: s.color }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover/svc:opacity-30 transition-opacity blur-2xl"
              style={{ backgroundColor: s.color }}
            />

            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                {s.group}
              </span>
            </div>

            <div className="mt-2">
              <div className="text-sm font-bold text-ink dark:text-white leading-none">
                {s.name}
              </div>
              <div className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>{status}</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest shrink-0">
          {badge}
        </span>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// TechChips — wrap-friendly tech strip with subtle hover micro-interaction
// ──────────────────────────────────────────────────────────────────────────────
function TechChips({ chips }: { chips: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {chips.map((c) => (
        <span
          key={c}
          className="text-[10px] px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60 hover:bg-brand-50 hover:border-brand-300 hover:text-brand-600 dark:hover:bg-brand-500/15 dark:hover:border-brand-500/40 dark:hover:text-brand-300 transition-colors cursor-default"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
