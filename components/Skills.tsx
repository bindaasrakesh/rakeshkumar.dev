import { skills } from "@/content/site";

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex flex-wrap gap-2 justify-center text-neutral-700">
        {skills.map((skill, index) => (
          <span key={skill.name}>
            {skill.name}
            {index < skills.length - 1 && (
              <span className="mx-2 text-neutral-400">·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
