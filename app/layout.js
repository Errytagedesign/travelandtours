import './globals.css';
import { Outfit } from 'next/font/google';
import NavBar from '@/Components/Navbar/NavBar';
import Footer from '@/Components/Footer/Footer';
import AOSAnimation from '@/utils/AosInit';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Destiny Travels and Tours',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}