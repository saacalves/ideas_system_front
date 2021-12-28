module.exports = {
  mode:"jit",
  purge: [
    "./src/**/*.{vue,js,jsx,ts,tsx}"
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}