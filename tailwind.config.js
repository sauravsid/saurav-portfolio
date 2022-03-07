module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-back": "url('/home/background.jpg')",
      },
    },
    fontFamily: {
      sans: ["Gilroy-Bold"],
    },
  },
  plugins: [],
};
