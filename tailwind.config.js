/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg": "#FEEDBC",
        "blue": "#0052B4",
        "dark": "#262626",
        "light-0": "#FFF1C9",
        "light-2": "#FFE18B",
        "light-3": "#D3B970",
        "light-4": "#FFBB45",
        "red": "#D80027",
        "yellow": "#F9B800",
      },
      padding: {
        "22px": "1.375rem",
        "30px": "1.875rem",
        "50px": "3.125rem",
        "60px": "3.75rem",
        "68px": "4.25rem",
        "72px": "4.5rem",
        "90px": "5.625rem",
      },
      gap: {
        "7px": "0.438rem",
        "14px": "0.875rem",
      },
      fontSize: {
        "4rem": "4rem",
        "5rem": "5rem",
      },
      lineHeight: {
        "48px": "3rem",
        "90px": "5.625rem",
      },
      width: {
        "350px": "21.875rem",
        "375px": "23.438rem",
        "1040px": "60rem",
        "1600px": "100rem",
      },
      screens: {
        // "mobile": "320px",
        "tablet": "375px",
        "laptop": "1040px",
        "desktop": "1920px",
      },
    },
  },
  plugins: [],
};
