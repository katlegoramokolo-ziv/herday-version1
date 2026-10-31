/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EFF9F7',
          100: '#D5EFEA',
          200: '#ABDFD6',
          300: '#7FCDBF',
          400: '#6BC1B2',
          500: '#53B4A5',
          600: '#3D9A8B',
          700: '#2E7D70',
          800: '#256459',
          900: '#1D4F47',
        },
        ocean: {
          600: '#2F6F69',
          700: '#255A55',
          800: '#1C4541',
        },
        cream: {
          50: '#FBF8F3',
          100: '#F2EAE0',
          200: '#E8DDCD',
        },
        sand: {
          100: '#EFE3D0',
          200: '#E2CFB3',
          300: '#CFB48E',
          400: '#A88B64',
        },
        ink: {
          900: '#1A2221',
          800: '#243029',
          700: '#3A4745',
          600: '#56615E',
          500: '#6F7A77',
        },
        error: {
          50: '#FBEFEC',
          600: '#A8402F',
          700: '#8A3224',
        },
        success: {
          50: '#EAF6EE',
          600: '#2F7A4E',
          700: '#22603C',
        },
        warning: {
          50: '#FBF4E4',
          600: '#8A6418',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 700ms ease-out both',
      },
    },
  },
  plugins: [],
};
