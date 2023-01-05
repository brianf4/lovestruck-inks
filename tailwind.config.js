/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'minmq-2xl': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }

      'minmq-xl': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }

      'minmq-lg': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'minmq-md': {'min': '767px'},
      // => @media (min-width: 767px) { ... }

      'minmq-sm': {'min': '639px'},
      // => @media (min-width: 639px) { ... }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
}
