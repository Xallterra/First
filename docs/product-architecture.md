# EchoLoom Product Website + Apple App Concept

## 1) Site map
- `/` Home
- `/overview`
- `/use-cases`
- `/pricing`
- `/downloads`
- `/support`
- `/faq`
- `/feature-guides`
- `/company`
- `/contact`
- `/privacy`
- `/license-recovery`
- `/updates` (optional blog/update lane)

## 2) Brand and style direction
- **Brand name:** EchoLoom
- **Positioning:** Premium accessibility-first listening platform for serious readers.
- **Voice:** Calm, practical, trustworthy, and future-ready.
- **Visual language:** Rounded panels, generous spacing, high contrast, soft gradient accents.
- **Typography hierarchy:** Large utility headlines, compact section intros, readable body copy.
- **Design tokens:** Ink (#0B1020), Mist (#6D748B), Pulse (#4F7CFF), Aurora (#17C4C7), Panel (#F3F6FC).

## 3) Homepage wireframe and copy
1. **Hero**
   - Headline: "Turn reading time into listening momentum."
   - Subheadline: "Convert web pages, files, and study material into focused spoken playback."
   - CTAs: Download App / Buy Premium / View Guides.
2. **Product preview panel**
   - Queue snapshot + currently playing card.
3. **Trust bar**
   - Users: students, professionals, accessibility users.
4. **What it works with**
   - Web, articles, copied text, PDF/scanned PDF, EPUB/FB2, emails and notes.
5. **Accessibility and productivity block**
   - Dyslexia, ADHD, low vision, multitasking, commute workflows.
6. **Footer**
   - Product / Support / Company columns.

## 4) Full navigation structure
- **Primary navigation:** Home, Overview, Use Cases, Pricing, Downloads, Support, FAQ, Feature Guides, Company, Contact.
- **Utility footer links:** Privacy, License Recovery, Updates.
- **Persistent CTA:** Download.

## 5) Feature-guide hub architecture
- **Search first:** guide query bar at top.
- **Grouped taxonomy:**
  1. Web and article listening
  2. Documents and ebooks
  3. Accessibility and reading support
  4. Studying and productivity
  5. Advanced voice and playback tools
  6. AI-assisted workflows
  7. Device and cross-device workflows
  8. Car and hands-free listening
- **Guide cards (26):**
  Text Reader for Android, Read Web Pages Aloud, Article Reader App, PDF Reader Aloud, Scanned PDF OCR Reader, EPUB Reader with TTS, FB2 Reader with TTS, Read Documents Aloud, Read Emails and Copied Text, Save Articles and Listen Later, Send Pages from Desktop to Phone, Sync Reading Position and Bookmarks, Bilingual Reader for Language Learning, Dialog Voices for Books, Voice Annotations, Record TTS to Audio, Cloud TTS Voices, Hands-Free Reader, Sleep Timer Reader, Android Auto Reader Companion, Text to Speech for Dyslexia, Text to Speech for ADHD, Text to Speech for Studying, Read Aloud for Low Vision, Readium LCP Reader, Ask AI About Articles.

## 6) Example feature-guide page template
1. SEO title + concise intro.
2. Problem solved section.
3. Steps (import, configure voice, listen, save).
4. Tips and troubleshooting.
5. Related guides.
6. CTA row (Try free / Upgrade premium / Contact support).

## 7) Page-by-page website content outline
- **Home:** broad value proposition + trust + capability highlights.
- **Overview:** architecture of sources, voices, and sync.
- **Use Cases:** study, accessibility, commuting, document review.
- **Pricing:** free vs premium, comparison table, restore guidance.
- **Downloads:** App Store + TestFlight, compatibility, release notes.
- **Support:** searchable categories, troubleshooting, contact support.
- **FAQ:** compatibility, accessibility, premium, restore and support routes.
- **Feature Guides:** searchable workflow library.
- **Company:** mission, principles, long-term software commitment.
- **Contact:** support, partnership, press channels.
- **Privacy:** data usage, retention, user controls.
- **License Recovery:** purchase restore and migration paths.
- **Updates:** changelog and release communication.

## 8) Recommended Next.js folder structure
```text
app/
  layout.tsx
  page.tsx
  feature-guides/page.tsx
  overview/page.tsx
  use-cases/page.tsx
  pricing/page.tsx
  downloads/page.tsx
  support/page.tsx
  faq/page.tsx
  company/page.tsx
  contact/page.tsx
  privacy/page.tsx
  license-recovery/page.tsx
  updates/page.tsx
components/
  Header.tsx
  Footer.tsx
  GuideSearch.tsx
  PageShell.tsx
data/
  site.ts
docs/
  product-architecture.md
```

## 9) Reusable component list
- Header/NavBar
- Footer
- PageShell (shared hero + intro block)
- GuideSearch
- Hero (home section)
- ProductPreview card
- InputTypesSection
- ValueProps cards
- PricingCards
- FAQAccordion (future enhancement)
- SupportHub tiles
- AppScreensPreview (future enhancement)

## 10) Starter homepage code
- Implemented in `app/page.tsx` with:
  - Hero + three CTA buttons
  - Product preview mock panel
  - “What it works with” grid
  - Accessibility/productivity value cards

## 11) Starter feature-guides page code
- Implemented in `app/feature-guides/page.tsx` and `components/GuideSearch.tsx` with:
  - Searchable guide list
  - Eight workflow categories
  - 26 guide topics for SEO and expansion planning

## 12) Apple app UX concept (iPhone + iPad)
- **Tab model:** Home, Library, Player, Tools, Settings.
- **Home screen:** recents, queue, quick import buttons (Link, Text, PDF, EPUB, Files).
- **Import options:** Share Sheet extension, Files app picker, clipboard capture.
- **Player:** waveform/progress, chapter navigation, speed, skip, sleep timer, voice picker.
- **Reading mode:** sentence highlight, focus line, bilingual split-view.
- **Bookmarks/history:** tap to mark moments; timeline of listened items.
- **Accessibility settings:** font scaling, contrast themes, dyslexia-friendly spacing, larger controls.
- **Premium screen:** monthly/yearly plans, trial messaging, restore purchases.
- **Modes:** Article, Document, Book, Study, Accessibility, AI tools.
- **Visual style:** native Apple spacing, SF-based typography, light/dark mode parity.

## 13) Monetization-ready suggestions for later
- Introduce AI credit bundles for article Q&A.
- Team/education licenses for classrooms and organizations.
- Premium voice packs and downloadable offline packs.
- Annual family plan with shared bookmarks.
- In-app onboarding that routes free users to premium moments.

## 14) Long-term scaling recommendations
- Build guide pages from structured CMS content.
- Add locale strategy for multilingual SEO.
- Use event analytics for guide conversion funnels.
- Create docs versioning for feature releases.
- Add status page and uptime reporting for cloud voice services.
- Maintain consistent accessibility audits (WCAG-focused releases).
