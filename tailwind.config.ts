import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#03ABC2',
        'secondary': '#FDB913',
        'thirdcolor': '#f0f9ff',
      },
      fontFamily: {
        'blinker': ['Blinker', 'sans-serif'], // Add Blinker font
      },
    },
  },
  plugins: [
    lineClamp, 
  ],
};

export default config;
