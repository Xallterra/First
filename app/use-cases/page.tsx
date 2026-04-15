import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

const cases = ['Accessibility-first reading', 'Commuting and hands-free listening', 'Exam prep and course review', 'Work document playback'];

export const metadata: Metadata = { title: 'Use Cases', description: 'Use cases for accessibility, study, and productivity listening.' };

export default function UseCasesPage() {
  return (
    <PageShell title="Use Cases" intro="Choose a listening workflow tailored to your goals.">
      <ul className="grid gap-3 md:grid-cols-2">{cases.map((c) => <li key={c} className="rounded-2xl bg-white p-5 text-sm text-ink">{c}</li>)}</ul>
    </PageShell>
  );
}
