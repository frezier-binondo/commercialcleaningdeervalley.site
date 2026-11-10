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
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a4f8',
          500: '#0e86e9',
          600: '#0268c7',
          700: '#0352a1',
          800: '#074684',
          900: '#0b3b6e',
          950: '#072447',
        },
        navy: {
          800: '#112233',
          900: '#0a1726',
          950: '#060e19',
        },
        accent: {
          DEFAULT: '#0284c7',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
    },
  },
  plugins: [],
};
export default config;
