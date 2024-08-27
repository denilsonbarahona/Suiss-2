const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      screens: {
        xs: "480px",
      },
      colors: {
        "app-red": {
          500: "#ED9D99",
          900: "#FD3F34",
        },
        "app-blue": {
          500: "#9EA9EA",
          900: "#3D52D5",
        },
        "app-blue-gray": {
          50: "#F4F4F4",
          100: "#EAEAEA",
          500: "#969696",
          600: "#818181",
          700: "#6C6C6C",
          900: "#2D2D2D",
        },
        "app-light-blue": {
          500: "#B4E2E8",
          200: "#E1F3F6",
          900: "#52CCDE",
        },
        "app-gray": {
          50: "#F4F4F4",
          500: "#969696",
          800: "#575757",
        },
        "app-indigo": {
          500: "#d8c7e7",
          900: "#A976D6",
        },
        "app-amber": {
          900: "#EDAE49",
        },
        "app-green": {
          500: "#88DCC0",
          900: "#10b981",
        },
        "app-text-base": {
          900: "#1E1E1E",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
