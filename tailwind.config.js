/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Section-Banner': "url('/src/Assets/img_learnlanguage.jpg')",
      }
    },
  },
  plugins: [],
}
