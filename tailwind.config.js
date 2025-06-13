/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-bg': '#090909',
        'dark-accent': '#1E1E20',
        'medium-grey': '#38383D',
        'light-grey': '#797979',
        'deep-blue': '#0E0EA2',
        'primary-blue': '#2B59B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounceSlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSlow: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) translateX(-50%)' },
          '40%': { transform: 'translateY(-10px) translateX(-50%)' },
          '60%': { transform: 'translateY(-5px) translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(43, 89, 176, 0.3)',
        'glow-lg': '0 0 40px rgba(43, 89, 176, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(43, 89, 176, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};