/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ["Raleway", "sans-serif"],
      title: ["Playfair Display", "serif"],
    },
    colors: {
      // Configure your color palette here
      transparent: "transparent",
      current: "currentColor",
      "bg-h": "#F4F0EC", // bg-color
      primary: "#007A4C", // Green
      secondary: "#63554b", // Coffee
      white: "#FFFFFF",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.8s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        slideFromRight:
          "slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        slideFromLeft:
          "slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fadeAndScale: "fadeAndScale 1s ease-in-out",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeAndScale: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
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
        "6xl": "3.75rem", // Sixfold extra large
        "7xl": "4.5rem", // Sevenfold extra large
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
