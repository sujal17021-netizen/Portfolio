"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Sujal Gupta home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon/40 bg-neon/10 font-mono text-sm font-bold text-neon transition group-hover:bg-neon group-hover:text-ink">SG</span>
          <span className="text-sm font-semibold tracking-wide">SUJAL GUPTA<span className="ml-2 text-neon">.</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/60 transition hover:text-neon">{link.label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-neon px-4 py-2 text-xs font-bold text-ink transition hover:bg-white">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-white/70 hover:text-neon">{link.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
