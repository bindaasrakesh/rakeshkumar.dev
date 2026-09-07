import { describe, it, expect } from "vitest";
import {
  siteConfig,
  skills,
  impactItems,
  caseStudies,
  getHeaderLinks,
} from "@/content/site";

describe("Site Content", () => {
  it("has exact title", () => {
    expect(siteConfig.title).toBe("Lead Software Engineer (Frontend / React)");
  });

  it("has exactly 3 impact items", () => {
    expect(impactItems).toHaveLength(3);
  });

  it("has exactly 3 case studies", () => {
    expect(caseStudies).toHaveLength(3);
  });

  it("has skills in correct order", () => {
    expect(skills).toEqual([
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ]);
  });
});

describe("getHeaderLinks", () => {
  it("omits resume when resumePath is null", () => {
    const links = getHeaderLinks();
    const resumeLink = links.find((link) => link.label === "Resume");
    expect(resumeLink).toBeUndefined();
  });

  it("never returns links with # href", () => {
    const links = getHeaderLinks();
    links.forEach((link) => {
      expect(link.href).not.toBe("#");
      expect(link.href).not.toContain("#");
    });
  });

  it("includes LinkedIn, GitHub, and Email links", () => {
    const links = getHeaderLinks();
    expect(links.find((link) => link.label === "LinkedIn")).toBeDefined();
    expect(links.find((link) => link.label === "GitHub")).toBeDefined();
    expect(links.find((link) => link.label === "Email")).toBeDefined();
  });
});
