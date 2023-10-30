// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#008080',
        cream: '#EBD8B2',
        lightBlue: '#6C9BCF',
        darkViolet: '#251539',
        purple: '#654E92',
      },
      backgroundImage: {
        'blue-purple': 'linear-gradient(to right, #3490dc, #9561e2)',
        'darkGrad1': 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
      },
    },
  },
  plugins: [],
};

