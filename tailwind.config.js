/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#3CB136",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
