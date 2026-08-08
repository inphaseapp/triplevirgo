import { BrandDivider } from "@/components/BrandEcho";
import { Connect } from "@/components/Connect";
import { Constellation } from "@/components/Constellation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Nav } from "@/components/Nav";
import { Philosophy } from "@/components/Philosophy";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TripleVirgo",
  legalName: "TripleVirgo, LLC",
  url: "https://triplevirgo.com",
  email: "connect@triplevirgo.com",
  description:
    "Building technology that inspires understanding. Thoughtfully designed apps for reflection, relationships, and self-awareness.",
  sameAs: ["https://myphaseapp.com", "https://inphaseapp.com"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-dusk-pearl focus:px-4 focus:py-2 focus:text-ink focus:shadow-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <BrandDivider className="py-2" />
        <Constellation />
        <BrandDivider className="py-2" />
        <Philosophy />
        <BrandDivider className="py-2" />
        <Mission />
        <BrandDivider className="py-2" />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
