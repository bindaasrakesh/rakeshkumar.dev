import { archiveProjects } from "@/content/site";

export default function ProjectArchive() {
  return (
    <section className="mx-auto max-w-site px-5 pb-16 md:px-10 lg:px-16">
      <div className="mb-7 grid gap-6 border-b border-ink/15 pb-5 md:grid-cols-2 md:items-end">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-2">
            04 — Project archive
          </span>
          <h2 className="text-3xl font-medium tracking-tight md:text-[2.35rem] md:leading-[1.06]">
            Earlier &amp; supporting work
          </h2>
        </div>
        <p className="border-l-2 border-accent pl-4 font-mono text-[11.5px] leading-relaxed text-muted">
          Core stack: React &amp; Next.js.
          <br />
          Also shipped production UI in Angular and Vue when projects required it.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[40rem]">
          <div className="grid grid-cols-[minmax(0,1.1fr)_9rem_minmax(0,1fr)_minmax(0,1.2fr)] gap-6 border-b border-ink/20 px-1 pb-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-2">
            <span>Project</span>
            <span>Role</span>
            <span>Stack</span>
            <span>Notes</span>
          </div>
          {archiveProjects.map((row) => (
            <div
              key={row.project}
              className="grid grid-cols-[minmax(0,1.1fr)_9rem_minmax(0,1fr)_minmax(0,1.2fr)] gap-6 border-b border-ink/10 px-1 py-[18px] text-[14.5px]"
            >
              <span className="font-semibold">{row.project}</span>
              <span className="text-muted-2">{row.role}</span>
              <span className="font-mono text-[11.5px] text-muted">{row.stack}</span>
              <span className="text-[13.5px] text-muted-2">{row.notes}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
