/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
   
    extend: {
      screens: {
        'mob': '641px',
        // => @media (min-width: 640px) { ... }
  
        'tab': '769px',
        // => @media (min-width: 728px) { ... }

      }, 
    },
  },
  plugins: [],
}

