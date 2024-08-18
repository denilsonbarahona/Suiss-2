'use client';

export default function FinancingDetailCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: Array<string>;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className='h-full flex flex-col col-span-full sm:col-span-6 lg:col-span-4 py-3 px-4 bg-transparent border border-app-blue-gray-100 dark:bg-slate-800 rounded-2xl dark:border-slate-700'>
      <div className='flex gap-2'>
        <div className='mt-1'>
          <Icon />
        </div>
        <div>
          <h1 className='font-semibold text-md text-app-blue-gray-900 mb-1 dark:text-white'>
            {title}
          </h1>
          <ul className='grid gap-1 list-disc pl-4'>
            {description.map((item, index) => (
              <li
                key={index}
                className='text-sm text-base text-app-blue-gray-600 dark:text-slate-400'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
