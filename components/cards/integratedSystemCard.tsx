'use client';

export default function IntegratedSystemCard({
  date,
  subTitle,
  title,
  description,
  footer,
}: {
  date: string;
  title: string;
  description: string;
  subTitle: string;
  footer: string;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 lg:col-span-4 py-4 px-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='flex gap-1 mb-4'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.16549 7.29033V10.357C9.16549 10.6487 9.32383 10.9237 9.57383 11.0737L12.1738 12.6153C12.4738 12.7903 12.8572 12.6903 13.0322 12.3987C13.2072 12.0987 13.1155 11.7153 12.8155 11.5403L10.4238 10.1153V7.282C10.4155 6.94867 10.1322 6.66533 9.79049 6.66533C9.44883 6.66533 9.16549 6.94867 9.16549 7.29033ZM17.4988 7.91533V3.507C17.4988 3.132 17.0488 2.94867 16.7905 3.21533L15.3072 4.69867C13.7988 3.19033 11.6488 2.32367 9.29883 2.532C5.80716 2.84867 2.93216 5.657 2.54883 9.14867C2.04883 13.6653 5.57383 17.4987 9.99883 17.4987C13.8238 17.4987 16.9822 14.632 17.4405 10.932C17.4988 10.432 17.1072 9.99867 16.6072 9.99867C16.1905 9.99867 15.8405 10.307 15.7905 10.7153C15.4322 13.6237 12.9238 15.8737 9.91549 15.832C6.82383 15.7903 4.21549 13.182 4.16549 10.082C4.11549 6.832 6.75716 4.16533 9.99883 4.16533C11.6072 4.16533 13.0655 4.82367 14.1238 5.87367L12.3822 7.61533C12.1155 7.882 12.2988 8.332 12.6738 8.332H17.0822C17.3155 8.332 17.4988 8.14867 17.4988 7.91533Z'
            fill='#52CCDE'
          />
        </svg>
        <h4 className='font-normal text-sm text-app-blue-gray-900'>{date}</h4>
      </header>
      <p className='text-xs font-normal text-app-blue-900'>{subTitle}</p>
      <div className='flex flex-col dark:border-slate-700'>
        <h2 className='font-semibold text-lg text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </div>
      <p className='text-sm font-normal text-app-blue-gray-500 mb-5 dark:text-slate-400'>
        {description}
      </p>
      <footer className="border-t border-t-app-blue-gray-50 pt-4">
        <p className="font-medium text-base text-app-text-base-900">{footer}</p>
      </footer>
    </div>
  );
}
