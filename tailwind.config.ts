import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        50: "3.125rem",
        "38px": "38px",
        large: "692px",
        "lt-side": "22%",
        "rt-side": "70%",
      },
      height: {
        48: "3rem",
        "38px": "38px",
      },
      colors: {
        "custom-dark": "#475569",
        "custom-gray": "#F0F2F5",
        "custom-gray-100": "#667185",
        "custom-gray-200": "#344054",
        "custom-gray-300": "#98A2B3",
        "custom-blue": "#0D6EFD",
        "custom-pl-blue": "#F0F6FE",
        "custom-green": "#0F973D",
        "custom-pl-green": "#E7F6EC",
        "custom-orange": "#F58A07",
        "custom-pl-orange": "#FEF4E6",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
