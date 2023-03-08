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
        'GeorgiaI' : 'GeorgiaI',
      },
      backgroundImage: {
        'wallwed': "url('../public/wallwed1.jpg')",
        'wallwed1': "url('../public/wallwed2.jpg')",
        'wallwed2': "url('../public/wallwed3.jpg')",
       
        
      },
      
    },
  },
  plugins: [],
}
