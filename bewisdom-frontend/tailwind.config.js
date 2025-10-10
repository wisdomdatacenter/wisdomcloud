/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ đặt ở cấp root, KHÔNG để trong theme.extend
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0c1116",        // nền chính
          surface: "#11161b",   // mặt phẳng card
          primary: "#12d6c5",   // xanh ngọc sáng
          primary2: "#0ec1b2",  // xanh ngọc phụ
          text: "#d7e0ea",      // chữ sáng
          sub: "#9fb2c7",       // chữ phụ
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(18,214,197,.16), 0 12px 50px rgba(18,214,197,.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
