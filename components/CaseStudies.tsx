import { caseStudies } from "@/content/site";

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-48 items-center justify-center border border-ink/10 bg-[#faf9f6] md:h-72"
      style={{
        background:
          "repeating-linear-gradient(135deg, #e7e3db 0 10px, #f0ede7 10px 20px)",
      }}
    >
      <span className="px-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted-2">
        Project shot
        <br />
        {label}
      </span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-site px-5 pb-6 pt-16 md:px-10 md:pt-24 lg:px-16">
      <div className="mb-10 flex flex-col gap-3 border-b border-ink/15 pb-5 md:mb-11 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
            01 — Featured work
          </span>
          <h2 className="text-3xl font-medium tracking-tight md:text-[2.75rem] md:leading-[1.02]">
            Three cases I owned end to end.
          </h2>
        </div>
        <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted-2 md:text-right">
          Enterprise SPA
          <br />
          Marketplace · Performance
        </span>
      </div>

      <div className="flex flex-col gap-8">
        {caseStudies.map((study, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={study.id}
              className="overflow-hidden rounded-xl border border-ink/10 bg-white md:grid md:grid-cols-2"
            >
              <div className={`border-ink/10 bg-[#faf9f6] p-5 md:p-7 ${reverse ? "md:order-2 md:border-l" : "md:border-r"}`}>
                <div className="overflow-hidden rounded-lg border border-ink/10 bg-white">
                  <div className="flex items-center gap-1.5 border-b border-ink/[0.09] bg-[#f7f5f1] px-3 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#dcd8cf]" />
                    <span className="h-2 w-2 rounded-full bg-[#dcd8cf]" />
                    <span className="ml-2 h-4 flex-1 rounded bg-[#f0eee9]" />
                  </div>
                  <Placeholder label={study.imageLabel} />
                </div>
              </div>

              <div className={`flex flex-col gap-4 p-6 md:p-8 ${reverse ? "md:order-1" : ""}`}>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-accent-deep">
                    {study.label}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight md:text-[1.35rem]">
                    {study.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5 text-[13.5px] leading-relaxed text-muted">
                  <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-2.5">
                    <span className="pt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-2">
                      Problem
                    </span>
                    <span>{study.problem}</span>
                  </div>
                  <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-2.5">
                    <span className="pt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-2">
                      I owned
                    </span>
                    <span>{study.owned}</span>
                  </div>
                  <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-2.5">
                    <span className="pt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-2">
                      Outcome
                    </span>
                    <span className="font-medium text-ink">{study.outcome}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-paper-2 px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
