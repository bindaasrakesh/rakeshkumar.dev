"use client";

import type { ComponentPropsWithoutRef } from "react";

function getHeaderOffset() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return (header?.offsetHeight ?? 72) + 12;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}

type ScrollToLinkProps = ComponentPropsWithoutRef<"a"> & {
  targetId: string;
};

export default function ScrollToLink({
  targetId,
  onClick,
  href,
  ...props
}: ScrollToLinkProps) {
  return (
    <a
      href={href ?? `#${targetId}`}
      onClick={(event) => {
        event.preventDefault();
        scrollToSection(targetId);
        onClick?.(event);
      }}
      {...props}
    />
  );
}
