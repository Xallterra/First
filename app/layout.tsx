import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { brand } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://echoloom.example'),
  title: {
    default: `${brand.name} | Listen to Web, Docs, and Study Material`,
    template: `%s | ${brand.name}`
  },
  description: brand.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
