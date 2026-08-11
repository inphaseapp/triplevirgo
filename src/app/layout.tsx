import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteDescription =
  "TripleVirgo creates thoughtfully designed technology that helps people better understand themselves and each other.";

export const metadata: Metadata = {
  metadataBase: new URL("https://triplevirgo.com"),
  title: {
    default: "triplevirgo — Building technology that inspires understanding",
    template: "%s · triplevirgo",
  },
  description: siteDescription,
  applicationName: "triplevirgo",
  keywords: [
    "TripleVirgo",
    "triplevirgo",
    "InPhase",
    "MyPhase",
    "OurPhase",
    "self-awareness",
    "relationships",
    "emotional intelligence",
    "cycle awareness",
    "personal growth",
  ],
  authors: [{ name: "TripleVirgo, LLC", url: "https://triplevirgo.com" }],
  creator: "TripleVirgo, LLC",
  publisher: "TripleVirgo, LLC",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "triplevirgo — Building technology that inspires understanding",
    description:
      "Thoughtfully designed apps for reflection, relationships, and self-awareness.",
    url: "https://triplevirgo.com",
    siteName: "triplevirgo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "triplevirgo — Building technology that inspires understanding",
    description: "Building technology that inspires understanding.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "triplevirgo",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
