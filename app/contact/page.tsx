import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Contact', description: 'Contact sales, support, and partnership teams.' };

export default function ContactPage() {
  return <PageShell title="Contact" intro="Reach the right team for support, sales, or press."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Use the in-app support route for account-specific help, or email support@echoloom.example.</p></PageShell>;
}
