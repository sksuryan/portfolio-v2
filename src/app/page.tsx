import React from 'react';
import HeroContent from '@/app/components/HeroContent';
import Experience from '@/app/components/Experience';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={'xl:mx-auto max-w-[1080px] px-8'}>
      <HeroContent />
      <Experience />
      <Footer />
    </div>
  );
}
