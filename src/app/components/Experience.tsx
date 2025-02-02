'use client';

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Stepper from '@/app/components/Stepper';
import { useRemarkSync } from 'react-remark';

import { ExperienceData } from '@/utils/constants';

type Props = {
  companyName: string;
  position: string;
  duration: string;
  details: string;
};

const ExperienceStepperContent: React.FC<Props> = props => {
  const [expand, setExpand] = useState(false);

  const [height, setHeight] = useState(0);
  const detailsDiv: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (detailsDiv.current?.clientHeight) {
      setHeight(detailsDiv.current.clientHeight);
    }
  }, []);

  const details = useRemarkSync(props.details, {
    rehypeReactOptions: {
      components: {
        li: ({
          children,
          className,
          ...rest
        }: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
          <li className={clsx(className, 'font-thin [&_strong]:font-semibold')} {...rest}>
            {'✨'} {children}
          </li>
        ),
      },
    },
  });

  return (
    <div className={'pb-14'}>
      <div className={'cursor-pointer'} onClick={() => setExpand(state => !state)}>
        <h3 className={'text-lg font-semibold text-gray-950 dark:text-gray-50'}>{props.companyName}</h3>
        <p className={'text-base font-light text-gray-700 dark:text-gray-300'}>
          {props.position} | {props.duration}
        </p>
      </div>
      <div
        className={'overflow-hidden transition-all ease-out duration-200'}
        style={{ height: expand ? `${height}px` : '0px' }}
      >
        <div ref={detailsDiv} className={'text-gray-900 dark:text-gray-100 pt-3 text-base'}>
          {details}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const stepperData = ExperienceData.map((i, k) => ({
    content: <ExperienceStepperContent {...i} />,
    isActive: k === 0,
    isDone: false,
  }));

  return (
    <div className={'h-[100vh]'}>
      <h1 className={'text-2xl font-bold dark:text-gray-100'}>experience</h1>
      <div className={'mt-8'}>
        <Stepper data={stepperData} />
      </div>
    </div>
  );
};

export default Experience;
