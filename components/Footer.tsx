import { getSocialLinks, siteConfig } from "@/content/site";

export default function Footer() {
  const social = getSocialLinks();

  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-5 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-end md:gap-14">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[oklch(0.78_0.08_193)]">
              07 — Contact
            </span>
            <h2 className="text-4xl font-medium tracking-tight md:text-[3.4rem] md:leading-none">
              Let&apos;s build something
              <br />
              fast and durable.
            </h2>
          </div>

          <div className="flex flex-col gap-3.5 text-base">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between border-b border-paper/20 pb-3 transition-colors hover:text-[oklch(0.78_0.08_193)]"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span>
                  {link.label === "Email"
                    ? siteConfig.email
                    : link.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9aa0a8]">
                  {link.label}
                </span>
              </a>
            ))}

            {siteConfig.resumePath && (
              <a
                href={siteConfig.resumePath}
                className="mt-2.5 inline-flex self-start rounded-[5px] bg-[oklch(0.72_0.11_193)] px-6 py-3.5 text-[14.5px] font-semibold text-[#0f1416]"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#9aa0a8] sm:flex-row sm:justify-between">
          <span>
            {siteConfig.name} · Lead Software Engineer
          </span>
          <span>
            {siteConfig.location} · IST (UTC+5:30)
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
