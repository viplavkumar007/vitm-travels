/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logo-derived gold + charcoal
        gold: {
          50: '#fdfaf0',
          100: '#faf3d8',
          200: '#f3e3a3',
          300: '#e9cf6b',
          400: '#dcb73f',
          500: '#c9a227', // primary gold
          600: '#a9831d',
          700: '#86631a',
          800: '#6f511d',
          900: '#5f441e',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c5c6cb',
          300: '#9fa1a8',
          400: '#787a83',
          500: '#5d5f68',
          600: '#494b52',
          700: '#3c3d43',
          800: '#26272b',
          900: '#0e0e10', // logo background
        },
        // Travel theme: Blue + Orange
        ocean: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ec3ff',
          400: '#59a1ff',
          500: '#327dff',
          600: '#1b5ff5',
          700: '#1449e1',
          800: '#173cb6',
          900: '#19388f',
        },
        sunset: {
          50: '#fff5ed',
          100: '#ffe7d3',
          200: '#ffcaa6',
          300: '#ffa56d',
          400: '#ff7432',
          500: '#ff510a',
          600: '#f03a00',
          700: '#c72a05',
          800: '#9e240c',
          900: '#7f210e',
        },
        cream: '#faf7f0',
        ivory: '#fffdf8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glossy: 'inset 0 1px 0 0 rgba(255,255,255,0.45), 0 8px 20px -6px rgba(0,0,0,0.25)',
        'glossy-lg': 'inset 0 1px 0 0 rgba(255,255,255,0.5), 0 14px 30px -8px rgba(0,0,0,0.35)',
        card: '0 10px 30px -12px rgba(14,14,16,0.18)',
        'card-hover': '0 24px 50px -18px rgba(14,14,16,0.30)',
        ring: '0 0 0 4px rgba(201,162,39,0.28)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e9cf6b 0%, #c9a227 45%, #a9831d 100%)',
        'ocean-gradient': 'linear-gradient(135deg, #59a1ff 0%, #1b5ff5 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #ff7432 0%, #f03a00 100%)',
      },
    },
  },
  plugins: [],
}
