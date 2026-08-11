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
  { id: "faq", label: "FAQ" },
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

/** Core six for primary display; rest remain in companyColors for extended use. */
export const companyColorsCore = [
  companyColors[0], // Ink
  companyColors[2], // Dusk deep
  companyColors[5], // Dusk mist
  companyColors[7], // Pearl
  companyColors[8], // Rose gold
  companyColors[9], // Warm gold
] as const;

export type ColorSwatch = {
  name: string;
  hex: string;
  role?: string;
};

export type ProductPalette = {
  id: string;
  label: string;
  note: string;
  colors: ColorSwatch[];
};

/** Product brand palettes — from identity/products and InPhase brand board v1. */
export const productPalettes: ProductPalette[] = [
  {
    id: "myphase",
    label: "MyPhase",
    note: "White Moonstone and Rose Quartz — gemstone materials, not metallic finishes.",
    colors: [
      { name: "Moonstone pearl", hex: "#F7F3F0", role: "Primary light" },
      { name: "Soft ivory", hex: "#F0E6E2", role: "Warm ground" },
      { name: "Rose quartz", hex: "#E7B7BE", role: "Self-love accent" },
      { name: "Blush", hex: "#F4D8DF", role: "Soft pink" },
      { name: "Muted taupe", hex: "#9E8E93", role: "Secondary" },
      { name: "Night plate", hex: "#0E0D10", role: "Dark surfaces" },
    ],
  },
  {
    id: "inphase",
    label: "InPhase",
    note: "Brand board v1 — Cosmic Violet body, Solar Gold glow, Midnight plate.",
    colors: [
      { name: "Midnight", hex: "#080D1A", role: "Plate" },
      { name: "Cosmic Violet", hex: "#7B5CFF", role: "Primary" },
      { name: "Lunar Lilac", hex: "#B689FF", role: "Secondary" },
      { name: "Solar Gold", hex: "#FFB86B", role: "Inner glow" },
      { name: "Moonstone", hex: "#F5F5FA", role: "Light" },
    ],
  },
];

/** From identity/press/faq.md — keep in sync. */
export const pressFaq = [
  {
    question: "What is TripleVirgo?",
    answer:
      "TripleVirgo is a technology company that builds thoughtfully designed applications to help people better understand themselves and each other.",
  },
  {
    question: "Why the name TripleVirgo?",
    answer:
      "The name comes from the founder’s natal chart — Sun, Rising, and Venus in Virgo — a reminder that curiosity, thoughtful design, and careful observation can become acts of service.",
  },
  {
    question: "What products do you make?",
    answer:
      "MyPhase and InPhase are live. OurPhase is coming soon. Reveal is reserved in the brand constellation and is not currently marketed on triplevirgo.com.",
  },
  {
    question: "Are these separate companies?",
    answer:
      "No. They are luminous points in a single constellation under the TripleVirgo philosophy.",
  },
  {
    question: "What makes TripleVirgo different?",
    answer:
      "We don’t build technology to capture attention. We build technology to cultivate awareness.",
  },
  {
    question: "How can press or partners reach you?",
    answer: "Email connect@triplevirgo.com.",
  },
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
  href: string;
  filename: string;
  primary?: boolean;
};

export type DownloadGroup = {
  id: string;
  label: string;
  note?: string;
  items: PressDownload[];
};

/**
 * Curated downloads only — distinct files.
 * InPhase v0.9 “variations” that were byte-identical are excluded until real exports exist.
 */
export const downloadGroups: DownloadGroup[] = [
  {
    id: "triplevirgo",
    label: "triplevirgo",
    note: "Company mark — do not redraw or use as a watermark.",
    items: [
      {
        name: "Brand kit ZIP",
        description: "Master lockup, sacred mark, transparent, and press sizes.",
        href: "/brand/triplevirgo/triplevirgo-brand-kit.zip",
        filename: "triplevirgo-brand-kit.zip",
        primary: true,
      },
      {
        name: "Master lockup",
        description: "Full logo — sacred geometry, wordmark, tagline.",
        href: "/brand/triplevirgo/logo-master.jpg",
        filename: "TripleVirgo_Logo_MASTER.jpg",
      },
      {
        name: "Sacred mark (transparent)",
        description: "Mark only — avatars, favicons, small uses.",
        href: "/brand/triplevirgo/sacred-mark-transparent.png",
        filename: "TripleVirgo_SacredMark_Transparent.png",
      },
      {
        name: "Full logo (transparent)",
        description: "Background-removed full logo.",
        href: "/brand/triplevirgo/full-logo-transparent.png",
        filename: "TripleVirgo_FullLogo_Transparent.png",
      },
      {
        name: "Press 3000px",
        description: "High-resolution navy full logo.",
        href: "/brand/triplevirgo/full-logo-navy-3000.png",
        filename: "TripleVirgo_FullLogo_Navy_3000px.png",
      },
    ],
  },
  {
    id: "myphase",
    label: "MyPhase",
    note: "Gemstone crescents — do not recolor or separate the moons.",
    items: [
      {
        name: "Brand kit ZIP",
        description: "Emblem, lockups, avatar, and brand presentation.",
        href: "/brand/myphase/myphase-brand-kit.zip",
        filename: "myphase-brand-kit.zip",
        primary: true,
      },
      {
        name: "Emblem (master)",
        description: "Standalone gemstone crescents.",
        href: "/brand/myphase/emblem-master.png",
        filename: "MyPhase_Emblem_MASTER.png",
      },
      {
        name: "Lockup — dark",
        description: "Wordmark + tagline on charcoal.",
        href: "/brand/myphase/lockup-dark.png",
        filename: "MyPhase_Logo_Lockup_Dark.png",
      },
      {
        name: "Lockup — light",
        description: "Wordmark + tagline on pearl.",
        href: "/brand/myphase/lockup-light.png",
        filename: "MyPhase_Logo_Lockup_Light.png",
      },
      {
        name: "Brand presentation",
        description: "Materials, palette, and approved treatments.",
        href: "/brand/myphase/brand-presentation.png",
        filename: "MyPhase_Brand_Presentation_MASTER.png",
      },
    ],
  },
  {
    id: "inphase",
    label: "InPhase",
    note: "Hero assets are the Final app icon and Brand Board v1. Additional v0.9 size sets are in the ZIP.",
    items: [
      {
        name: "Brand kit ZIP",
        description:
          "Final icon, Brand Board v1, app icons, favicons, and wallpapers.",
        href: "/brand/inphase/inphase-brand-kit.zip",
        filename: "inphase-brand-kit.zip",
        primary: true,
      },
      {
        name: "App icon (Final)",
        description: "Official 1024×1024 — Cosmic Violet & Solar Gold.",
        href: "/brand/inphase/app-icon-1024.png",
        filename: "InPhase_App_Icon_1024_Final.png",
      },
      {
        name: "Brand board v1",
        description: "Identity sheet — palette, type, lockups, usage.",
        href: "/brand/inphase/brand-board.png",
        filename: "InPhase_Brand_Board_v1.png",
      },
      {
        name: "App logo",
        description: "Square logo export for press.",
        href: "/brand/inphase/app-logo.jpg",
        filename: "InPhase_App_LOGO.jpg",
      },
      {
        name: "Wallpaper — desktop",
        description: "Desktop wallpaper from the asset pack.",
        href: "/brand/inphase/wallpapers/Desktop.png",
        filename: "InPhase_Wallpaper_Desktop.png",
      },
    ],
  },
];
