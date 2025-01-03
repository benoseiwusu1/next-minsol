import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#79513c",
        secondary: "#f5c614",
        blu: "#1e2b4b",
        grey: "#757575",
        accent: "#e7ebf3",
      },
    },
  },
  plugins: [],
};
export default config;
