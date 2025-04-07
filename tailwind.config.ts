
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        dragon: {
          black: '#0A0A0A',
          navy: '#1A1F2C',
          red: '#E63946',
          orange: '#F97316',
          fire: '#FF6B35',
          cream: '#FFF3B0',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "flame": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        "pulse-fire": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 107, 53, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(255, 107, 53, 0)" },
        },
        "fadeIn": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fadeOut": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "flame": "flame 2s ease-in-out infinite",
        "pulse-fire": "pulse-fire 2s infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-out": "fadeOut 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      backgroundImage: {
        'fire-gradient': 'linear-gradient(to right, #F97316, #E63946)',
        'dark-gradient': 'linear-gradient(to bottom, #1A1F2C, #0A0A0A)',
        'glow-gradient': 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0) 70%)',
      },
      boxShadow: {
        'fire': '0 0 15px 5px rgba(255, 107, 53, 0.3)',
        'fire-lg': '0 0 30px 10px rgba(255, 107, 53, 0.2)',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
