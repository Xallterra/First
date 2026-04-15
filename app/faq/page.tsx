import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';

const faqs = [
  'What content types are supported?',
  'Does it read web pages aloud?',
  'Does it work with PDFs and ebooks?',
  'Can it handle scanned PDFs?',
  'Does it support accessibility use cases?',
  'Is there a premium version?',
  'Can I sync progress and bookmarks?',
  'Can I use it for studying and bilingual reading?',
  'Does it support hands-free playback?',
  'Can it work with AI article workflows?',
  'How do I restore a purchase or recover access?',
  'How do I contact support?'
];

export const metadata: Metadata = { title: 'FAQ', description: 'Frequently asked questions about compatibility, accessibility, premium, and support.' };

export default function FAQPage() {
  return <PageShell title="FAQ" intro="Quick answers to common product, billing, and support questions."><ul className="space-y-2">{faqs.map((faq) => <li key={faq} className="rounded-2xl bg-white p-4 text-sm text-ink">{faq}</li>)}</ul></PageShell>;
}
