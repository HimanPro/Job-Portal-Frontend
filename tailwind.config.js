/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        PrimaryGradient:
          "linear-gradient(180deg, #CE9FFC 0%, #A582F7 50.52%, #7367F0 100%)",
      },
    },
  },
  plugins: [],
}