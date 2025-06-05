import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    {
      pattern: /bg-dqaa-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],

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
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Segoe UI", "system-ui", "sans-serif"],
        arabic: ["'Noto Naskh Arabic'", "Amiri", "'Noto Sans Arabic'", "serif"],
        malayalam: ["'Noto Sans Malayalam'", "'Manjari'", "'Hind Madurai'", "sans-serif"],
      },

      colors: {
        dqaa: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae6fd',
          '300': '#7dd3fc',
          '400': '#38bdf8',
          '500': '#1d4ed8', // Apple-refined blue
          '600': '#1e40af',
          '700': '#1e3a8a',
          '800': '#1e3a8a',
          '900': '#1e293b',
          '950': '#0f172a',
        },
        gold: {
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde68a',
          '300': '#fcd34d',
          '400': '#f59e0b', // Sophisticated champagne
          '500': '#d97706',
          '600': '#b45309',
          '700': '#92400e',
          '800': '#78350f',
          '900': '#451a03',
          '950': '#1c0701',
        },
        apple: {
          'gray-50': '#f8fafc',
          'gray-100': '#f1f5f9',
          'gray-200': '#e2e8f0',
          'gray-300': '#cbd5e1',
          'gray-400': '#94a3b8',
          'gray-500': '#64748b',
          'gray-600': '#475569',
          'gray-700': '#334155',
          'gray-800': '#1e293b',
          'gray-900': '#0f172a',
        },
        emerald: {
          '500': '#10b981',
          '600': '#059669',
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

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.016em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.009em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.007em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.005em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.002em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.002em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.009em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.014em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.017em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.020em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'apple': '12px',
        'apple-lg': '16px',
        'apple-xl': '20px',
      },

      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.16)',
        'apple-xl': '0 16px 64px rgba(0, 0, 0, 0.20)',
        'apple-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
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
        "apple-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          }
        },
        "apple-scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.98)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          }
        },
        "apple-slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          }
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          }
        }
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "apple-fade-in": "apple-fade-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "apple-scale-in": "apple-scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "apple-slide-up": "apple-slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "pulse-soft": "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      backdropBlur: {
        'apple': '20px',
      },

      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
