/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maskImage: {
        'custom-mask': "url('/src/assets/images/video-mask2.png')",
      },
    },
  },
  plugins: [],
}

