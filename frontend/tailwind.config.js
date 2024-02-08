/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["roboto", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        defaultGray: "#f7f7f7",
        bordersColor: "#ebebeb",
        categoriesLink: "#2d2e2f",
      },
      backgroundImage: {
        "hero-img": "url('imgs/hero-img.png')",
      },
      boxShadow: {
        shadowListItem: "0 0px 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [tailwindScrollbar],
};

// Mobile devices – 320px — 480px.
// iPads, Tablets – 481px — 768px.
// Small screens, laptops – 769px — 1024px.
// Desktops, large screens – 1025px — 1200px.
// Extra large screens, TV – 1201px, and more.
