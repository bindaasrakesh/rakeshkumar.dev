import { aboutCopy, skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="about" className="mx-auto max-w-site px-5 pb-20 md:px-10 lg:px-16">
      <div className="mb-10 border-t border-ink/15 pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
        06 — About / Approach
      </div>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <p className="text-xl font-medium leading-snug tracking-tight text-ink md:text-[1.4rem] md:leading-[1.45]">
          {aboutCopy}
        </p>
        <div className="grid gap-7 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <span className="border-b border-ink/15 pb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-deep">
                {group.label}
              </span>
              <ul className="space-y-1 text-[15px] leading-relaxed text-[#3d4249]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
