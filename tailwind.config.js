const { join } = require('path');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fill-in': {
          '0%': { width: '0px' },
          '100%': { width: '100%' },
        },
        'fill-out': {
          '0%': { width: '100%' },
          '100%': { width: '0px' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'flip-front': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'flip-back': {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
      animation: {
        'fill-in': 'fill-in 1s ease-in-out 1 forwards',
        'fill-out': 'fill-out 1s ease-in-out 1 forwards',
        'slide-in': 'slide-in 1s ease-in-out 1 forwards',
        'slide-out': 'slide-out 1s ease-in-out 1 forwards',
        'fade-in': 'fade-in 1s ease-in-out 1 forwards',
        'fade-out': 'fade-out 1s ease-in-out 1 forwards',
        'flip-front': 'flip-front 1s ease-in-out 1 forwards',
        'flip-back': 'flip-back 1s ease-in-out 1 forwards',

      },
      transitionProperty: {
        width: "width",
        padding: "padding",
        color: "color",
        marginLeft: "marginLeft",
        opacity: "opacity"
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('current', '&.active');
    })
],
};