/** @type {import('tailwindcss').Config} */
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
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        expand: 'expand 0.2s ease-out forwards'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      animation: ['hover'],
    }
  },
  plugins: [],
}