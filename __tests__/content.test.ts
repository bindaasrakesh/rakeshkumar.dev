import { describe, it, expect } from "vitest";
import {
  siteConfig,
  skills,
  impactItems,
  caseStudies,
  adminProjects,
  selectedProjects,
  archiveProjects,
  getHeaderLinks,
  getSocialLinks,
} from "@/content/site";

describe("Site Content", () => {
  it("has exact title", () => {
    expect(siteConfig.title).toBe("Lead Software Engineer (Frontend / React)");
  });

  it("has exactly 3 impact items", () => {
    expect(impactItems).toHaveLength(3);
  });

  it("has exactly 3 featured case studies", () => {
    expect(caseStudies).toHaveLength(3);
    expect(caseStudies.map((c) => c.id)).toEqual(["enerva", "booga", "couchbase"]);
  });

  it("has skills in correct order", () => {
    expect(skills).toEqual([
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ]);
  });

  it("includes Authvia supporting notes and performance-guided platforms", () => {
    const authvia = archiveProjects.find((p) => p.project === "Authvia");
    expect(authvia?.notes).toMatch(/coordinated with Vue developer/i);

    const spotivity = selectedProjects.find((p) => p.title === "Spotivity");
    expect(spotivity?.description).toMatch(/performance/i);
    expect(adminProjects.some((p) => p.title === "ADP" && p.highlight)).toBe(true);
  });

  it("exposes a resume path for download", () => {
    expect(siteConfig.resumePath).toBe("/RakeshKumar_LeadSoftwareEngineer_Resume.pdf");
  });
});

describe("getHeaderLinks", () => {
  it("includes in-page section links", () => {
    const links = getHeaderLinks();
    expect(links.find((link) => link.label === "Work")?.href).toBe("#work");
    expect(links.find((link) => link.label === "Impact")?.href).toBe("#impact");
    expect(links.find((link) => link.label === "About")?.href).toBe("#about");
    expect(links.find((link) => link.label === "Contact")?.href).toBe("#contact");
  });

  it("includes Resume when resumePath is set", () => {
    const links = getHeaderLinks();
    expect(links.find((link) => link.label === "Resume")?.href).toBe(
      siteConfig.resumePath
    );
  });
});

describe("getSocialLinks", () => {
  it("includes LinkedIn, GitHub, and Email links", () => {
    const links = getSocialLinks();
    expect(links.find((link) => link.label === "LinkedIn")).toBeDefined();
    expect(links.find((link) => link.label === "GitHub")).toBeDefined();
    expect(links.find((link) => link.label === "Email")).toBeDefined();
  });
});
