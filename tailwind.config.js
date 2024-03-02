/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      'gold': {
        'default': '#ffd700',
        '50': '#ffffe7',
        '100': '#feffc1',
        '200': '#fffd86',
        '300': '#fff441',
        '400': '#ffe60d',
        '500': '#ffd700',
        '600': '#d19e00',
        '700': '#a67102',
        '800': '#89580a',
        '900': '#74480f',
        '950': '#442604',
      },

      'mandy': {
        'defaulf': '#f27a8a',
        '50': '#fef2f3',
        '100': '#fde6e7',
        '200': '#fbd0d5',
        '300': '#f7aab2',
        '400': '#f27a8a',
        '500': '#ea546c',
        '600': '#d5294d',
        '700': '#b31d3f',
        '800': '#961b3c',
        '900': '#811a39',
        '950': '#48091a',
      },
      'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
      'zircon': {
        '50': '#eef1fa',
        '100': '#e7ebf8',
        '200': '#d4daf1',
        '300': '#b9c2e8',
        '400': '#9ca3dd',
        '500': '#8386d1',
        '600': '#6e6ac1',
        '700': '#5e59a9',
        '800': '#4d4a89',
        '900': '#42416e',
        '950': '#282640',
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: theme => ({
        'background': "url('/public/background.png')",
      }),
      fontFamily: {
        'im-fell': ['var(--font-imFell)'],
        'dancing': ['var(--font-dancing)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}