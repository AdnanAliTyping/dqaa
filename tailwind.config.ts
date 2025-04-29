
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "system-ui", "sans-serif"],
        display: ["Noto Sans", "system-ui", "sans-serif"],
        arabic: ["Amiri", "Noto Sans Arabic", "serif"],
        malayalam: ["Noto Sans Malayalam", "system-ui", "sans-serif"],
      },
      colors: {
        dqaa: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#0a3d91',
          '600': '#0369a1',
          '700': '#0c4a6e',
          '800': '#075985',
          '900': '#0c4a6e',
          '950': '#082f49',
        },
        gold: {
          '50': '#fefbe8',
          '100': '#fff8c2',
          '200': '#ffef89',
          '300': '#ffe045',
          '400': '#fece15',
          '500': '#eaac05',
          '600': '#ca8301',
          '700': '#a15e05',
          '800': '#84490c',
          '900': '#6e3c0f',
          '950': '#421e05',
        },
        estate: {
          '50': '#f5f7f9',
          '100': '#eaeff3',
          '200': '#d0dbe5',
          '300': '#a6bacd',
          '400': '#7595af',
          '500': '#527895',
          '600': '#3f5f7a',
          '700': '#344d64',
          '800': '#2e4254',
          '900': '#2b3947',
          '950': '#1a2430',
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
