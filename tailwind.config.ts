import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "photo": "url('../../public/primeira_foto.png')",
      },
      // backgroundSize: {
      //   "70%": "70%"
      // },
      colors: {
        "azul-escuro": "#011F38",
        "azul-semi-escuro": "#042e51",
        "verde": "#40BD52",
      }
    },
  },
  plugins: [],
}
export default config
