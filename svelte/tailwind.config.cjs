module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: [
    "./src/**/*.svelte",
    "./src/**/**/*.svelte"
  ],
  darkMode: 'class',
  theme: {
    colors:{
      blue: '#80a8cf',
      light_blue: '#80a8cf',
      dark_blue: '#305880',
      green_blue: '#308080',
      green_blue_light: '#80a8a8',
      green: '#30CF30',
      orange: '#cf8030',
      yellow: '#CFCF30',
      red: '#CF3030',
      purple: '#803080',
      dark: '#303030',
      light: '#cfcfcf',
      dark_gray:'#424242',
      light_gray:'#bdbdbd',
      border_light: 'rgba(255,255,255,.62)',
      border_dark: 'rgba(0,0,0,.38)',
      trans_light: 'rgba(255,255,255,.64)',
      trans_dark: 'rgba(0,0,0,.62)',
      trans_dark_gray: 'rgba(48,48,48,0.62)',
      trans_gray: 'rgba(48,48,48,.38)',
      gray: {
        900: '#151515',
        800: '#303030',
        700: '#424242',
        600: '#535353',
        500: '#888888',
        400: '#9a9a9a',
        300: '#acacac',
        200: '#bdbdbd',
        100: '#cfcfcf',
        50: '#e7e7e7',
      }
    },
      fontFamily: {
        'text': ['bariolregular', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'title': ['plan9regular', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'mono': ['gomono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
    extend: {
      backgroundImage: theme => ({
        'grunge': "url('https://s.okno.rs/img/grunge.png')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
