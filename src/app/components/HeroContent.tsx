'use client';

import React from 'react';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { HI_ICON_URI, Links } from '@/utils/constants';

type LinkIconProps = { iconUri: string; alt: string; link: string };

const LinkIcons: React.FC<LinkIconProps> = props => {
  return (
    <a href={props.link} target={'_blank'} rel="noreferrer">
      <div className={'relative w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]'}>
        <Image src={props.iconUri} fill={true} alt={props.alt} className={'dark:invert-[1] object-contain'} />
      </div>
    </a>
  );
};

const HeroContent = () => {
  return (
    <div className={'h-[100vh] grid items-center'}>
      <div>
        <DotLottieReact autoplay loop className={'h-[64px] w-[64px] mb-6'} src={HI_ICON_URI} />

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
