module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './public/html/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      custom: {
        dark: '#1C2129',
        darkgray: '#474747',
        lightgray: '#F2F3F5',
        white: '#FFFFFF',
        red: '#F05742',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  enabled: true
}
