/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#eaa636",
        goldSecondary: "#f8d895",
        grayLink: "#666666",
        sandyBeige: "rgb(208, 175, 137)",
      },
    },
  },
  plugins: [],
};
