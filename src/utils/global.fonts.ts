import localFont from 'next/font/local';

const poppinsRegular = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-poppinsRegular',
  preload: true
});

export { poppinsRegular };