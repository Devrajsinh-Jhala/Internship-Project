/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },

      textColor: {
        skin: {
          buttonText: "var(--button-text-color)",
          secondaryText: "var(--text-secondary-color)",
        },
      },

      backgroundColor: {
        skin: {
          bgSecondary: "var(--bg-secondary-color)",
        },
      },
      letterSpacing: {
        tightest: "-0.15625rem",
      },
    },
  },
  plugins: [],
};
