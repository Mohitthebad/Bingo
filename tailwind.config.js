/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        darkBg: '#121218',
        darkCard: '#1B1C24',
        lightBg: '#F7F4EC',
        coral: '#FF3B5C',
        lime: '#C6FF5E',
      }
    },
  },
  plugins: [],
}
