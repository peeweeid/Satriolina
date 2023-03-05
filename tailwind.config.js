/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      screens : {
        '2xl' : '1320px',
      },
      colors : {
        primary : '#628DAF',
        secondary : '#E4EDF6',
        third : '#CFE1F3',
        fourth : '#F6FBFF'
        
      },
      fontFamily :{
        'Authentic' : 'Authentic',
        'Georgia' : 'Georgia',
      }
      
    },
  },
  plugins: [],
}
