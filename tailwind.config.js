/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#FFFFFF",
        secondary: "#EDEBE7",
        muted: "#8A8A8A",
        accentOrange: "#E86F3E", // Taken from reference
        accentBlue: "#60A5FA", // Taken from reference
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        royal: ['"Archivo Black"', 'sans-serif'],
        didone: ['"Bodoni Moda"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest2: '.25em',
      }
    },
  },
  plugins: [],
}
