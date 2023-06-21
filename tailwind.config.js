/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-header': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
        'gradient-back':
          `linear-gradient(0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.9) 30%,
            rgba(0, 0, 0, 0.85) 50%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(255, 255, 255, 0) 100%)`
      },
      gridTemplateColumns: {
        'container': '1fr minmax(480px, 94%) 1fr'
      },
      gridTemplateRows: {
        'container': '80px auto 50px'
      }
    },
  },
  plugins: [],
}
