"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  accent: string;
  details: string[];
  href?: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="glass card-hover group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-80" style={{ background: project.accent, opacity: 0.13 }} />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs text-white/35">{project.number} / 05</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[.16em] text-white/55">{project.category}</span>
      </div>
      <div className="relative my-8 flex h-32 items-center justify-center overflow-hidden rounded-xl border border-white/[.06] bg-black/30">
        <div className="absolute h-28 w-28 rounded-full blur-2xl" style={{ background: project.accent, opacity: 0.18 }} />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[.03] transition duration-500 group-hover:rotate-6 group-hover:scale-110" style={{ boxShadow: `0 0 35px ${project.accent}20` }}>
          <Code2 size={32} strokeWidth={1.25} style={{ color: project.accent }} />
        </div>
        <div className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[.18em] text-white/30">System / {project.number}</div>
        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full" style={{ background: project.accent, boxShadow: `0 0 12px ${project.accent}` }} />
      </div>
      <h3 className="relative text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
      <p className="relative mt-3 flex-1 text-sm leading-6 text-white/55">{project.description}</p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => <span key={tech} className="rounded-md border border-white/[.08] bg-white/[.025] px-2.5 py-1.5 font-mono text-[10px] text-white/55">{tech}</span>)}
      </div>
      <details className="relative mt-5 border-t border-white/[.08] pt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold text-neon">
          Explore project details <ArrowUpRight size={14} className="transition group-open:rotate-45" />
        </summary>
        <ul className="mt-4 space-y-2 text-xs leading-5 text-white/55">
          {project.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-neon">↳</span>{detail}</li>)}
        </ul>
      </details>
      {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="absolute right-6 top-[4.25rem] text-white/35 hover:text-neon" aria-label={`Open ${project.title}`}><ArrowUpRight size={18} /></a>}
    </motion.article>
  );
}
