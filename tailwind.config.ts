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
        "photo_header": "url('../../public/primeira_foto.png')",
        "photo": "url('../../public/segunda_foto.png')",
        "photo_about": "url('../../public/terceira_foto.jpg')",
      },
      // backgroundSize: {
      //   "70%": "70%"
      // },
      colors: {
        "azul-escuro": "#011F38",
        "azul-semi-escuro": "#042e51",
        "verde": "#40BD52",
        "dourado": "#E8CD88",
        "azul-claro": "#00919B",
      },
      spacing:{
        "50%": "50%"
      }
    },
  },
  plugins: [],
}
export default config
