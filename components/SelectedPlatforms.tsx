import { selectedProjects } from "@/content/site";

export default function SelectedPlatforms() {
  return (
    <section className="mx-auto max-w-site px-5 pb-16 md:px-10 lg:px-16">
      <div className="mb-8 flex flex-col gap-3.5 border-b border-ink/15 pb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
          03 — Selected platforms
        </span>
        <h2 className="text-3xl font-medium tracking-tight md:text-[2.35rem] md:leading-[1.06]">
          Other products I shipped frontend for
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {selectedProjects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-2.5 rounded-lg border border-ink/10 bg-white p-[22px]"
          >
            <h3 className="text-[19px] font-semibold tracking-tight">{project.title}</h3>
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
