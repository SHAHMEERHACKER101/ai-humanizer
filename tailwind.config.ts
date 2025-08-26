import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "neon-blue": "var(--neon-blue)",
        "neon-purple": "var(--neon-purple)",
        "electric-blue": "var(--electric-blue)",
        "cyber-black": "var(--cyber-black)",
        "cyber-gray": "var(--cyber-gray)",
        "dark-gray": "var(--dark-gray)",
      },
      fontFamily: {
        jetbrains: ["var(--font-jetbrains)"],
        segoe: ["var(--font-segoe)"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "grid-move": "grid-move 20s linear infinite",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "from": { "box-shadow": "0 0 20px var(--neon-blue)" },
          "to": { "box-shadow": "0 0 40px var(--neon-blue), 0 0 60px var(--neon-blue)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "grid-move": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" }
        },
        "cyber-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
