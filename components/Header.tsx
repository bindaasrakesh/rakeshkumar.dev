"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { getHeaderLinks, siteConfig } from "@/content/site";
import { scrollToSection } from "@/components/ScrollToLink";

const SECTION_IDS = ["work", "impact", "about", "contact"] as const;

export default function Header() {
  const links = getHeaderLinks().filter((link) => link.label !== "Resume");
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#work");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onHash = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    onHash();
    window.addEventListener("hashchange", onHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const id = href.slice(1);
    setActiveHref(href);
    setOpen(false);
    scrollToSection(id);
  };

  const linkClass = (href: string) =>
    `relative pb-1 transition-colors ${
      activeHref === href
        ? "text-accent-deep after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:bg-accent"
        : "text-[#3d4249] hover:text-accent-deep"
    }`;

  return (
    <header
      data-site-header
      className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-4 md:px-10 lg:px-16">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={(event) => {
            event.preventDefault();
            setActiveHref("#work");
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "#top");
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-sm font-semibold tracking-wide text-paper">
            RK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
            <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-2 sm:block">
              Frontend / React · Noida IN
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em] md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={activeHref === link.href ? "true" : undefined}
                className={linkClass(link.href)}
                onClick={(event) => onNavClick(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {siteConfig.resumePath && (
            <a
              href={siteConfig.resumePath}
              className="hidden items-center gap-2 rounded-[5px] bg-ink px-4 py-2.5 text-sm font-medium text-paper sm:inline-flex"
            >
              Download Resume
              <span className="font-mono text-[10px] text-[oklch(0.72_0.10_193)]">PDF</span>
            </a>
          )}
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-[1.5px] w-5 bg-ink" />
            <span className="block h-[1.5px] w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.14em]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={activeHref === link.href ? "true" : undefined}
                  className={linkClass(link.href)}
                  onClick={(event) => onNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {siteConfig.resumePath && (
              <li>
                <a href={siteConfig.resumePath} className="font-semibold text-ink">
                  Download Resume
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
