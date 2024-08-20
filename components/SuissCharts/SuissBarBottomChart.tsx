'use client';

import Tooltip from '@/components/tooltip';
import BarChart02 from '@/components/charts/bar-chart-02';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';

const chartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
  ],
  datasets: [
    // Light blue bars
    {
      label: 'Stack 1',
      data: [6200, 9200, 6600, 8800, 5200, 9200],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Blue bars
    {
      label: 'Stack 2',
      data: [-4000, -2600, -5350, -4000, -7500, -2000],
      backgroundColor: tailwindConfig.theme.colors.indigo[200],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[300],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

type DataSet = {
  label: string;
  data: Array<number>;
  backgroundColor: string;
  hoverBackgroundColor: string;
  barPercentage: number;
  categoryPercentage: number;
};

type ChartData = {
  labels: Array<string>;
  datasets: Array<DataSet>;
};

export default function SuissBarBottomChart({
  title,
  data = chartData,
}: {
  title: string;
  data?: ChartData;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center'>
        <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      <div className='flex flex-col xl:flex-row px-5 py-3'>
        {data.datasets.map((dataset, index) => (
          <p
            key={index}
            className='flex items-center gap-1 text-sm font-normal text-app-blue-gray-500 dark:text-slate-100 mr-2'
          >
            <svg
              width='11'
              height='12'
              viewBox='0 0 11 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.0517578 6C0.0517578 2.68629 2.50258 0 5.52582 0C8.54781 0.00330738 10.9969 2.68766 10.9999 6C10.9999 9.31371 8.54906 12 5.52582 12C2.50258 12 0.0517578 9.31371 0.0517578 6ZM2.78879 6C2.78879 7.65685 4.0142 9 5.52582 9C6.25172 9 6.9479 8.68393 7.46119 8.12132C7.97448 7.55871 8.26285 6.79565 8.26285 6C8.26285 4.34315 7.03744 3 5.52582 3C4.0142 3 2.78879 4.34315 2.78879 6Z'
                fill={`${dataset.backgroundColor}`}
              />
            </svg>

            {dataset.label}
          </p>
        ))}
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {/* Change the height attribute to adjust the chart height */}
        <BarChart02 data={data} width={595} height={248} />
      </div>
    </div>
  );
}
