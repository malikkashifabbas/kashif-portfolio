"use client";

import {
  Code2,
  Server,
  Database,
  Cloud,
  Zap,
  Plug,
  Inbox,
  MessageSquare,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// ──────────────────────────────────────────────────────────────────────────────
// Card data — defined inline so each card can carry its own visual content.
// ──────────────────────────────────────────────────────────────────────────────
type CardKind = "frontend" | "backend" | "integrations" | "aws" | "database" | "api";

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

const cards: ExpertiseCard[] = [
  {
    num: "01",
    kind: "frontend",
    tag: "Interface",
    title: "Frontend Development",
    description:
      "React, Next.js, and modern libraries for pixel-perfect, animated, performant UIs.",
    icon: Code2,
    techChips: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Redux",
      "React Query",
      "shadcn/ui",
    ],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "02",
    kind: "backend",
    tag: "Server",
    title: "Backend Development",
    description:
      "Node.js and Python — REST APIs, async services, and scalable server logic.",
    icon: Server,
    techChips: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST",
      "JWT",
    ],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "03",
    kind: "integrations",
    tag: "Specialty",
    title: "Integrations & Workflow Automation",
    description:
      "Inbound messages trigger automated actions like Send SMS, push notifications, and CRM updates — so businesses scale communication without manual work.",
    icon: Plug,
    className: "md:col-span-1 md:row-span-2",
    featured: true,
  },
  {
    num: "04",
    kind: "aws",
    tag: "Cloud",
    title: "AWS & Cloud Infrastructure",
    description:
      "Docker, AWS services, and CI/CD pipelines for production-ready deployments.",
    icon: Cloud,
    className: "md:col-span-2 md:row-span-1",
    featured: true,
  },
  {
    num: "05",
    kind: "database",
    tag: "Data",
    title: "Database Engineering",
    description: "MongoDB, PostgreSQL, MySQL — schema design and query optimization.",
    icon: Database,
    techChips: ["MongoDB", "Postgres", "MySQL", "Redis"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    num: "06",
    kind: "api",
    tag: "Architecture",
    title: "API & System Design",
    description: "RESTful architecture, microservices, and scalable system design.",
    icon: Zap,
    techChips: ["REST", "GraphQL", "Microservices", "OAuth"],
    className: "md:col-span-1 md:row-span-1",
  },
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
            From frontend interfaces to backend systems and automated workflows
            — full-stack capabilities across the entire product lifecycle.
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
        {card.kind === "aws" && <AwsServices />}
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
// [Inbound Msg] → [Trigger] → [Send SMS]
// ──────────────────────────────────────────────────────────────────────────────
function WorkflowViz() {
  return (
    <div className="mt-2 space-y-4">
      {/* Mini workflow chain */}
      <div className="space-y-3">
        <WorkflowNode
          icon={<Inbox size={14} />}
          label="Inbound Message"
          sub="Webhook receives"
          delay="0s"
        />
        <FlowLine />
        <WorkflowNode
          icon={<Zap size={14} />}
          label="Trigger Fires"
          sub="Zapier / Make"
          delay="0.6s"
          highlight
        />
        <FlowLine />
        <WorkflowNode
          icon={<MessageSquare size={14} />}
          label="Send SMS"
          sub="Action dispatched"
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
// AwsServices — refined 4-tile grid (Lambda, CloudFront, EC2, Docker)
// Each tile is bigger now: colored stripe, name, and a short descriptor.
// ──────────────────────────────────────────────────────────────────────────────
function AwsServices() {
  const services = [
    { name: "Lambda",     desc: "Serverless",  color: "#FF9900" },
    { name: "CloudFront", desc: "CDN / Edge",  color: "#8C4FFF" },
    { name: "EC2",        desc: "Compute",     color: "#FF9900" },
    { name: "Docker",     desc: "Containers",  color: "#2496ED" },
  ];

  return (
    <div className="mt-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {services.map((s) => (
          <div
            key={s.name}
            className="group/svc relative overflow-hidden flex flex-col items-start justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-brand-400/60 transition-all hover:-translate-y-0.5 min-h-[88px]"
          >
            {/* Top-left colored stripe (service brand color) */}
            <span
              className="absolute top-0 left-0 h-1 w-full"
              style={{ backgroundColor: s.color }}
            />

            {/* Soft glow on hover, tinted with the service color */}
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
                AWS
              </span>
            </div>

            <div className="mt-2">
              <div className="text-sm font-bold text-ink dark:text-white leading-none">
                {s.name}
              </div>
              <div className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 leading-none">
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Production deployments live</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
          Cloud Native
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
