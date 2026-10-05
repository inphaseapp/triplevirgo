import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the TripleVirgo website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms · triplevirgo",
    url: "https://triplevirgo.com/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms" current="terms">
      <p>Last updated: August 7, 2026</p>
      <p>
        By accessing triplevirgo.com, you agree to these terms. The site is
        provided for informational purposes about TripleVirgo and its products.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Use of the site</h2>
      <p>
        You may browse this website for personal, non-commercial purposes. You
        may not misuse the site, attempt unauthorized access, or use content in
        a way that misrepresents TripleVirgo.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Intellectual property</h2>
      <p>
        All branding, text, and design on this site are owned by TripleVirgo,
        LLC unless otherwise noted. All rights reserved.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Contact</h2>
      <p>
        For questions, write to{" "}
        <a
          href="mailto:connect@triplevirgo.com"
          className="text-ink underline decoration-ink/20 underline-offset-4 transition-opacity hover:opacity-70"
        >
          connect@triplevirgo.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
