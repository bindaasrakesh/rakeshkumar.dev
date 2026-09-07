export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
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

export interface ImpactItem {
  description: string;
}

export interface CaseStudy {
  title: string;
  problem: string;
  owned: string;
  outcome: string;
}

export const siteConfig: SiteConfig = {
  name: "Rakesh Kumar",
  title: "Lead Software Engineer (Frontend / React)",
  tagline:
    "Lead Frontend engineer building scalable React / Next.js platforms — architecture, mentoring, and measurable performance.",
  yearsOfExperience: "11+ years",
  email: "rakesh.jeet09@gmail.com",
  linkedin: "https://www.linkedin.com/in/bindaasrakesh/",
  github: "https://github.com/bindaasrakesh",
  location: "Noida, India",
  resumePath: null,
  accentColor: "#1d4ed8",
};

export const skills: Skill[] = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind" },
];

export const impactItems: ImpactItem[] = [
  {
    description:
      "Led a 3-5 engineer frontend workstream on project delivery: component architecture, PR standards, estimation, and collaboration with Java, .NET, Salesforce, and mobile teams.",
  },
  {
    description:
      "Trained 20+ engineers (2022-2024) on a structured path (HTML/CSS → JavaScript → React); cut new UI joiner ramp-up from ~1 month to ~2 weeks, raised code quality via reviews/standards, and upskilled React/Angular engineers on UI fundamentals to reduce dependency on dedicated UI support.",
  },
  {
    description:
      "Improved Google PageSpeed/Lighthouse on a Hippo CMS (Couchbase) homepage from ~10-15 to 90+ using code splitting, lazy loading, unused CSS/JS removal, image optimization, FCP/TBT-focused loading, and async/defer for non-critical CSS; applied the same playbook across 10+ WordPress, Hippo CMS, React, and Next.js experiences.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Energy & Water Monitoring Platform",
    problem:
      "Enterprise needed real-time utility monitoring across multiple sites with complex role-based access and integrated analytics.",
    owned:
      "Led a 5-engineer React (JavaScript) frontend for an enterprise utility-monitoring SPA with Redux, MUI, Azure AD (MSAL) auth, Power BI dashboards, Formik/Yup forms, and charts/tables; shipped multi-environment builds (dev/stage/prod).",
    outcome:
      "Delivered production-ready SPA with secure auth, dynamic dashboards, and complex form validation across multiple deployment environments.",
  },
  {
    title: "Event Booking Marketplace",
    problem:
      "Service booking platform needed end-to-end discover–book–pay–chat flows with real-time scheduling and payment integration.",
    owned:
      "Led a 6-engineer React (JavaScript) frontend for a service booking marketplace with AWS Amplify auth, Redux Toolkit, FullCalendar scheduling, Stripe payments, Firebase, and Twilio Conversations chat; Formik/Yup forms and i18n; shipped multi-env builds (dev/stage/prod) for discover–book–pay–chat flows.",
    outcome:
      "Shipped complete marketplace with authentication, calendar-based booking, integrated payments, real-time chat, and internationalization.",
  },
  {
    title: "Food Recipe Web App (Next.js)",
    problem:
      "Recipe platform needed SEO-optimized dynamic content for recipes and users while maintaining fast static pages.",
    owned:
      "Implemented SSR for dynamic recipe posts/user details and SSG for static pages (About, Contact); TypeScript-friendly React patterns and API-integrated content flows.",
    outcome:
      "Delivered SEO-friendly recipe platform with server-side rendering for dynamic content and static generation for performance-critical pages.",
  },
];

export interface HeaderLink {
  label: string;
  href: string;
}

export function getHeaderLinks(): HeaderLink[] {
  const links: HeaderLink[] = [];

  if (siteConfig.resumePath !== null) {
    links.push({ label: "Resume", href: siteConfig.resumePath });
  }

  links.push(
    { label: "LinkedIn", href: siteConfig.linkedin },
    { label: "GitHub", href: siteConfig.github },
    { label: "Email", href: `mailto:${siteConfig.email}` }
  );

  return links;
}
