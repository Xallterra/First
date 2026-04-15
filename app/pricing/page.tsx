import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Pricing', description: 'Free and premium pricing plans with license recovery guidance.' };

export default function PricingPage() {
  return (
    <PageShell title="Pricing" intro="Start free, then unlock premium voices, sync, and advanced playback.">
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-semibold">Free</h2><ul className="mt-3 list-disc pl-5 text-sm text-mist"><li>Basic voices and playback</li><li>Web and pasted text input</li><li>Core accessibility settings</li></ul></article>
        <article className="rounded-2xl border border-ink bg-ink p-6 text-white"><h2 className="text-xl font-semibold">Premium</h2><ul className="mt-3 list-disc pl-5 text-sm text-slate-200"><li>Cloud voices and dialog mode</li><li>PDF/EPUB/FB2 + OCR workflow</li><li>Sync bookmarks and reading position</li><li>AI article assistant</li></ul></article>
      </div>
      <p className="mt-5 text-sm text-mist">Need help after upgrading? Visit License Recovery to restore purchases and recover access.</p>
    </PageShell>
  );
}
