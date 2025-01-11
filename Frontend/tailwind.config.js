/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"]
      },
      colors: {
        customGray: '#535766', 
      },
      screens: {
        'custom': '905px', 
        'custom2': '805px',
        'custom3': '520px',
        'custom4': '705px',
        'custom5': '560px',
        'custom6': '576px',
      },
    },
  },
  plugins: [],
}