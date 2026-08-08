"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#constellation", label: "Apps" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#mission", label: "Mission" },
  { href: "#connect", label: "Connect" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.slice(1));
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = `#${id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNight = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-ink/8 bg-[rgba(239,234,227,0.72)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-pad mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="relative z-50 transition-opacity duration-500 hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <Logo
            id="nav"
            size={34}
            withWordmark
            variant={onNight ? "sacred" : "ink"}
          />
          <span className="sr-only">triplevirgo home</span>
        </a>

        <ul className="hidden items-center gap-10 lg:gap-12 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={onNight ? "nav-link-night" : "nav-link"}
                data-active={active === link.href ? "true" : "false"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full transition-all duration-500 ${
                onNight ? "bg-pearl" : "bg-ink"
              } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full transition-all duration-500 ${
                onNight ? "bg-pearl" : "bg-ink"
              } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[rgba(239,234,227,0.97)] backdrop-blur-2xl transition-opacity duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-serif text-3xl tracking-wide text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
