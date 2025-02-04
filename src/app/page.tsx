'use client';

import React, { Suspense } from 'react';
import HeroContent from '@/app/components/HeroContent';
import Experience from '@/app/components/Experience';
import Footer from './components/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Lotties } from '@/assets/lotties';

export default function Home() {
  return (
    <Suspense fallback={<DotLottieReact src={Lotties.HELLO} />}>
      <div className={'xl:mx-auto max-w-[1080px] px-8'}>
        <HeroContent />
        <Experience />
        <Footer />
      </div>
    </Suspense>
  );
}
