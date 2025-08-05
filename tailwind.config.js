/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111112ff', // base primary
          dark: '#1E40AF',
          light: '#3B82F6',
        }
      }
    },
  },
  plugins: [],
}

