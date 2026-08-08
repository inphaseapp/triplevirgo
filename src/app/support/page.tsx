import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get in touch with TripleVirgo for product questions, partnerships, or general support.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support · triplevirgo",
    url: "https://triplevirgo.com/support",
  },
};

export default function SupportPage() {
  return (
    <LegalPage title="Support">
      <p>
        We&apos;re here to help — thoughtfully and with care. For product
        questions, partnership inquiries, or general support, reach us at:
      </p>
      <p>
        <a
          href="mailto:connect@triplevirgo.com"
          className="font-serif text-xl text-ink underline decoration-ink/20 underline-offset-4 transition-opacity hover:opacity-70"
        >
          connect@triplevirgo.com
        </a>
      </p>
      <p>
        For app-specific support, please visit the support resources within
        InPhase or MyPhase when available. OurPhase support will be offered when
        the product launches.
      </p>
      <p className="pt-2 text-ink/45">
        We typically respond within a few business days.
      </p>
    </LegalPage>
  );
}
