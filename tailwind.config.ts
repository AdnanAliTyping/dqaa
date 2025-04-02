
import type { Config } from "tailwindcss";

export default {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dqaa: {
          50: "#f0f9f6",
          100: "#d0eee4",
          200: "#a6e0cf",
          300: "#73c9b3",
          400: "#43ac92",
          500: "#0B5345", // primary green
          600: "#0a4a3d",
          700: "#083f34",
          800: "#05332b",
          900: "#032a23",
        },
        gold: {
          50: "#fdf9e7",
          100: "#fbefc4",
          200: "#f7e08c",
          300: "#f2ca4b",
          400: "#D4AC0D", // primary gold
          500: "#b3900a",
          600: "#8c7008",
          700: "#6b5506",
          800: "#574503",
          900: "#473802",
        },
        navy: {
          500: "#1A5276", // accent navy
        },
        beige: {
          100: "#F5EEF8", // accent beige
        }
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
        arabic: ["Noto Sans Arabic", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      backgroundImage: {
        "islamic-pattern": "url('/patterns/islamic-pattern.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
