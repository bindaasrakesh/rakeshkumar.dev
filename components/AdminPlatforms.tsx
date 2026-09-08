import { adminProjects } from "@/content/site";

export default function AdminPlatforms() {
  return (
    <section className="mx-auto max-w-site px-5 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mb-8 flex flex-col gap-3.5 border-b border-ink/15 pb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
          02 — React admin platforms
        </span>
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-[2.35rem] md:leading-[1.06]">
          React admin dashboards for mobile products
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
          Many client products had a mobile app plus an ops layer. I built the React admin
          dashboards that teams used to manage users, content, and day-to-day operations.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {adminProjects.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col gap-2.5 rounded-lg border bg-white p-5 ${
              project.highlight
                ? "border-[oklch(0.72_0.10_193)] ring-1 ring-[oklch(0.72_0.10_193)]/40"
                : "border-ink/10"
            }`}
          >
            <h3 className="text-[17px] font-semibold tracking-tight">{project.title}</h3>
            <p className="text-[13.5px] leading-relaxed text-muted-2">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-paper-2 px-2 py-1 font-mono text-[9.5px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
