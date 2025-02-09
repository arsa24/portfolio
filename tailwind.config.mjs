module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,jsx}",
    "./pages/document/**/*.{js,jsx,ts,tsx}",
  ],
   darkMode: "class",
   theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#121212",
        },
        secondary: "#df0761",
        cardLight: "#1e1e1e",
        cardDark: "#282828",
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
