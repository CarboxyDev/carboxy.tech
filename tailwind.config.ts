/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          ...colors.zinc,
          550: '#5F5F65',
        },
        primary: { ...colors.cyan, DEFAULT: colors.cyan[500] },
        meta: '#0081FB',
        muted: '#F5F5F5',
        accent: {
          ...colors.zinc,
          DEFAULT: colors.zinc[100],
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
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
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        ['shine-infinite']: {
          '0%': {
            transform: 'skew(-12deg) translateX(-100%)',
          },
          '100%': {
            transform: 'skew(-12deg) translateX(100%)',
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
        ['shine-infinite']: 'shine-infinite 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
