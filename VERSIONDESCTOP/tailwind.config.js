/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      Video: {
      nutrition: "url('/img/hero-pattern.svg')",
       },
       backgroundImage:{
        Hero:"linear-gradient(#00ffff4d,#202222e0),url('/src/img/WhatsApp Image 2023-04-08 at 16.52.37.jpeg')",
        Saad:"linear-gradient(#00ffff4d,#202222e0)",
       },
       colors: {
        Zmet: 'linear-gradient(#00ffff4d,#202222e0)',
      },
    },
  },
  plugins: [],
}

