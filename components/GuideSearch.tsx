'use client';

import { useMemo, useState } from 'react';
import { allGuides } from '@/data/site';

export function GuideSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return allGuides;
    return allGuides.filter((guide) => guide.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <label htmlFor="guide-search" className="text-sm font-semibold text-ink">
        Search feature guides
      </label>
      <input
        id="guide-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try: scanned PDF, dyslexia, Android Auto"
        className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-pulse transition focus:ring-2"
      />
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {results.map((guide) => (
          <li key={guide} className="rounded-xl bg-panel px-3 py-2 text-sm text-ink">
            {guide}
          </li>
        ))}
      </ul>
    </section>
  );
}
