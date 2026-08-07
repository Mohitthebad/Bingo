/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          navy: '#0F172A',
          royal: '#0A1C7C',
        },
        secondary: {
          DEFAULT: '#1E293B',
          light: '#334155',
        },
        accent: {
          green: '#00C896',
          cyan: '#3BB6FF',
          purple: '#7C3AED',
        },
        success: {
          DEFAULT: '#00C896',
          light: '#D1FAE5',
        },
        warning: '#F59E0B',
        danger: '#EF4444',
        gold: {
          DEFAULT: '#F4C542',
          dark: '#D4A017',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          light: '#FFFFFF',
          card: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#CBD5E1',
        },
        dark: {
          DEFAULT: '#0F172A',
          blue: '#1E293B',
          card: '#1E293B',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #2563EB 100%)',
        'opportunity-gradient': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #3BB6FF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F4C542 0%, #FFB703 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #00C896 0%, #059669 100%)',
      }
    },
  },
  plugins: [],
}
