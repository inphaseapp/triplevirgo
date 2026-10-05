import type { ReactNode } from "react";
import { SecondaryPage } from "./SecondaryPage";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <SecondaryPage
      showClose
      maxWidthClassName="max-w-2xl"
      footer={
        <footer className="section-pad pb-16 text-center text-sm tracking-wide text-ink/40">
          © 2026 TripleVirgo, LLC
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
