const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      keyframes: {
        slideWithPause: {
          '0%, 16.66%': { transform: 'translateX(0%)' },         // First image: Pause at 0%
          '33.33%, 49.99%': { transform: 'translateX(-33.33%)' },  // Second image: Pause at -100%
          '66.66%, 83.33%': { transform: 'translateX(-66.66%)' },  // Third image: Pause at -200%
          '100%': { transform: 'translateX(0%)' },               // Back to first image
        },
      },
      animation: {
        'slide-infinite-pause': 'slideWithPause 9s ease-in-out infinite'  // 6s total, 2s per slide (1s for sliding + 1s for pause)
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

