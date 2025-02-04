'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { isNil } from 'lodash';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Links } from '@/utils/constants';
import { Lotties } from '@/assets/lotties';
import { analytics } from '@/utils/analytics';
import { useSearchParams } from 'next/navigation';

type LinkIconProps = { iconUri: string; alt: string; link: string };

const LinkIcons: React.FC<LinkIconProps> = props => {
  return (
    <a
      href={props.link}
      onClick={() => analytics.track('lint_clicked', { type: props.link })}
      target={'_blank'}
      rel="noreferrer"
    >
      <div className={'relative w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]'}>
        <Image src={props.iconUri} fill={true} alt={props.alt} className={'dark:invert-[1] object-contain'} />
      </div>
    </a>
  );
};

const HeroContent = () => {
  const params = useSearchParams();
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const [lottie, setLottie] = useState<DotLottie | null>(null);

  useEffect(() => {
    const referrer = params.get('referrer');
    analytics.track('page_viewed', { referrer: referrer ?? 'nil' });
  }, [params]);

  useEffect(() => {
    // if references are nil, return
    if (isNil(lottieRef?.current)) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          lottie?.play();
        }
      },
      { rootMargin: '-25%' },
    );

    observer.observe(lottieRef.current!);
    lottie?.play();

    return () => observer.disconnect();
  }, [lottie]);

  return (
    <div className={'h-[100vh] grid items-center'}>
      <div>
        <div ref={lottieRef}>
          <DotLottieReact
            dotLottieRefCallback={setLottie}
            className={'h-[64px] w-[64px] mb-6'}
            src={Lotties.HELLO}
            autoplay
          />
        </div>
        <h1 className={'text-3xl font-bold text-pink-600 dark:text-pink-400'}>
          <span className={'font-normal text-black dark:text-white'}>I&apos;m</span> Saurabh Kumar Suryan
        </h1>
        <p className={'text-base dark:text-gray-300 font-light'}>
          a tinkerer, perfectionist, who loves over engineering & building beautiful UIs{' '}
          <br className={'hidden md:block'} />
          often found sipping chai over good music
        </p>

        <div className={'flex gap-8 mt-6 items-center'}>
          {Links.map(link => (
            <LinkIcons key={link.iconUri} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
