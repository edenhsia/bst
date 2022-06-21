const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['fill-current', 'stroke-current'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1248px',
        '2xl': '1536px',
      },
      padding: '1.5rem',
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: {
        DEFAULT: '#D68F4C',
        light: '#DFAD77',
        lighter: '#DFAD771A',
      },
      secondary: {
        DEFAULT: '#DBBB76',
        light: '#F2EEE6',
        lighter: '#F0EDE8',
      },
      gray: {
        lighter: '#F2F2F2',
        light: '#1313131A',
        DEFAULT: '#1313134D',
        dark: '#505050',
        darker: '#131313',
      },
    },
    boxShadow: {
      DEFAULT: '0px 4px 32px -8px rgba(172, 172, 172, 0.2)',
      none: '0 0 #0000',
    },
    extend: {
      fontFamily: {
        optima: ['optima', ...defaultTheme.fontFamily.serif],
        'optima-bold': ['optima-bold', ...defaultTheme.fontFamily.serif],
        inter: ['inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
