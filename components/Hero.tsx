import { siteConfig } from "@/content/site";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
      <h1 className="text-5xl font-bold text-neutral-900 mb-2">
        {siteConfig.name}
      </h1>
      <p className="text-2xl text-neutral-700 mb-2">{siteConfig.title}</p>
      <p className="text-lg text-neutral-600 mb-6">
        {siteConfig.yearsOfExperience}
      </p>
      <p className="text-lg text-neutral-700 leading-relaxed max-w-3xl">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
