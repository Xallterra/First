import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Company', description: 'Company values, mission, and long-term product direction.' };

export default function CompanyPage() {
  return <PageShell title="Company" intro="EchoLoom Labs builds listening-first software for serious reading workloads."><p className="rounded-2xl bg-white p-5 text-sm text-mist">Our mission is to make high-volume reading accessible, calm, and practical across every device.</p></PageShell>;
}
