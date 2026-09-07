import { impactItems } from "@/content/site";

export default function Impact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-neutral-900 mb-8">Impact</h2>
      <ul className="space-y-6">
        {impactItems.map((item, index) => (
          <li key={index} className="text-neutral-700 leading-relaxed">
            {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
