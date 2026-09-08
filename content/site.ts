export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  support: string;
  yearsOfExperience: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  resumePath: string | null;
  accentColor: string;
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ImpactItem {
  value: string;
  description: string;
  caption?: string;
}

export interface CaseStudy {
  id: string;
  label: string;
  title: string;
  problem: string;
  owned: string;
  outcome: string;
  tech: string[];
  imageLabel: string;
}

export interface CompactProject {
  title: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

export interface ArchiveProject {
  project: string;
  role: string;
  stack: string;
  notes: string;
}

export interface HeaderLink {
  label: string;
  href: string;
}

export const siteConfig: SiteConfig = {
  name: "Rakesh Kumar",
  title: "Lead Software Engineer (Frontend / React)",
  tagline:
    "Lead Frontend engineer building scalable React / Next.js platforms — architecture, mentoring, and measurable performance.",
  headline: "I build and ship scalable React & Next.js platforms that enterprises run on.",
  support:
    "Eleven years leading frontend workstreams — architecture, design systems, and performance work that takes Lighthouse from the teens to 90+.",
  yearsOfExperience: "11+ years",
  email: "rakesh.jeet09@gmail.com",
  linkedin: "https://www.linkedin.com/in/bindaasrakesh/",
  github: "https://github.com/bindaasrakesh",
  location: "Noida, India",
  resumePath: "/RakeshKumar_LeadSoftwareEngineer_Resume.pdf",
  accentColor: "#2a9a8f",
};

export const skills: Skill[] = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Architecture",
    items: ["Redux Toolkit", "React Query", "GraphQL", "Design systems"],
  },
  {
    label: "Quality",
    items: ["Performance / Lighthouse", "Accessibility", "Testing / Storybook", "Mentoring"],
  },
];

export const impactItems: ImpactItem[] = [
  {
    value: "3–5",
    description: "Engineers per frontend workstream led — planning, reviews, and delivery.",
  },
  {
    value: "20+",
    description: "Engineers mentored; ramp-up ~1 month → ~2 weeks.",
  },
  {
    value: "90+",
    description: "Lighthouse / PageSpeed, up from ~10–15.",
    caption: "From the Couchbase / Hippo CMS performance pass →",
  },
];

/** Featured case studies (homepage primary stories). */
export const caseStudies: CaseStudy[] = [
  {
    id: "enerva",
    label: "Case 01 · Enterprise",
    title: "Enerva — Energy & Water Monitoring Platform",
    problem: "Utility data spread across many sites with no single live view.",
    owned:
      "Frontend architecture, role-based access, Power BI embedding, multi-env delivery.",
    outcome: "Reporting cycle cut from days to a live dashboard.",
    tech: ["React", "Redux", "MUI", "Azure AD", "Power BI"],
    imageLabel: "Site-level consumption dashboard",
  },
  {
    id: "booga",
    label: "Case 02 · Marketplace",
    title: "Booga — Event Booking Marketplace",
    problem: "Discovery, payments, and communications lived in silos.",
    owned:
      "Booking flow, state architecture, Stripe + Twilio integration, multi-env delivery.",
    outcome: "One flow from search to ticket; smoother checkout path.",
    tech: ["React", "Redux Toolkit", "AWS Amplify", "Stripe", "Firebase", "Twilio"],
    imageLabel: "Booking & checkout flow",
  },
  {
    id: "couchbase",
    label: "Case 03 · Performance",
    title: "Couchbase / Hippo CMS Performance",
    problem:
      "Homepage PageSpeed / Lighthouse stuck around 10–15 — heavy CSS/JS, weak FCP/TBT, unoptimised images.",
    owned:
      "Performance pass — code splitting, lazy loading, unused CSS/JS removal, image optimization, FCP/TBT-focused loading.",
    outcome: "Homepage Lighthouse / PageSpeed lifted from ~10–15 to 90+.",
    tech: ["Performance", "Lighthouse", "PageSpeed", "Hippo CMS", "Couchbase"],
    imageLabel: "Before / after performance",
  },
];

export const adminProjects: CompactProject[] = [
  {
    title: "BluXinga & BluTango",
    description: "React admin for mobile-product operations.",
    tech: ["UI", "React"],
  },
  {
    title: "Votr Admin",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
  {
    title: "Xponent Admin",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
  {
    title: "Hyst Admin",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
  {
    title: "GFG Admin",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
  {
    title: "TFO Wealthfor",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
  {
    title: "ADP",
    description: "React admin + Storybook component system.",
    tech: ["React", "Storybook"],
    highlight: true,
  },
  {
    title: "Glassbox Admin",
    description: "React admin for mobile-product operations.",
    tech: ["React"],
  },
];

export const selectedProjects: CompactProject[] = [
  {
    title: "Food Recipe Web App",
    description: "Server-rendered recipe browsing with a typed data layer.",
    tech: ["Next.js SSR/SSG", "TypeScript"],
  },
  {
    title: "Busicard",
    description: "Digital business-card product UI.",
    tech: ["UI", "React"],
  },
  {
    title: "Spotivity",
    description: "Built the UI and guided the frontend developer on site-speed / performance fixes.",
    tech: ["UI", "React", "Performance"],
  },
  {
    title: "guardianvets",
    description: "Veterinary triage service web app.",
    tech: ["React"],
  },
  {
    title: "Medical-Shipment",
    description: "Built the UI and guided the frontend developer on site-speed / performance fixes.",
    tech: ["UI", "React", "Performance"],
  },
  {
    title: "SKF-cpr",
    description: "Built the UI and guided the frontend developer on site-speed / performance fixes.",
    tech: ["UI", "React", "Performance"],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    project: "Algoworks new website",
    role: "UI + Performance",
    stack: "HTML · CSS",
    notes: "Marketing site rebuild + site speed work, 2016",
  },
  {
    project: "brainboxol",
    role: "UI",
    stack: "HTML · CSS",
    notes: "Learning platform interface",
  },
  {
    project: "Avala",
    role: "UI + CMS",
    stack: "HTML · WordPress",
    notes: "Themed content site",
  },
  {
    project: "Mecan",
    role: "UI + Frontend",
    stack: "Angular",
    notes: "Supporting-stack delivery",
  },
  {
    project: "Authvia",
    role: "UI + Frontend",
    stack: "JavaScript ES6 · Vue",
    notes: "Built full payments-messaging UI · responsive · coordinated with Vue developer",
  },
];

export const aboutCopy =
  "I lead frontend teams the way I write code: pick the boring architecture, make the fast path the default, and leave the codebase easier to join than I found it. Based in Noida, working with distributed product teams. Core stack: React & Next.js — also shipped production UI in Angular and Vue when projects required it.";

export function getHeaderLinks(): HeaderLink[] {
  const links: HeaderLink[] = [
    { label: "Work", href: "#work" },
    { label: "Impact", href: "#impact" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  if (siteConfig.resumePath !== null) {
    links.push({ label: "Resume", href: siteConfig.resumePath });
  }

  return links;
}

export function getSocialLinks(): HeaderLink[] {
  return [
    { label: "LinkedIn", href: siteConfig.linkedin },
    { label: "GitHub", href: siteConfig.github },
    { label: "Email", href: `mailto:${siteConfig.email}` },
  ];
}
