import {CheckIcon, ClockIcon} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function IsAdult({adult}: { adult: boolean }) {
  const adultString = adult ? 'あり' : 'なし'
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-xl md:rounded-full px-2 py-1 text-xs',
        {
          'bg-red-500 text-white': adult,
          'bg-green-500 text-white': !adult,
        },
      )}
    >
      {adult ? (
        <>
          {adultString}
          <ClockIcon className="ml-1 w-4 text-white"/>
        </>
      ) : null}
      {!adult ? (
        <>
          {adultString}
          <CheckIcon className="ml-1 w-4 text-white"/>
        </>
      ) : null}
    </span>
  );
}
