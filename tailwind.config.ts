
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
          50: "#eef4fb",
          100: "#d5e3f7",
          200: "#b4cef1",
          300: "#86b1e8",
          400: "#538ddb",
          500: "#0A3D91", // primary blue from logo
          600: "#0A3272",
          700: "#0A285A",
          800: "#061E42",
          900: "#051534",
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
          500: "#1A3F76", // accent navy
        },
        beige: {
          100: "#F5F4F8", // accent beige
        }
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
        arabic: ["Noto Sans Arabic", "sans-serif"],
        malayalam: ["Noto Sans Malayalam", "sans-serif"],
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
