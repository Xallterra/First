import Link from 'next/link';

const inputTypes = ['Web pages', 'Articles', 'Copied text', 'PDF and scanned PDF', 'EPUB and FB2', 'Emails and notes'];
const valueProps = [
  'Accessibility-first controls for dyslexia, ADHD, and low-vision readers',
  'Cross-device queue and sync for desktop-to-phone listening',
  'Premium voices, speed control, and export-ready narration'
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pulse">
              Premium listening software
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Turn reading time into listening momentum.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist">
              EchoLoom converts pages, files, and study material into clear spoken playback so you can learn, focus, and move through your day hands-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/downloads" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white shadow-glow">
                Download App
              </Link>
              <Link href="/pricing" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-ink">
                Buy Premium
              </Link>
              <Link href="/feature-guides" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-ink">
                View Guides
              </Link>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-mist">
              Trusted by students, accessibility advocates, researchers, and professionals who read at scale.
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-ink">App preview</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-panel p-4">
                <p className="text-xs uppercase tracking-wide text-mist">Now playing</p>
                <p className="mt-2 text-sm font-medium text-ink">Scanned PDF OCR Reader</p>
                <p className="mt-1 text-xs text-mist">02:14 / 28:09 · 1.15x</p>
              </div>
              <div className="rounded-2xl bg-panel p-4">
                <p className="text-xs uppercase tracking-wide text-mist">Listening queue</p>
                <ul className="mt-2 space-y-2 text-sm text-ink">
                  <li>Neuroscience article</li>
                  <li>Weekly email digest</li>
                  <li>Bilingual vocabulary notes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16">
        <h2 className="text-2xl font-semibold text-ink">What it works with</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {inputTypes.map((type) => (
            <p key={type} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink">
              {type}
            </p>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <h2 className="text-2xl font-semibold text-ink">Accessibility + productivity value</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {valueProps.map((value) => (
            <article key={value} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-mist">{value}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
