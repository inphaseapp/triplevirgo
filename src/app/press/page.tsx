import type { Metadata } from "next";
import { PressKit } from "@/components/PressKit";

export const metadata: Metadata = {
  title: "Brand Resources",
  description:
    "A central resource for media, partners, designers, developers, and collaborators — company facts, founder story, products, brand assets, and contact.",
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Brand Resources · triplevirgo",
    description:
      "A central resource for media, partners, designers, developers, and collaborators.",
    url: "https://triplevirgo.com/press",
  },
  twitter: {
    title: "Brand Resources · triplevirgo",
    description:
      "A central resource for media, partners, designers, developers, and collaborators.",
  },
};

export default function PressPage() {
  return <PressKit />;
}
