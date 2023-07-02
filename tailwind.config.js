/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gloock: ["Gloock"],
      },
    },

    colors: {
      white: "#F8FBFF",
      gray: "#6C6C6C",
      black: "#000",
    },
  },
  plugins: [],
};
