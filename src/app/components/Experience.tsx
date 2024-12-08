'use client';

import React, { useEffect, useRef, useState } from 'react';
import Stepper from '@/app/components/Stepper';
import { ExperienceData } from '@/utils/constants';
import { useRemarkSync } from 'react-remark';
import clsx from 'clsx';

type Props = {
  companyName: string;
  position: string;
  duration: string;
  details: string;
};

const ExperienceStepperContent: React.FC<Props> = props => {
  const [expand, setExpand] = useState(false);
  const isMounted = useRef(false);

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

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div className={'pb-14 transition-all'}>
      <div className={'cursor-pointer'} onClick={() => setExpand(state => !state)}>
        <h3 className={'text-lg font-semibold text-gray-950 dark:text-gray-50'}>{props.companyName}</h3>
        <p className={'text-base font-light text-gray-700 dark:text-gray-300'}>
          {props.position} | {props.duration}
        </p>
      </div>
      <div
        className={clsx('text-gray-900 dark:text-gray-100 mt-3 text-base overflow-hidden transition-all', {
          'max-h-[100%]': expand,
          'max-h-0': !expand && isMounted.current,
        })}
      >
        {details}
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
