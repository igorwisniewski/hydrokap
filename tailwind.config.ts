import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dodane kolory z :root
        hydro: {
          50: '#e6f3fd',
          100: '#cce6fb',
          200: '#99cdf7',
          300: '#66b4f3',
          400: '#339bec',
          500: '#016fd1', // kolor bazowy
          600: '#015fb3',
          700: '#014f95',
          800: '#013f77',
          900: '#002f59',
          950: '#001f3b',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
