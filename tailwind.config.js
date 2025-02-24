const { nextui } = require('@nextui-org/theme');
const tailwindcssTextshadow = require('tailwindcss-textshadow');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "// Ruta correcta de los componentes de NextUI",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-digital)', 'sans-serif'],
      },
      textShadow: {
        'custom-glow-green': '0 0 1px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.7), 0 0 40px rgba(0, 255, 0, 0.7)',
        'custom-glow-blue': '0 0 1px rgba(0, 0, 255, 0.7), 0 0 10px rgba(0, 0, 255, 0.7), 0 0 40px rgba(0, 0, 255, 0.7)',
        'custom-glow-red': '0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.9), 0 0 20px rgba(255, 0, 0, 1)',
      },
    },
  },
  darkMode: "class",
 plugins: [
    tailwindcssTextshadow,
    nextui(),
  ],
};


