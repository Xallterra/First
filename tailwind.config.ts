import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1020',
        mist: '#6D748B',
        pulse: '#4F7CFF',
        aurora: '#17C4C7',
        panel: '#F3F6FC'
      },
      boxShadow: {
        glow: '0 18px 60px rgba(79, 124, 255, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
