module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
