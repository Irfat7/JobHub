/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#7E90FE",
        "gradient-end": "#9873FF",
        'custom-dark-gray': '#a3a3a3',
      },
    },
  },
  plugins: [],
};
