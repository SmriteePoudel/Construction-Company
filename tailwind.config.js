/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#F5EEE6",
          100: "#F9F6F2",
          200: "#F5EEE6",
          300: "#E9DFD3",
        },
        pink: {
          DEFAULT: "#FF8FB2",
          100: "#FFD1E3",
          200: "#FFB7CE",
          300: "#FF8FB2",
        },
        purple: {
          DEFAULT: "#D6C8F7",
          100: "#F3EFFF",
          200: "#D6C8F7",
          300: "#BFA8E6",
        },
        yellow: {
          DEFAULT: "#FFF9C4",
          100: "#FFFDE7",
          200: "#FFF9C4",
          300: "#FFF59D",
        },
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
