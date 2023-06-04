/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ["Raleway"],
    },
    colors: {
      // Configure your color palette here
      transparent: "transparent",
      current: "currentColor",
      "bg-h": "#F4F0EC",
      primary: "#007A4C",
      secondary: "#63554b",
      white: "#FFFFFF",
    },
    extend: {
      fontSize: {
        "2xs": "0.625rem", // Extra extra small
        xs: "0.75rem", // Extra small
        sm: "0.875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra large
        "2xl": "1.5rem", // Double extra large
        "3xl": "1.875rem", // Triple extra large
        "4xl": "2.25rem", // Quadruple extra large
        "5xl": "3rem", // Quintuple extra large
      },
      fontWeight: {
        light: "300", // Light
        regular: "400", // regular
        medium: "500", // medium
        "semi-bold": "600", // Semi-bold
        bold: "700", // bold
        "extra-bold": "800", // Extra bold
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
