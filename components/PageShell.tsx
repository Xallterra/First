import type { ReactNode } from 'react';

export function PageShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <section className="section-shell py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-4 text-base text-mist">{intro}</p>
      </header>
      <div className="mt-8">{children}</div>
    </section>
  );
}
