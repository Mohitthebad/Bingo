/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        serif: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        heading: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        body: ['Times New Roman', 'Times', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Times New Roman', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E3A8A',
          navy: '#0F172A',
          blue: '#2563EB',
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        accent: {
          DEFAULT: '#EA580C',
          lime: '#10B981',
          cyan: '#0284C7',
          gold: '#D97706',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          light: '#FFFFFF',
          card: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8F0',
          light: '#CBD5E1',
        }
      }
    },
  },
  plugins: [],
}


