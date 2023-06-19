/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      pokemonRed: '#ff1f1f',
      pokemonPurple: '#363b81',
      pokemonPurpleLight: '#4958c7',
      pokemonBlue: '#5db9ff',
      pokemonBlueLight: '#90d2ff',
      pokemonBlueLighter: '#bde3ff',
      pokemonBlueDark: '#3599fc',
      pokemonBlueDarker: '#1f7af1',
      pokemonYellow: '#fbd743',
      pokemonYellowDark: '#fac725',
      pokemonYellowDarker: '#f4a70c',
      pokemonYellowLight: '#fcea8b',
      fire: '#ee8130',
      normal: '#a8a77a',
      water: '#6390f0',
      electric: '#f7d02c',
      grass: '#7ac74c',
      poison: '#a33ea1',
      fairy: '#d685ad',
      fairyLight: '#f2d8e6'
    },
    extend: {
      fontFamily: {
        'fuzzyBubbles': ['Fuzzy Bubbles', 'sans-serif']
      },
      scale: {
        '200': '2',
        '250': '2.5',
        '300': '3'
    }
  },
  plugins: [],
}
}