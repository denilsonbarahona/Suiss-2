import Link from 'next/link';

type AnalyticsType = {
  title: string;
  headers: Array<string>;
  rows: RowType[];
  hideFooter?: boolean;
};

type RowType = {
  title: string;
  number: string;
};

export default function SuissAnalytics({ data }: { data: AnalyticsType }) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-medium text-base text-app-blue-gray-900 dark:text-slate-100'>
          {data.title}
        </h2>
      </header>
      <div className='grow p-3'>
        <div className='flex flex-col h-full'>
          {/* Card content */}
          <div className='grow'>
            <ul className='flex justify-between text-xs uppercase text-slate-400 dark:text-slate-500 font-normal px-2 space-x-2'>
              {data.headers.map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </ul>

            <ul className='space-y-1 text-sm text-slate-800 dark:text-slate-100 mt-3 mb-4'>
              {/* Item */}
              {data.rows.map((row, index) => (
                <li key={index} className='relative px-2 py-1'>
                  <div
                    className='absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30'
                    aria-hidden='true'
                    style={{ width: row.number }}
                  ></div>
                  <div className='relative flex justify-between space-x-2'>
                    <div className='font-normal text-sm text-app-blue-gray-900 dark:text-white'>
                      {row.title}
                    </div>
                    <div className='font-semibold text-sm text-app-blue-gray-900 dark:text-white'>
                      {row.number}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Card footer */}
          {!data.hideFooter && (
            <div className='text-center pt-4 pb-1 border-t border-slate-100 dark:border-slate-700'>
              <Link
                className='text-xs font-semibold text-app-blue-gray-900 hover:text-indigo-600 dark:hover:text-indigo-400'
                href='#0'
              >
                Ver todas las áreas -&gt;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
