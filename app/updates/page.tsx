import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Updates', description: 'Product update log and release highlights.' };

export default function UpdatesPage() {
  return <PageShell title="Updates" intro="Track feature launches, quality improvements, and roadmap milestones."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Version notes include playback changes, voice additions, and import compatibility updates.</p></PageShell>;
}
