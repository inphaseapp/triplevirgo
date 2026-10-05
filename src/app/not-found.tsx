import type { Metadata } from "next";
import { SecondaryPage } from "@/components/SecondaryPage";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SecondaryPage
      showClose
      maxWidthClassName="max-w-xl"
      footer={
        <footer className="section-pad pb-16 text-center text-sm tracking-wide text-ink/40">
          © 2026 TripleVirgo, LLC
        </footer>
      }
    >
      <main className="section-pad mx-auto max-w-xl pb-8 pt-16 md:pt-24">
        <p className="section-label">404</p>
        <h1 className="mt-6 font-serif text-[clamp(2.2rem,4.5vw,3.25rem)] leading-[1.12] tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-8 text-base leading-[1.9] text-ink/60 md:text-[1.05rem] md:leading-[2.05]">
          This path isn&apos;t part of the site.
        </p>
      </main>
    </SecondaryPage>
  );
}
