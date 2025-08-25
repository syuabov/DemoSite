/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jewelry-amber': {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        'jewelry-slate': {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '42': '10.5rem',
        '44': '11rem',
        '46': '11.5rem',
        '48': '12rem',
        '50': '12.5rem',
        '52': '13rem',
        '54': '13.5rem',
        '56': '14rem',
        '58': '14.5rem',
        '60': '15rem',
        '62': '15.5rem',
        '64': '16rem',
        '66': '16.5rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '76': '19rem',
        '78': '19.5rem',
        '80': '20rem',
        '82': '20.5rem',
        '84': '21rem',
        '86': '21.5rem',
        '88': '22rem',
        '90': '22.5rem',
        '92': '23rem',
        '94': '23.5rem',
        '96': '24rem',
        '98': '24.5rem',
        '100': '25rem',
      }
    },
  },
  plugins: [],
}
