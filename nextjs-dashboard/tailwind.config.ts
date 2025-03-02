import { heroui } from '@heroui/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/(input|radio|toggle|form).js',
  ],
  theme: {
    fontFamily: {
      kinutamarumin: ['kinuta-maruminfuji-stdn', 'serif'],
      dnpshueigothic: ['dnp-shuei-gothic-gin-std', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), heroui()],
  important: true,
}
export default config
