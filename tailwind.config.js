module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Or if using `src` directory
  ],
  theme: {
    extend: {
      width: {
        '52vw': '52vw', // Custom class for 52% viewport width
      },  padding: {
        '80px': '80px',
      },
    colors:{
      footer:"#151B20", 
      upperfooter:"#2A3036"
    },
    },
  },
  plugins: [],
};
