import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Privacy', description: 'Privacy policy and data handling practices for EchoLoom.' };

export default function PrivacyPage() {
  return <PageShell title="Privacy" intro="We collect minimal data required for sync, licensing, and support operations."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Detailed retention windows and processing controls are documented here for transparency.</p></PageShell>;
}
