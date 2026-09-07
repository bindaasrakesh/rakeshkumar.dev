import { getHeaderLinks } from "@/content/site";

export default function Header() {
  const links = getHeaderLinks();

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-neutral-200 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex gap-6 justify-center text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-neutral-700 hover:text-[var(--accent-color)] transition-colors"
                {...(link.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
