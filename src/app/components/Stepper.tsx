import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type StepperContent = {
  isActive?: boolean;
  isDone?: boolean;
  content: React.ReactNode;
};

type StepperItemProps = PropsWithChildren<{
  isActive?: boolean;
  isDone?: boolean;
  isLast: boolean;
}>;

const StepperItem: React.FC<StepperItemProps> = props => {
  return (
    <div className={'flex gap-6'}>
      <div className={'flex flex-col items-center'}>
        <span
          className={clsx(
            'block w-[12px] h-[12px] rounded-full',
            props.isActive
              ? 'bg-emerald-600 dark:bg-emerald-400'
              : props.isDone
                ? 'bg-emerald-600 dark:bg-emerald-400'
                : 'bg-gray-600 dark:bg-gray-400',
          )}
        />
        {props.isLast ? null : <div className={'w-[1px] flex flex-1 bg-gray-300 dark:bg-gray-700'} />}
      </div>
      {props.children}
    </div>
  );
};

type Props = {
  data: Array<StepperContent>;
};

const Stepper: React.FC<Props> = props => {
  return (
    <div>
      {props.data.map((item, key, arr) => (
        <StepperItem key={key} isActive={item.isActive} isDone={item.isDone} isLast={key === arr.length - 1}>
          {item.content}
        </StepperItem>
      ))}
    </div>
  );
};

export default Stepper;
