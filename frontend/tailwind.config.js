/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["roboto", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};

// Mobile devices – 320px — 480px.
// iPads, Tablets – 481px — 768px.
// Small screens, laptops – 769px — 1024px.
// Desktops, large screens – 1025px — 1200px.
// Extra large screens, TV – 1201px, and more.
