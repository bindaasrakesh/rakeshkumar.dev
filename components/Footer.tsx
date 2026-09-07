import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 mt-16 border-t border-neutral-200">
      <div className="text-center text-neutral-600 space-y-1">
        <p className="font-medium text-neutral-900">{siteConfig.name}</p>
        <p>{siteConfig.location}</p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[var(--accent-color)] hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
