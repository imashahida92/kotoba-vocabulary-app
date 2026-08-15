/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        washi: '#F6F1E4',
        washiDark: '#EDE5D0',
        sumi: '#1E1B18',
        ai: '#22436B',
        aiDark: '#152C48',
        shu: '#C8433C',
        shuDark: '#A6362F',
        gold: '#D4A017',
        matcha: '#5B7B5A',
      },
      fontFamily: {
        display: ['"Shippori Mincho"', 'serif'],
        jp: ['"Noto Serif JP"', 'serif'],
        body: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      backgroundImage: {
        'seigaiha': "radial-gradient(circle at 50% 120%, transparent 0, transparent 22px, rgba(34,67,107,0.06) 23px, rgba(34,67,107,0.06) 24px, transparent 25px)",
      },
    },
  },
  plugins: [],
}
