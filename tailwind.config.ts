import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    extend: {
      colors: {
        violet: 'var(--violet)',
        'dark-violet': 'var(--dark-violet)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
