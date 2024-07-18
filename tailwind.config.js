/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Almost-White" : "#FAFAFA",
        "Medium-Gray" : "#696969",
        "Almost-Black" : "#141414",
      },
      backgroundImage: {
        "hero-desktop" : "url(./image-hero-desktop.png)"
      }
    },
  },
  plugins: [],
}