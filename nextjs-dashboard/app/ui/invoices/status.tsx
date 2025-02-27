import {CheckIcon, ClockIcon} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function IsAdult({adult}: { adult: number }) {
  const adultString = adult === 0 ? 'なし' : 'あり'
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-red-500 text-white': adult === 1,
          'bg-green-500 text-white': adult === 0,
        },
      )}
    >
      {adult === 1 ? (
        <>
          {adultString}
          <ClockIcon className="ml-1 w-4 text-white"/>
        </>
      ) : null}
      {adult === 0 ? (
        <>
          {adultString}
          <CheckIcon className="ml-1 w-4 text-white"/>
        </>
      ) : null}
    </span>
  );
}
