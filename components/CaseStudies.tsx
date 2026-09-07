import { caseStudies } from "@/content/site";

export default function CaseStudies() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">
        Selected Work
      </h2>
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <article
            key={study.title}
            className="border border-neutral-200 rounded-lg p-6 bg-white"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {study.title}
            </h3>
            <div className="space-y-3 text-neutral-700 leading-relaxed">
              <div>
                <span className="font-medium text-neutral-900">Problem:</span>{" "}
                {study.problem}
              </div>
              <div>
                <span className="font-medium text-neutral-900">
                  What I owned:
                </span>{" "}
                {study.owned}
              </div>
              <div>
                <span className="font-medium text-neutral-900">Outcome:</span>{" "}
                {study.outcome}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
