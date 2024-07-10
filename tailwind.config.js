/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        me: "url('/assets/imgs/me.jpg')",
      },
    },
  },
  plugins: [],
};
