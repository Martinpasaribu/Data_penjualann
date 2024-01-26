/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.5s ease-in-out',
      },
      fontFamily: {
        'linkstyle': ['Linkstyle', 'sans-serif',],
        'gaya-apa' : ['Robot']
        
      },
      backgroundImage:{
        'cats': 'url(/src/assets/bg-kerja.jpg)'
      },
      height: {
        'h1': '4rem', // Ganti dengan nilai tinggi yang diinginkan
      },
      colors: {
        blue: '#3490dc', // Atau kode warna biru yang Anda inginkan
        ijo:  '#527853',
        cokelat: '#5c5a5a',
        kuning:"#F4E0B9",
        ungukeren:"#5451FFC5",
        pinkungu: "#A259FF",
        kuning: "#F8F41B",
        red2: "#CE1C1C"
        
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '26': '1rem', // Untuk menyesuaikan ukuran sesuai kebutuhan
      },
      transitionDuration: {
        '3000': '3000ms',
        '6000': '10000ms', // Atur durasi transisi menjadi 3000ms (3 detik)
      },
      scrollBehavior: {
        smooth: 'smooth',
      },

    }
  },
  plugins: [
    
  ],
}

