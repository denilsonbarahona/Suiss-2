'use client';

export default function FinancingSourcesCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className='h-full flex flex-col col-span-full sm:col-span-6 lg:col-span-4 bg-white dark:bg-slate-800 rounded-2xl dark:border dark:border-slate-700'>
      <header className='flex flex-col items-center gap-2 px-5 pt-4 pb-2'>
        <Icon />
        <h2 className='text-center font-semibold text-lg text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      <main className='h-full flex flex-col justify-between px-5 pt-0 pb-4 dark:border-slate-700'>
        <p className='text-sm font-normal text-center text-app-blue-gray-500 mb-5 dark:text-slate-400'>
          {description}
        </p>
      </main>
    </div>
  );
}
