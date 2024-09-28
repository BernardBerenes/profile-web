/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      keyframes: {
        launch: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1000px)' },
        },
        smoke: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        launch: 'launch 2s ease-out forwards',
        smoke: 'smoke 2s ease-out forwards',
        heartbeat: 'heartbeat 2s ease-in-out infinite',
        slideInFromLeft: 'slideInFromLeft 2.5s ease-out',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

