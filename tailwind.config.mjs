/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'wave-slow': 'wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-medium': 'wave 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) -4s infinite',
        'wave-fast': 'wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) -2s infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
