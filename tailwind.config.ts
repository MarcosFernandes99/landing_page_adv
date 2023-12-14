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
        "forms": "url('../../public/forms.jpg')",
        "logo": "url('../../public/logo.png')",
        "insta": "url('../../public/insta.png')",
        "face": "url('../../public/face.png')"
        
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
        "PowderBlue": "#B0E0E6"
      },
      spacing:{
        "50%": "50%"
      },
      boxShadow: {
        "3xl": "-50px 50px 27px rgb(30,242,204),"
      }
    },
  },
  plugins: [],
}
export default config
