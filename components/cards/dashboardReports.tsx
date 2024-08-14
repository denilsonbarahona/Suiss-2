'use client';

export default function DashboardReports({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 lg:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='flex flex-col gap-5 px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <Icon />
        <h2 className='font-semibold text-lg text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      <main className='h-full flex flex-col justify-between px-5 py-4 dark:border-slate-700'>
        <p className='text-sm font-normal text-app-blue-gray-500 mb-5 dark:text-slate-400'>
          {description}
        </p>
        <div>
          <button className='btn bg-app-light-blue-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap'>
            Ver Informe
          </button>
        </div>
      </main>
    </div>
  );
}
