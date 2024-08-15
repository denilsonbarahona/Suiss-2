'use client';

export default function GovernmentActionAreas({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className='h-full flex flex-col col-span-full sm:col-span-6 lg:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='flex flex-col items-center gap-2 px-5 pt-4 pb-2'>
        <Icon />
        <h2 className='text-center font-semibold text-lg text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      <main className='h-full flex flex-col justify-between px-5 pt-0 pb-4 dark:border-slate-700'>
        <p className='text-sm font-normal text-app-blue-gray-500 mb-5 dark:text-slate-400'>
          {description}
        </p>
        <div className='flex justify-center'>
          <button className='btn bg-transparent shadow-none text-app-blue-gray-900  hover:bg-app-light-blue-200 dark:hover:bg-indigo-600 dark:text-white whitespace-nowrap'>
            Ver más
            <svg
              className='ml-2'
              width='11'
              height='6'
              viewBox='0 0 11 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.2458 2.33591H0.905802C0.539136 2.33591 0.239136 2.63591 0.239136 3.00257C0.239136 3.36924 0.539136 3.66924 0.905802 3.66924H8.2458V4.86257C8.2458 5.16257 8.6058 5.30924 8.81247 5.09591L10.6658 3.23591C10.7925 3.10257 10.7925 2.89591 10.6658 2.76257L8.81247 0.902575C8.6058 0.689242 8.2458 0.842575 8.2458 1.13591V2.33591Z'
                fill='#52CCDE'
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
