/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkanime: '#2b1055',
        lightanime: '#7597de',
        zinc: '#d4d4d8',
        violet: '#0f172a',
        squidred: '#ed1b76',
        squidgreen: '#037a76',
      },
      borderRadius: {
        circle: '50%',
      },
      spacing: {
        z: '50%',
      },
    },
    animation: {
      glow: 'glow 5s ease-in-out infinite',
      flash: 'flash 2s',
    },
    keyframes: {
      glow: {
        '0%, 100%': { color: '#d4d4d8' },
        '50%': { color: 'white' },
      },
      flash: {
        '0%': { opacity: '0.4' },
        '100%': { opacity: '1' },
      },
    },
    screens: {
      mobile: '1120px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
