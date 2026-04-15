export type GuideCategory = {
  id: string;
  name: string;
  description: string;
  guides: string[];
};

export const brand = {
  name: 'EchoLoom',
  tagline: 'Turn your reading backlog into clear, focused listening.',
  description:
    'EchoLoom is an accessibility-first text-to-speech platform for articles, documents, ebooks, and study workflows across devices.'
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/overview', label: 'Overview' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/support', label: 'Support' },
  { href: '/faq', label: 'FAQ' },
  { href: '/feature-guides', label: 'Feature Guides' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' }
];

export const guideCategories: GuideCategory[] = [
  {
    id: 'web-article',
    name: 'Web and article listening',
    description: 'Capture and play long-form web content with clean voice narration.',
    guides: ['Read Web Pages Aloud', 'Article Reader App', 'Save Articles and Listen Later', 'Ask AI About Articles']
  },
  {
    id: 'docs-ebooks',
    name: 'Documents and ebooks',
    description: 'Import and listen to structured documents, scans, and open ebook formats.',
    guides: ['PDF Reader Aloud', 'Scanned PDF OCR Reader', 'EPUB Reader with TTS', 'FB2 Reader with TTS', 'Readium LCP Reader', 'Read Documents Aloud']
  },
  {
    id: 'accessibility',
    name: 'Accessibility and reading support',
    description: 'Design patterns and settings tailored for reading barriers and fatigue.',
    guides: ['Text to Speech for Dyslexia', 'Text to Speech for ADHD', 'Read Aloud for Low Vision', 'Hands-Free Reader']
  },
  {
    id: 'study-productivity',
    name: 'Studying and productivity',
    description: 'Transform notes, emails, and class material into repeatable listening flows.',
    guides: ['Text to Speech for Studying', 'Read Emails and Copied Text', 'Bilingual Reader for Language Learning', 'Voice Annotations']
  },
  {
    id: 'voice-playback',
    name: 'Advanced voice and playback tools',
    description: 'Control narration style, timing, and export for deeper listening workflows.',
    guides: ['Dialog Voices for Books', 'Record TTS to Audio', 'Cloud TTS Voices', 'Sleep Timer Reader']
  },
  {
    id: 'ai-workflows',
    name: 'AI-assisted workflows',
    description: 'Layer smart summaries and question answering over listening sessions.',
    guides: ['Ask AI About Articles']
  },
  {
    id: 'cross-device',
    name: 'Device and cross-device workflows',
    description: 'Move reading from desktop to phone while preserving position and context.',
    guides: ['Text Reader for Android', 'Send Pages from Desktop to Phone', 'Sync Reading Position and Bookmarks']
  },
  {
    id: 'car-handsfree',
    name: 'Car and hands-free listening',
    description: 'Operate safely while commuting with large controls and voice-first habits.',
    guides: ['Android Auto Reader Companion', 'Hands-Free Reader']
  }
];

export const allGuides = [
  'Text Reader for Android',
  'Read Web Pages Aloud',
  'Article Reader App',
  'PDF Reader Aloud',
  'Scanned PDF OCR Reader',
  'EPUB Reader with TTS',
  'FB2 Reader with TTS',
  'Read Documents Aloud',
  'Read Emails and Copied Text',
  'Save Articles and Listen Later',
  'Send Pages from Desktop to Phone',
  'Sync Reading Position and Bookmarks',
  'Bilingual Reader for Language Learning',
  'Dialog Voices for Books',
  'Voice Annotations',
  'Record TTS to Audio',
  'Cloud TTS Voices',
  'Hands-Free Reader',
  'Sleep Timer Reader',
  'Android Auto Reader Companion',
  'Text to Speech for Dyslexia',
  'Text to Speech for ADHD',
  'Text to Speech for Studying',
  'Read Aloud for Low Vision',
  'Readium LCP Reader',
  'Ask AI About Articles'
];
