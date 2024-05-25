import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backGround: "#140e1a",
        titleBlue: "#5bcefa",
        titleCream: "#f4d06f",
        titleGreen: "#a2faa3",
        titlePink: "#f5a9b8",
        titlePurple: "#b57edc"
      }
    },

  },
  plugins: [],
};
export default config;
