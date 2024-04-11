/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'aliceblue': '#F0F8FF',
        'skyblue': 'rgb(135, 206, 235)',
        'otherblue': '#088F8F',
        'notsoblack': 'rgb(25, 25, 112)',
        'matteblack': 'rgb(40, 40, 43)',
        'teal': '#025043',
        'notsowhite' : '#EOD9CB'
      },
    },
  },
  plugins: [],
}

