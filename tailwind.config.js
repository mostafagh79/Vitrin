/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    animation: ["motion-safe"]
},
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs : "400px",
      sm: "575px",
      md: "768px",
      lg: "990px",
    },
    extend: {
       animation: {
    fadeIn: "fadeIn 2s ease-in forwards"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  },
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
