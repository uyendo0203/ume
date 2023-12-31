import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      test: '13 / 5',
      team: '3 / 4',
      homebanner: '2 / 3',
    },
    colors: {
      "black": "#000",
      "white": "#fff",
      "orange": "#ee5f38",
      "yellow-dark": "#378265"
      // "yellow-dark": "#1751a3"
      // "yellow-dark": "#e6bd0f"
    },
  },
  plugins: [require("daisyui")],
}
export default config


