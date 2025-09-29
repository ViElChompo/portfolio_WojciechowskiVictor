/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f8f8",
          200: "#e8e8e8",
          500: "#1a1a1a",
          700: "#111111",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
