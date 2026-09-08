import { impactItems } from "@/content/site";
import ScrollToLink from "@/components/ScrollToLink";

export default function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-site px-5 pb-16 md:px-10 lg:px-16">
      <div className="mb-10 border-t border-ink/15 pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
        05 — Impact
      </div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-0">
        {impactItems.map((item, index) => (
          <div
            key={item.value}
            className={`flex flex-col gap-3 ${
              index === 0
                ? "md:pr-11"
                : index === 1
                  ? "md:border-x md:border-ink/15 md:px-11"
                  : "md:pl-11"
            }`}
          >
            <span
              className={`text-5xl font-medium tracking-tight md:text-[4.1rem] ${
                item.value === "90+" ? "text-accent-deep" : "text-ink"
              }`}
            >
              {item.value}
            </span>
            <span className="max-w-[17.5rem] text-base leading-relaxed text-muted">
              {item.description}
            </span>
            {item.caption ? (
              <ScrollToLink
                targetId="work"
                className="font-mono text-[11px] leading-relaxed text-accent-deep hover:underline"
              >
                {item.caption}
              </ScrollToLink>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
