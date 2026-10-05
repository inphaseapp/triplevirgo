import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TripleVirgo handles information when you visit our site or contact us.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy · triplevirgo",
    url: "https://triplevirgo.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" current="privacy">
      <p>Last updated: August 7, 2026</p>
      <p>
        TripleVirgo, LLC (&ldquo;TripleVirgo,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) respects your privacy. This policy describes how we
        handle information when you visit triplevirgo.com or contact us.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Information we collect</h2>
      <p>
        This website does not use a newsletter signup or account system. If you
        email us, we receive only what you choose to include in your message —
        typically your email address and the content of your note.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">How we use information</h2>
      <p>
        We use correspondence to respond to your inquiry. We do not sell personal
        information. Standard web server or hosting logs may record technical
        details such as IP address and browser type in the ordinary course of
        operating the site.
      </p>
      <h2 className="pt-4 font-serif text-2xl text-ink">Contact</h2>
      <p>
        Questions about this policy may be sent to{" "}
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
