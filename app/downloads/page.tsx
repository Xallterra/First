import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

export const metadata: Metadata = { title: 'Downloads', description: 'Download EchoLoom, check compatibility, and view release notes.' };

export default function DownloadsPage() {
  return (
    <PageShell title="Downloads" intro="Install EchoLoom for iPhone and iPad, then optionally join beta releases.">
      <div className="space-y-3 rounded-2xl bg-white p-6 text-sm text-mist"><p>• App Store stable release</p><p>• Optional TestFlight beta lane</p><p>• Device compatibility and manual setup section</p><p>• Version history and release notes</p></div>
    </PageShell>
  );
}
