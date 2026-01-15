/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        work: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 10px 35px -4px rgba(67, 83, 255, 0.15), 0px 1.5px 4px -1px rgba(67, 83, 255, 0.2)',
      },
      textColor: {
        'black-500': '#000000',
      },
    },
  },
}
