"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined,
  Github, Linkedin, Mail, MapPin, Sparkles, Terminal, Workflow, ExternalLink,
  FileText, Code2, Database, Layers3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import type { Project } from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import CommandDeck from "@/components/CommandDeck";
import SignalConsole from "@/components/SignalConsole";

const OrbScene = dynamic(() => import("@/components/OrbScene"), {
  ssr: false,
  loading: () => <div className="orb-fallback mx-auto h-[340px] w-full max-w-lg rounded-full sm:h-[440px]" />
});

const projects: Project[] = [
  {
    number: "01",
    title: "AI Resume Analyzer",
    category: "AI / NLP",
    description: "An AI-powered application that extracts resume information, identifies skills, and matches candidates with relevant job roles.",
    stack: ["Python", "NLP", "Next.js", "FastAPI"],
    accent: "#b7ff3c",
    details: [
      "Extracts and analyzes resume content and keywords.",
      "Built and deployed with a Vercel frontend and Render backend.",
      "Includes a resume upload and analysis interface."
    ]
  },
  {
    number: "02",
    title: "Disease Prediction Model",
    category: "Machine Learning",
    description: "A symptom-based prediction system that estimates probable diseases and includes a doctor recommendation feature.",
    stack: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression"],
    accent: "#c6ff72",
    details: [
      "Uses symptom and health-related data for prediction.",
      "Implements Random Forest and Logistic Regression.",
      "Recommends doctors based on predicted diseases and user-selected location."
    ]
  },
  {
    number: "03",
    title: "Forex Trading Strategy Analyzer",
    category: "Quant / ML",
    description: "An automated analysis system for 28 currency pairs using technical indicators, pattern recognition, and quantitative strategies.",
    stack: ["Python", "Machine Learning", "Backtesting", "Analytics"],
    accent: "#8cffb5",
    details: [
      "Classifies winning and losing trades using Logistic Regression and Random Forest.",
      "Includes backtesting, risk management, equity tracking, and drawdown analysis.",
      "Generates feature-importance reports to support strategy optimization."
    ]
  },
  {
    number: "04",
    title: "Rainfall Prediction Model",
    category: "Predictive Analytics",
    description: "A data analysis and regression project exploring rainfall patterns across states to estimate future rainfall trends.",
    stack: ["Python", "Linear Regression", "Pandas", "Visualization"],
    accent: "#a2d8ff",
    details: [
      "Uses Linear Regression and Multiple Regression.",
      "Visualizes data with histograms, bar charts, pie charts, and box plots.",
      "Assesses model performance with metrics including RMSE."
    ]
  },
  {
    number: "05",
    title: "Dashboard Development",
    category: "Internship Project",
    description: "An online dashboard developed during a one-month paid Dashboard Development Internship at Intuitiva.",
    stack: ["Data Analysis", "Dashboard UI", "Data Visualization"],
    accent: "#d2ff9c",
    details: [
      "Presented user-provided dataset information through a dashboard interface.",
      "Focused on data exploration and communicating insights.",
      "Internship: 26 June – 26 July 2026 · Remote · ₹12,000 stipend."
    ]
  }
];

const skillGroups = [
  { icon: Code2, title: "Programming", items: ["Python", "Java"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Machine Learning", "Predictive Modeling", "NLP", "Random Forest", "Regression"] },
  { icon: Database, title: "Data", items: ["Data Cleaning", "EDA", "Data Visualization", "Model Evaluation"] },
  { icon: Layers3, title: "Development", items: ["Full-Stack Development", "Next.js", "FastAPI", "Deployment"] }
];

const principles = [
  { num: "01", title: "Data before assumptions", text: "Explore the data, understand its limits, and make decisions grounded in evidence." },
  { num: "02", title: "Models with purpose", text: "Build machine learning systems around real use cases—not just metrics or demos." },
  { num: "03", title: "From model to product", text: "Turn analysis and prototypes into accessible interfaces people can actually use." }
];

export default function Home() {
  return (
    <main className="noise min-h-screen bg-ink">
      <Navbar />
      <div className="site-grid pointer-events-none absolute inset-x-0 top-0 h-[950px]" />

      <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pt-24">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/[.06] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-neon sm:text-xs">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-neon" /></span>
            AI / ML Developer · Portfolio 2026
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1 }} className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.065em] sm:text-7xl xl:text-[88px]">
            Building<br />
            <span className="text-neon">intelligence.</span><br />
            <span className="outline-text">Engineering</span><br />
            impact<span className="text-neon">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }} className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            I&apos;m Sujal Gupta, a Computer Science student specializing in AI & Machine Learning. I build data-driven applications, predictive models, and full-stack tools that turn ideas into useful products.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-neon px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-white">
              Explore projects <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-neon/50 hover:text-neon">
              <FileText size={15} /> View résumé
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/40">
            <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-neon" /> GLA University, Uttar Pradesh</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-2"><Sparkles size={14} className="text-neon" /> Curious by design</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .2 }} className="relative mx-auto w-full max-w-[600px]">
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/[.08]" />
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neon/[.08]" />
          <div className="absolute left-[12%] top-[24%] h-2 w-2 rounded-full bg-neon shadow-[0_0_20px_#b7ff3c]" />
          <div className="absolute right-[14%] top-[32%] h-1.5 w-1.5 rounded-full bg-white/70" />
          <div className="absolute bottom-[22%] right-[20%] h-2 w-2 rounded-full bg-neon/70 shadow-[0_0_18px_#b7ff3c]" />
          <OrbScene />
          <div className="absolute left-0 top-[18%] hidden rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl sm:block">
            <div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Core status</div>
            <div className="mt-1 flex items-center gap-2 text-xs text-neon"><span className="h-1.5 w-1.5 rounded-full bg-neon" /> Online / Learning</div>
          </div>
          <div className="absolute bottom-[15%] right-0 hidden rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl sm:block">
            <div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Current focus</div>
            <div className="mt-1 text-xs text-white/80">ML · Data · Product</div>
          </div>
        </motion.div>
        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/35 transition hover:text-neon lg:flex">Scroll to explore <ArrowDown size={13} /></a>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24"><Reveal><SignalConsole /></Reveal></section>

      <div className="neon-line mx-auto max-w-7xl opacity-30" />

      <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="section-label mb-5">01 / About me</div>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">I work at the intersection of <span className="text-neon">data, intelligence</span> and software.</h2>
            <div>
              <p className="text-lg leading-8 text-white/60">I&apos;m pursuing a B.Tech in Computer Science & Engineering (AI & ML) at GLA University. I enjoy exploring data, training predictive models, and building interfaces that make technical ideas easier to use.</p>
              <p className="mt-5 text-base leading-7 text-white/45">My work spans machine learning, data analysis, NLP, and full-stack development—from a symptom-based disease prediction system to an AI resume analyzer and quantitative trading analysis tools.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["8.00", "CPI · as listed on résumé"],
                  ["5", "Featured projects"],
                  ["AI + Web", "Core focus"]
                ].map(([value, label]) => <div key={label} className="glass rounded-xl p-4"><div className="text-xl font-semibold text-neon sm:text-2xl">{value}</div><div className="mt-2 text-[10px] leading-4 text-white/40">{label}</div></div>)}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="relative border-y border-white/[.05] bg-[#080b08]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="section-label mb-5">02 / Selected work</div>
                <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Projects with <span className="text-neon">purpose.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/45">A selection of machine learning, predictive analytics, and product development work. Open each card to explore more.</p>
            </div>
          </Reveal>
          <div className="mt-12"><ProjectFilter projects={projects} /></div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="section-label mb-5">03 / Toolkit</div>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Tools I use to <span className="text-neon">build.</span></h2>
            <p className="max-w-sm text-sm leading-6 text-white/45">A practical toolkit across programming, data, machine learning, and application development.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <Reveal key={group.title} delay={index * .06}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/[.07] text-neon"><Icon size={21} /></div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="rounded-full border border-white/[.09] px-3 py-2 text-xs text-white/55">{item}</span>)}
                </div>
              </div>
            </Reveal>;
          })}
        </div>
      </section>

      <section id="experience" className="relative border-y border-white/[.05] bg-[#080b08]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="section-label mb-5">04 / Experience & education</div>
            <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-6xl">The path so <span className="text-neon">far.</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div><div className="section-label">Internship / Remote</div><h3 className="mt-3 text-2xl font-semibold">Dashboard Development Intern</h3><p className="mt-1 text-neon">Intuitiva</p></div>
                  <span className="rounded-full border border-neon/25 bg-neon/[.07] px-3 py-1.5 font-mono text-[10px] text-neon">PAID</span>
                </div>
                <div className="mt-5 font-mono text-xs text-white/40">26 JUN 2026 — 26 JUL 2026</div>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-white/55">
                  <li className="flex gap-3"><span className="text-neon">↳</span>Completed a one-month paid internship focused on dashboard development and data analysis.</li>
                  <li className="flex gap-3"><span className="text-neon">↳</span>Developed and published an online dashboard based on a user-provided dataset.</li>
                  <li className="flex gap-3"><span className="text-neon">↳</span>Presented dataset information to support data exploration and insights.</li>
                </ul>
                <div className="mt-7 border-t border-white/[.08] pt-5 text-sm text-white/50">Stipend <span className="float-right font-semibold text-white">₹12,000</span></div>
              </article>
            </Reveal>
            <Reveal delay={.08}>
              <article className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/20 bg-neon/[.07] text-neon"><Workflow size={21} /></div>
                <div className="mt-6 section-label">Education</div>
                <h3 className="mt-3 text-2xl font-semibold">B.Tech — Computer Science & Engineering</h3>
                <p className="mt-2 text-neon">Artificial Intelligence & Machine Learning</p>
                <p className="mt-5 text-sm text-white/55">GLA University, Uttar Pradesh</p>
                <div className="mt-8 flex items-end justify-between border-t border-white/[.08] pt-5">
                  <div><div className="font-mono text-[10px] uppercase tracking-[.15em] text-white/35">Current status</div><div className="mt-2 text-sm text-white/75">Pursuing · 3rd Year</div></div>
                  <div className="text-right"><div className="font-mono text-[10px] uppercase tracking-[.15em] text-white/35">CPI</div><div className="mt-1 text-3xl font-semibold text-neon">8.00</div></div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="section-label mb-5">05 / Approach</div>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-.055em] sm:text-6xl">Good technology starts with <span className="text-neon">good questions.</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => <Reveal key={item.num} delay={index * .08}><div className="border-t border-neon/30 pt-5"><div className="font-mono text-xs text-neon">{item.num} / PRINCIPLE</div><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p></div></Reveal>)}
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/[.06] bg-[#080b08]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-neon/[.07] blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <div className="section-label mb-5">06 / Contact</div>
            <div className="grid gap-12 lg:grid-cols-[1fr_.65fr] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.06em] sm:text-7xl">Have a problem worth <span className="text-neon">solving?</span></h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/50">I&apos;m interested in AI/ML opportunities, collaborative projects, and building useful technology. Let&apos;s connect.</p>
                <a href="mailto:sujal17021@gmail.com?subject=Portfolio%20Contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-neon px-6 py-4 text-sm font-bold text-ink transition hover:bg-white">Start a conversation <ArrowUpRight size={16} /></a>
              </div>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">Reach me directly</div>
                <a href="mailto:sujal17021@gmail.com" className="mt-5 flex items-center gap-4 border-b border-white/[.08] pb-5 text-sm text-white/70 transition hover:text-neon"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neon"><Mail size={18} /></span><span><span className="block text-[10px] text-white/35">EMAIL</span><span className="mt-1 block">sujal17021@gmail.com</span></span><ArrowUpRight className="ml-auto" size={16} /></a>
                <a href="tel:+917011803857" className="mt-5 flex items-center gap-4 border-b border-white/[.08] pb-5 text-sm text-white/70 transition hover:text-neon"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neon"><Terminal size={18} /></span><span><span className="block text-[10px] text-white/35">PHONE</span><span className="mt-1 block">+91 70118 03857</span></span><ArrowUpRight className="ml-auto" size={16} /></a>
                <div className="mt-5 flex items-center gap-4 text-sm text-white/45"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neon"><MapPin size={18} /></span><span><span className="block text-[10px] text-white/35">EDUCATION</span><span className="mt-1 block">GLA University, Uttar Pradesh</span></span></div>
                <p className="mt-6 text-xs leading-5 text-white/30">Add your actual LinkedIn and GitHub profile URLs before publishing.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#home" className="font-semibold tracking-wide text-white/70">SUJAL GUPTA<span className="text-neon">.</span></a>
          <span>Designed for curiosity. Built for impact.</span>
          <span>© {new Date().getFullYear()} Sujal Gupta</span>
        </div>
      </footer>
      <CommandDeck />
    </main>
  );
}
