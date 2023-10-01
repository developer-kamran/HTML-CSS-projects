'use client';
import Header from './sections/base/Header';
import Footer from './sections/base/Footer';
import Hero from './sections/Hero';
import Statistics from './sections/Statistics';
import Features from './sections/Features';
import Categories from './sections/Categories';
import Courses from './sections/Courses';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

export default function Home() {
  return (
    <main className='px-5 lg:px-40'>
      <Header />
      <Hero />
      <Statistics />
      <Features />
      <Categories />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
