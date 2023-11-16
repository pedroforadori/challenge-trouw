/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/components/*.tsx",
    "./src/screens/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      'custom-black': '#121212',
      'custom-black-secundary': '#363636',
      'custom-purple': '#8687E7',
      'custom-white': '#fafafa',
      'custom-red': "#FF4949"
      // 'custom-fade': 'rgba(24, 24, 24, 0.6)'
    }
  }
}

