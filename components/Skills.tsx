"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Coffee,
  Code2,
  Database,
  Server,
  Cloud,
  Zap,
  Lock,
  Link2,
  Layers,
  Flame,
  Leaf,
  Wind,
  GitBranch,
  Box,
  Triangle,
  RefreshCcw,
  Check,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  coffee: Coffee,
  code: Code2,
  database: Database,
  server: Server,
  cloud: Cloud,
  zap: Zap,
  lock: Lock,
  link: Link2,
  layers: Layers,
  flame: Flame,
  leaf: Leaf,
  wind: Wind,
  git: GitBranch,
  box: Box,
  triangle: Triangle,
  refresh: RefreshCcw,
  check: Check,
  react: Code2,
  next: Code2,
  fast: Zap,
  graph: Layers,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-surface dark:bg-[#0a0f1f]"
    >
      <div className="container-x">
        <div className="text-center mb-14">
          <h2 className="section-heading text-3xl sm:text-4xl font-bold text-brand-500">
            Skills &amp; Technologies
          </h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400">
            Technologies and tools I work with on a regular basis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const radarData = cat.items.map((it) => ({
              skill: it.name,
              value: it.level,
            }));
            return (
              <div
                key={cat.title}
                className="rounded-2xl border border-brand-200/60 dark:border-brand-500/20 bg-white dark:bg-slate-900/60 p-6 shadow-soft"
              >
                <h3 className="text-brand-500 font-semibold text-lg">
                  {cat.title}
                </h3>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((it) => {
                    const Icon = iconMap[it.icon] ?? Code2;
                    return (
                      <span
                        key={it.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-medium border border-brand-100 dark:border-brand-500/20"
                      >
                        <Icon size={12} />
                        {it.name}
                      </span>
                    );
                  })}
                </div>

                {/* Radar chart */}
                <div className="mt-6 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      data={radarData}
                      margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
                    >
                      <PolarGrid
                        stroke="rgba(245,158,11,0.3)"
                        strokeDasharray="3 3"
                      />
                      <PolarAngleAxis
                        dataKey="skill"
                        tick={{
                          fill: "rgb(100,116,139)",
                          fontSize: 11,
                        }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={{ fill: "rgb(148,163,184)", fontSize: 9 }}
                        axisLine={false}
                      />
                      <Radar
                        name={cat.title}
                        dataKey="value"
                        stroke="#f59e0b"
                        fill="#f59e0b"
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
