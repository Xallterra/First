import Link from 'next/link';
import { brand, navItems } from '@/data/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          {brand.name}
        </Link>
        <nav aria-label="Main navigation" className="hidden gap-5 text-sm text-mist md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/downloads"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
