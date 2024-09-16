import './globals.css';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
// import StyledComponentsRegistry from '@/lib/AntdRegistry';

export const metadata = {
  title: 'Your Online Learning Platform | EduVerse',
  description:
    'EduVerse is an online learning platform that offers flexible courses in web development, data science, graphic design, and more. Start your learning journey today!',
  keywords:
    'online learning, e-learning, web development, data science, graphic design, flexible courses',
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body className={poppins.className}>{children}</body>
  </html>
);

export default RootLayout;
