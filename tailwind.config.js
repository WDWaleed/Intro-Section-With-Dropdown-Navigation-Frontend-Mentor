/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hamburger: "url('/images/icon-menu.svg')",
        X: "url('/images/icon-close-menu.svg')",
        HeroDesktop: "url('/images/image-hero-desktop.png')",
        HeroMobile: "url('/images/image-hero-mobile.png')",
      },
      screens: {
        custom: "800px",
      },
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        custom: "18px",
      },
    },
  },
  plugins: [],
};
