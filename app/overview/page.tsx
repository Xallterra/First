import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Overview', description: 'Product overview for EchoLoom read-aloud software.' };

export default function OverviewPage() {
  return <PageShell title="Overview" intro="See how EchoLoom unifies web, documents, and study listening into one workflow."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Input coverage, voice quality, and cross-device sync are designed for real daily reading habits.</p></PageShell>;
}
