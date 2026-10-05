import Link from "next/link";
import type { ReactNode } from "react";
import { SecondaryPage } from "./SecondaryPage";

const legalLinks = [
  { href: "/privacy", label: "Privacy", id: "privacy" },
  { href: "/terms", label: "Terms", id: "terms" },
  { href: "/support", label: "Support", id: "support" },
] as const;

export type LegalPageId = (typeof legalLinks)[number]["id"];

type LegalPageProps = {
  title: string;
  current: LegalPageId;
  children: ReactNode;
};

export function LegalPage({ title, current, children }: LegalPageProps) {
  return (
    <SecondaryPage
      showClose
      maxWidthClassName="max-w-2xl"
      footer={
        <footer className="section-pad pb-16 text-center">
          <nav aria-label="Legal pages">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  {link.id === current ? (
                    <span
                      className="nav-link normal-case tracking-[0.1em] text-ink/35"
                      aria-current="page"
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="nav-link normal-case tracking-[0.1em]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-10 text-sm tracking-wide text-ink/40">
            © 2026 TripleVirgo, LLC
          </p>
        </footer>
      }
    >
      <main className="section-pad mx-auto max-w-2xl pb-8 pt-16 md:pt-20">
        <h1 className="font-serif text-[clamp(2.1rem,4vw,3.1rem)] leading-tight text-ink">
          {title}
        </h1>
        <div className="mt-12 space-y-7 text-base leading-[1.9] text-ink/60 md:mt-14">
          {children}
        </div>
      </main>
    </SecondaryPage>
  );
}
