/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        error: "#3B82F6",
        900: "#212121",
      },
      backgroundColor: {
        "not-found": "#3B82F6",
      },
      width: {
        280: "2800px",
      },
      minWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: [],
};
