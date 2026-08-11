/**
 * Press kit content — sourced from identity/ canonical documents.
 * Update identity docs first, then sync here.
 */

export const pressSections = [
  { id: "company", label: "Company" },
  { id: "founder", label: "Founder" },
  { id: "products", label: "Products" },
  { id: "logos", label: "Logos" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "voice", label: "Brand Voice" },
  { id: "downloads", label: "Downloads" },
  { id: "contact", label: "Contact" },
] as const;

export const companyFacts = {
  legalName: "TripleVirgo, LLC",
  brandName: "triplevirgo",
  website: "https://triplevirgo.com",
  contact: "connect@triplevirgo.com",
  tagline: "Building technology that inspires understanding.",
  heroLine: "Live in greater alignment.",
  coreQuestion:
    "How can technology help us better understand ourselves and each other?",
  mantra: "The background whispers. The details shimmer. The logo sings.",
  boilerplateShort:
    "TripleVirgo creates thoughtfully designed technology that helps people better understand themselves and each other. Through apps like MyPhase and InPhase, the company builds tools for reflection, relationships, and life’s natural rhythms.",
  boilerplateLong:
    "TripleVirgo, LLC is a technology company building applications that cultivate awareness rather than capture attention. Founded on the question “How can technology help us better understand ourselves and each other?”, TripleVirgo develops a constellation of products — including MyPhase and InPhase — designed with presence, compassion, and intention. The company believes deeper understanding creates stronger relationships with ourselves, each other, and the world around us.",
  northStar: [
    "We don’t build technology to capture attention.",
    "We build technology to cultivate awareness.",
    "Every product we create should leave people feeling more connected to themselves than when they first opened it.",
  ],
  mission: [
    "We believe understanding creates compassion.",
    "Compassion creates connection.",
    "Connection creates a better world.",
  ],
  missionPath: [
    "Understanding",
    "Reflection",
    "Growth",
    "Connection",
    "Love",
  ],
} as const;

export const founderCopy = {
  opening: "Every meaningful company begins with a question.",
  question:
    "How can technology help us better understand ourselves and each other?",
  paragraphs: [
    "TripleVirgo was born from the idea that deeper understanding creates stronger relationships — with ourselves, with each other, and with the world around us.",
    "The name comes from our founder’s natal chart — Sun, Rising, and Venus in Virgo — a reminder that curiosity, thoughtful design, and careful observation can become acts of service.",
    "Today, TripleVirgo builds technology that helps people better understand themselves and one another.",
  ],
  storyPath: "/triplevirgo",
} as const;

export const products = [
  {
    name: "MyPhase",
    role: "Understanding yourself",
    lead: "Personal guidance for every phase of your cycle.",
    description:
      "Understand your body’s natural rhythm and honor what each phase is asking of you.",
    href: "https://myphaseapp.com",
    status: "Live" as const,
  },
  {
    name: "InPhase",
    role: "Understanding relationships",
    lead: "Relationship guidance for men.",
    description:
      "Better understand her rhythm so you can show up with greater connection and confidence.",
    href: "https://inphaseapp.com",
    status: "Live" as const,
  },
  {
    name: "OurPhase",
    role: "Understanding each other",
    lead: "Shared guidance for every relationship.",
    description: "Helping two people better understand each other.",
    href: undefined,
    status: "Coming soon" as const,
  },
] as const;

export const constellationIntro =
  "Many products. One philosophy. Each TripleVirgo application is thoughtfully designed to illuminate a different part of the human experience. Together, they form a constellation of tools that inspire greater clarity, connection, and growth.";

export const companyColors = [
  { name: "Ink", hex: "#1A2038", role: "Type & mark on dusk" },
  { name: "Ink soft", hex: "#2C3450", role: "Secondary ink" },
  { name: "Dusk deep", hex: "#4A5678", role: "Deep dusk sky" },
  { name: "Dusk mid", hex: "#7D87A8", role: "Mid dusk" },
  { name: "Dusk soft", hex: "#B4B9D0", role: "Soft dusk" },
  { name: "Dusk mist", hex: "#DDD9E8", role: "Mist" },
  { name: "Dusk pearl", hex: "#F0EBE4", role: "Pearl ground" },
  { name: "Pearl", hex: "#F7F3EE", role: "Type on night" },
  { name: "Rose gold", hex: "#B88972", role: "Quiet accent" },
  { name: "Warm gold", hex: "#C4A07A", role: "Guiding stars" },
  { name: "Lilac", hex: "#9A8FB8", role: "Soft secondary" },
  { name: "Silver", hex: "#8A90A8", role: "Muted metal" },
] as const;

export const voiceDo = [
  "Thoughtful, present, compassionate",
  "Clarity and intention",
  "Reflection, curiosity, wisdom",
  "Inspire — not prescribe",
] as const;

export const voiceDont = [
  "Hype, urgency, FOMO",
  "Cluttered claims or feature laundry lists",
  "Distraction, judgment, noise",
  "Transactional or generic suggestion tone",
] as const;

export const typography = {
  serif: {
    name: "Cormorant Garamond",
    role: "Display & editorial",
    specimen: "Live in greater alignment.",
  },
  sans: {
    name: "Outfit",
    role: "Body & interface",
    specimen:
      "Thoughtfully designed applications for relationships, personal growth, and life’s natural rhythms.",
  },
} as const;

export type PressDownload = {
  name: string;
  description: string;
  href?: string;
  filename?: string;
  available: boolean;
};

export const downloads: PressDownload[] = [
  {
    name: "triplevirgo master lockup",
    description:
      "Approved full logo — sacred geometry, wordmark, and tagline. Source of truth.",
    href: "/brand/triplevirgo/logo-master.jpg",
    filename: "TripleVirgo_Logo_MASTER.jpg",
    available: true,
  },
  {
    name: "triplevirgo full logo (transparent)",
    description: "Background-removed full logo for flexible layouts.",
    href: "/brand/triplevirgo/full-logo-transparent.png",
    filename: "TripleVirgo_FullLogo_Transparent.png",
    available: true,
  },
  {
    name: "triplevirgo sacred mark (transparent)",
    description: "Mark only — for avatars, favicons, and small uses.",
    href: "/brand/triplevirgo/sacred-mark-transparent.png",
    filename: "TripleVirgo_SacredMark_Transparent.png",
    available: true,
  },
  {
    name: "triplevirgo full logo — press 3000px",
    description: "High-resolution navy full logo for print and press.",
    href: "/brand/triplevirgo/full-logo-navy-3000.png",
    filename: "TripleVirgo_FullLogo_Navy_3000px.png",
    available: true,
  },
  {
    name: "triplevirgo sacred mark — navy 1024",
    description: "Square sacred mark on navy for web and social.",
    href: "/brand/triplevirgo/sacred-mark-navy-1024.png",
    filename: "TripleVirgo_SacredMark_Navy_1024x1024.png",
    available: true,
  },
  {
    name: "Full press kit ZIP",
    description: "Complete company + product package — forthcoming.",
    available: false,
  },
  {
    name: "MyPhase emblem (master)",
    description: "Standalone gemstone crescents — visual source of truth.",
    href: "/brand/myphase/emblem-master.png",
    filename: "MyPhase_Emblem_MASTER.png",
    available: true,
  },
  {
    name: "MyPhase emblem (transparent)",
    description: "Transparent crescent mark for flexible layouts.",
    href: "/brand/myphase/emblem-transparent.png",
    filename: "MyPhase_Emblem_Transparent_MASTER.png",
    available: true,
  },
  {
    name: "MyPhase lockup — dark",
    description:
      "Wordmark + “Know yourself. Love yourself.” on charcoal.",
    href: "/brand/myphase/lockup-dark.png",
    filename: "MyPhase_Logo_Lockup_Dark.png",
    available: true,
  },
  {
    name: "MyPhase lockup — light",
    description:
      "Wordmark + tagline on pearl — for light surfaces.",
    href: "/brand/myphase/lockup-light.png",
    filename: "MyPhase_Logo_Lockup_Light.png",
    available: true,
  },
  {
    name: "MyPhase avatar (charcoal)",
    description: "1024×1024 square emblem on charcoal for social / app use.",
    href: "/brand/myphase/avatar-charcoal-1024.png",
    filename: "MyPhase_Avatar_Charcoal_1024x1024.png",
    available: true,
  },
  {
    name: "MyPhase brand presentation",
    description: "Approved materials, palette, and lockup treatments.",
    href: "/brand/myphase/brand-presentation.png",
    filename: "MyPhase_Brand_Presentation_MASTER.png",
    available: true,
  },
  {
    name: "InPhase app icon",
    description:
      "Official 1024×1024 mark — Cosmic Violet crescents, Solar Gold glow.",
    href: "/brand/inphase/app-icon-1024.png",
    filename: "InPhase_App_Icon_1024_Final.png",
    available: true,
  },
  {
    name: "InPhase app logo",
    description: "Square logo export for press and partners.",
    href: "/brand/inphase/app-logo.jpg",
    filename: "InPhase_App_LOGO.jpg",
    available: true,
  },
  {
    name: "InPhase brand board v1",
    description:
      "Full identity sheet — palette, typography, lockups, and usage.",
    href: "/brand/inphase/brand-board.png",
    filename: "InPhase_Brand_Board_v1.png",
    available: true,
  },
  {
    name: "OurPhase mark",
    description: "Official mark when the product launches.",
    available: false,
  },
  {
    name: "Color palette board",
    description: "Printable dusk & accent swatches.",
    available: false,
  },
];
