import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#171715',
        bg2: '#20201d',
        paper: '#f3ddc2',
        paper2: '#ead0af',
        'paper-light': '#fff3df',
        ink: '#171411',
        'ink-soft': '#473930',
        chalk: '#f8efe2',
        muted: '#b9aa98',
        rule: '#d65a43',
        accent: '#f05a43',
        'accent-dark': '#b9392d',
        tape: '#c7ab8e',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        editorial: ['var(--font-editorial)', 'serif'],
        hand: ['var(--font-hand)', 'cursive'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0',
        wider2: '0',
      },
    },
  },
  plugins: [],
};
export default config;
