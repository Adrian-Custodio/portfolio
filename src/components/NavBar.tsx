"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false); // adds border once page scrolls
  const [section, setSection] = useState<string>(""); // section currently on screen
  const [lastPath, setLastPath] = useState(pathname);
  const active = pathname === "/" ? section : pathname;

  // Close the mobile menu after navigating
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever home section sits mid-screen
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = navLinks.map((l) => l.href.split("#")[1]).filter(Boolean) as string[];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setSection(`/#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5 font-mono text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border-strong bg-surface-2 text-accent transition-colors group-hover:border-accent">
            {profile.initials}
          </span>
          <span className="text-foreground">
            adrian<span className="text-muted">@custodio</span>
            <span className="cursor-blink text-accent">_</span>
          </span>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 text-sm lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 transition-colors ${
                    isActive ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent-strong lg:inline-flex"
        >
          Get in touch
        </a>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* mobile menu panel */}
      {open && (
        <div className="border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-3 text-foreground"
                >
                  {link.label}
                  <span className="font-mono text-xs text-subtle">-&gt;</span>
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-background"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
