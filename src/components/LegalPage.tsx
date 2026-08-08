import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="cosmic-bg min-h-screen">
      <header className="section-pad mx-auto flex h-[5.25rem] max-w-2xl items-center justify-between">
        <Link href="/" className="transition-opacity duration-500 hover:opacity-90">
          <Logo id="legal" size={32} withWordmark />
          <span className="sr-only">triplevirgo home</span>
        </Link>
        <Link href="/" className="nav-link">
          Home
        </Link>
      </header>

      <main className="section-pad mx-auto max-w-2xl pb-32 pt-16 md:pt-20">
        <h1 className="font-serif text-[clamp(2.1rem,4vw,3.1rem)] leading-tight text-ink">
          {title}
        </h1>
        <div className="mt-12 space-y-7 text-base leading-[1.9] text-ink/60 md:mt-14">
          {children}
        </div>
      </main>

      <footer className="section-pad pb-16 text-center text-sm tracking-wide text-ink/40">
        © 2026 TripleVirgo, LLC
      </footer>
    </div>
  );
}
