/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      colors: {
        'bg-header': {
          light: '#20232a',
          DEFAULT: '#20232a',
          dark: '#20232a',
        },
        'react': {
          light: '#61DAFB',
          DEFAULT:  '#61DAFB',
          dark:  '#61DAFB',
        },
        'reacte': {
          light: '#282c34',
          DEFAULT: '#282c34',
          dark:  '#282c34',
        },
      }
     
    },
  },
  plugins: [],
}

