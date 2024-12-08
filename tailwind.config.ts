import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'full-size': {
          '0%': {
            height: '0px',
          },
          '100%': {
            height: '100%',
          },
        },
        'no-size': {
          '0%': {
            height: '100%',
          },
          '100%': {
            height: '0px',
          },
        },
      },
      animation: {
        'full-size': 'full-size 0.3s ease-out forwards',
        'no-size': 'no-size 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
