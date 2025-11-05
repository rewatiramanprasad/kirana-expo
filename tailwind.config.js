// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./App.{js,jsx}', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.js', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4', // bright cyan for buttons and highlights
        secondary: '#0E2A35', // deep bluish-gray for cards and secondary elements
        tertiary: '#050E14', // dark navy for main background
        background: '#0f1724', // matches tertiary for consistency
        text: '#FFFFFF', // main text color
        mutedText: '#9AA8B2', // lighter gray-blue for labels and placeholders
        border: '#1f2a44',
        cardBackground: '#0b2233', // subtle card color
        input: '#111827',
      },
    },
  },
  plugins: [],
}
