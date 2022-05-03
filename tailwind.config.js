module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920",
      },
      backgroundImage: {
        back: "url('myBack.svg')",
        grid: "url('ttten.svg')",
        blur: "url('blur.svg')",
      },
      colors: {
        sunshine: "#ec3323",
        corn: "#008aff",
      },
      boxShadow: {
        boxie:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      },
    },
  },
  plugins: [],
};
