import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: colors.zinc,
        primary: { ...colors.violet, DEFAULT: colors.violet[500] },
      },
      spacing: {
        15: '60px',
        18: '72px',
        22: '88px',
        25: '100px',
        30: '120px',
        50: '200px',
        70: '280px',
        75: '300px',
        80: '320px',
        84: '336px',
        88: '352px',
        90: '360px',
        100: '400px',
        112: '448px',
        116: '464px',
        120: '480px',
        125: '500px',
        130: '520px',
        140: '560px',
        150: '600px',
        160: '640px',
        170: '680px',
        180: '720px',
        190: '760px',
        200: '800px',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};

export default config;
