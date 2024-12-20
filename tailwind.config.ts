import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          cetacean: '#011434',
          celtic: '#2b64c6',
        },
        gray: {
          light: '#EFEFEF',
        },
        white: {
          anitflash: '#f0f0f0',
          plain: '#fff',
        },
        silver: {
          quick: '#a3a3a3',
          light: '#d7d7d7',
        },
        black: {
          raisin: '#202020',
        },
        purple: {
          ube: '#8088ca',
          magnolia: '#f4f5fe',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
