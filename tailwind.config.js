/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html', // Include HTML if Tailwind classes are used here
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // Indigo-900
        secondary: '#22C55E', // Green-500
        danger: '#EF4444',    // Red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom sans font
      },
    },
  },
  plugins: [
    // Enable these only if installed
    require('@tailwindcss/forms'),      // For form styles
    require('@tailwindcss/typography'), // For rich text/prose styles
  ],
}
