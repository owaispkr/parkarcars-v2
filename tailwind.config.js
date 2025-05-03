/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        toyota: "url(/assets/Makers/toyota.jpg)",
        honda: "url(/assets/Makers/honda.jpg)",
        mazda: "url(/assets/Makers/mazda.jpg)",
        nissan: "url(/assets/Makers/nissan.jpg)",
        subaru: "url(/assets/Makers/subaru.jpg)",
      },
    },
  },
  plugins: [],
};
