import type { Metadata } from 'next';
import { GuideSearch } from '@/components/GuideSearch';
import { guideCategories } from '@/data/site';

export const metadata: Metadata = {
  title: 'Feature Guides',
  description: 'Search and explore practical guides for web reading, documents, accessibility, and AI-assisted listening workflows.'
};

export default function FeatureGuidesPage() {
  return (
    <section className="section-shell py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-pulse">Feature Guides</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">A practical library for everyday listening workflows.</h1>
        <p className="mt-4 text-base text-mist">
          Browse by workflow, input type, or accessibility goal. Each guide includes setup steps, best practices, and related tools.
        </p>
      </header>

      <div className="mt-8">
        <GuideSearch />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {guideCategories.map((category) => (
          <article key={category.id} className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-ink">{category.name}</h2>
            <p className="mt-2 text-sm text-mist">{category.description}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {category.guides.map((guide) => (
                <li key={guide} className="rounded-xl bg-panel px-3 py-2 text-sm text-ink">
                  {guide}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
