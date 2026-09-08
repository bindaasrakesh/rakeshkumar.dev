import { siteConfig } from "@/content/site";
import ScrollToLink from "@/components/ScrollToLink";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:px-16"
      style={{
        background:
          "radial-gradient(120% 90% at 82% 8%, oklch(0.94 0.035 193) 0%, rgba(243,241,236,0) 58%), linear-gradient(180deg, #f5f3ef 0%, #efece6 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(23,25,28,.045) 0 1px, transparent 1px 120px)",
        }}
      />

      <div className="relative mx-auto grid max-w-site items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            <span>
              Lead Software Engineer · {siteConfig.yearsOfExperience}
            </span>
          </div>

          <h1 className="text-[3.25rem] font-medium leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem] lg:leading-[0.88]">
            Rakesh
            <br />
            Kumar
          </h1>

          <p className="max-w-xl text-xl font-medium leading-snug tracking-tight text-ink md:text-[1.7rem] md:leading-[1.22]">
            I build and ship{" "}
            <span className="border-b-[3px] border-accent">
              scalable React &amp; Next.js platforms
            </span>{" "}
            that enterprises run on.
          </p>

          <p className="max-w-md text-base leading-relaxed text-muted md:text-[16.5px]">
            {siteConfig.support}
          </p>

          <div className="mt-1 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <ScrollToLink
              targetId="work"
              className="rounded-[5px] bg-ink px-6 py-3.5 text-center text-[14.5px] font-medium text-paper"
            >
              View Work
            </ScrollToLink>
            {siteConfig.resumePath && (
              <a
                href={siteConfig.resumePath}
                className="rounded-[5px] border border-ink/30 px-6 py-3.5 text-center text-[14.5px] font-medium text-ink"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:h-[496px] lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-ink/15 bg-white shadow-panel lg:absolute lg:left-8 lg:right-0 lg:top-5">
            <div className="flex items-center gap-2 border-b border-ink/[0.09] bg-[#faf9f6] px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#dcd8cf]" />
              <span className="h-2 w-2 rounded-full bg-[#dcd8cf]" />
              <span className="h-2 w-2 rounded-full bg-[#dcd8cf]" />
              <span className="ml-3 h-5 flex-1 rounded bg-[#f0eee9]" />
            </div>
            <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] md:grid-cols-[8.25rem_minmax(0,1fr)]">
              <div className="flex flex-col gap-2.5 border-r border-ink/[0.08] bg-[#fbfaf8] p-3.5">
                <span className="h-2 w-16 rounded-sm bg-ink/80" />
                <span className="h-2 w-20 rounded-sm bg-[#e3dfd7]" />
                <span className="h-2 w-16 rounded-sm bg-[#e3dfd7]" />
                <span className="h-2 w-24 rounded-sm bg-[oklch(0.86_0.06_193)]" />
                <span className="h-2 w-14 rounded-sm bg-[#e3dfd7]" />
                <span className="h-2 w-20 rounded-sm bg-[#e3dfd7]" />
              </div>
              <div className="flex min-h-[12rem] flex-col gap-3 p-4 md:min-h-[20rem]">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Sites", value: "126" },
                    { label: "Active", value: "48" },
                    { label: "Alerts", value: "3", accent: true },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex min-w-0 flex-col justify-center gap-1.5 rounded-md border border-ink/[0.08] p-2 sm:p-2.5 ${
                        stat.accent ? "bg-accent-soft" : "bg-[#faf9f6]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[7.5px] uppercase leading-none tracking-[0.1em] sm:text-[8px] sm:tracking-[0.12em] ${
                          stat.accent ? "text-accent-deep" : "text-muted-2"
                        }`}
                      >
                        {stat.label}
                      </span>
                      <span
                        className={`text-base font-semibold leading-none tracking-tight sm:text-lg md:text-[22px] ${
                          stat.accent ? "text-accent-deep" : "text-ink"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex flex-1 items-end justify-center rounded-md border border-ink/[0.08] p-3"
                  style={{
                    background:
                      "repeating-linear-gradient(135deg, #efece6 0 9px, #f7f5f1 9px 18px)",
                  }}
                >
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-2">
                    Dashboard chart
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-4 w-full max-w-[13.25rem] rounded-[11px] bg-ink p-[18px] text-paper shadow-metric lg:absolute lg:bottom-2 lg:left-0 lg:mt-0">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-[oklch(0.78_0.08_193)]">
              Lighthouse · Perf
            </span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight">90+</span>
              <span className="text-xs text-[#9aa0a8]">from ~10–15</span>
            </div>
            <div className="mt-3 h-[5px] overflow-hidden rounded-[3px] bg-paper/20">
              <span className="block h-full w-[92%] bg-[oklch(0.72_0.11_193)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
