/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any custom folders you created for the lookbook!
  ],
  theme: {
    extend: {
      colors: {
        champagne: "#FAF6EE",
        'champagne-deep': "#F3EBE0",
        ink: "#2C2421",
        'ink-muted': "#4A3F3A",
        gold: "#D4AF37",
        'blush-light': "#F9EAE8",
        'blush-dark': "#B86A74",
      }
    },
  },
  plugins: [],
}
