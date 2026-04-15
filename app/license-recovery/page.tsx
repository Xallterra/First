import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'License Recovery', description: 'Restore purchases and recover premium access.' };

export default function LicenseRecoveryPage() {
  return <PageShell title="License Recovery" intro="Restore purchases, transfer access, or recover a lost premium key."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Provide your receipt email and platform details to quickly re-activate premium access.</p></PageShell>;
}
