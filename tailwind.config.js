/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app.js"
  ],
  theme: {
    extend: {
      colors: {
        sand: '#fbfaf7',
        'sand-light': '#f5f3ec',
        mint: '#e3f0e6',
        sky: '#deeff2',
        cream: '#f6eee3',
        rose: '#fceeed',
        'forest-dark': '#03363d',
        'forest-deep': '#02252a',
        'forest-medium': '#17494f',
        'text-primary': '#03363d',
        'text-secondary': '#486266',
        'coral-accent': '#e96d46',
        'yellow-accent': '#f8c544',
        'mint-accent': '#309e66',
        'blue-accent': '#24a1de'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
