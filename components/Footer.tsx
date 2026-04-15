import Link from 'next/link';

const footerLinks = {
  Product: [
    { href: '/overview', label: 'Overview' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/feature-guides', label: 'Feature Guides' }
  ],
  Support: [
    { href: '/support', label: 'Support Hub' },
    { href: '/faq', label: 'FAQ' },
    { href: '/license-recovery', label: 'License Recovery' },
    { href: '/contact', label: 'Contact' }
  ],
  Company: [
    { href: '/company', label: 'Company' },
    { href: '/updates', label: 'Updates' },
    { href: '/privacy', label: 'Privacy' }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-lg font-semibold text-ink">EchoLoom</p>
          <p className="mt-3 text-sm text-mist">Built for focused listening, accessible reading, and cross-device workflows.</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-sm font-semibold text-ink">{group}</p>
            <ul className="mt-3 space-y-2 text-sm text-mist">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-mist">
        © {new Date().getFullYear()} EchoLoom Labs. All rights reserved.
      </div>
    </footer>
  );
}
