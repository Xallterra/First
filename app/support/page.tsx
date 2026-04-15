import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Support', description: 'Help center, troubleshooting categories, and support contact routes.' };

export default function SupportPage() {
  return (
    <PageShell title="Support" intro="Search setup guides, troubleshoot playback, and recover your account quickly.">
      <div className="grid gap-3 md:grid-cols-2">{['Getting Started', 'Imports and File Errors', 'Playback and Voice Issues', 'Billing and License Recovery'].map((i) => <p key={i} className="rounded-2xl bg-white p-5 text-sm text-ink">{i}</p>)}</div>
    </PageShell>
  );
}
