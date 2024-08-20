'use client';

import LineChart05 from '@/components/charts/line-chart-05';

// Import utilities
import { tailwindConfig, hexToRGB } from '@/components/utils/utils';

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill?: boolean;
    backgroundColor?: string;
    borderWidth: number;
    tension: number;
    pointRadius: number;
    pointHoverRadius: number;
    pointBackgroundColor: string;
    pointHoverBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverBorderWidth: number;
    clip: number;
  }[];
  labelStyle?: string;
  showLabels?: boolean;
};

const chartData: ChartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
    '06-01-2021',
    '07-01-2021',
    '08-01-2021',
    '09-01-2021',
    '10-01-2021',
    '11-01-2021',
    '12-01-2021',
    '01-01-2022',
    '02-01-2022',
    '03-01-2022',
    '04-01-2022',
    '05-01-2022',
    '06-01-2022',
    '07-01-2022',
    '08-01-2022',
    '09-01-2022',
    '10-01-2022',
    '11-01-2022',
    '12-01-2022',
    '01-01-2023',
    '02-01-2023',
    '03-01-2023',
    '04-01-2023',
    '05-01-2023',
    '06-01-2023',
    '07-01-2023',
    '08-01-2023',
    '09-01-2023',
    '10-01-2023',
    '11-01-2023',
    '12-01-2023',
    '01-01-2024',
    '02-01-2024',
    '03-01-2024',
    '04-01-2024',
  ],
  datasets: [
    // Indigo line
    {
      label: 'Pobreza Extrema',
      data: [
        0, 2.5, 2.5, 4, 2.5, 3.8, 5, 9, 7.5, 11, 14, 15, 17, 15, 14, 9, 15, 26,
        16, 18, 15, 20, 18, 19, 19, 24, 29, 26, 39, 27, 35, 32, 29, 35, 36, 34,
        39, 36, 41, 41, 48,
      ],
      borderColor: tailwindConfig.theme.colors['app-red'][900],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-red'][900]
      )}, 0.08)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors['app-red'][900],
      pointHoverBackgroundColor: tailwindConfig.theme.colors['app-red'][900],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    {
      label: 'Pobreza Moderada',
      data: [
        0.7, 3.5, 4.5, 3.5, 4.2, 4.6, 6, 7, 6, 6, 11, 13, 14, 18, 17, 15, 13,
        16, 20, 21, 24, 22, 20, 22, 25, 18, 21, 23, 24, 32, 28, 29, 35, 37, 42,
        32, 32, 33, 33, 37, 32,
      ],
      borderColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-light-blue'][900]
      )}, 0.25)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-light-blue'][900]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-light-blue'][900]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
};

export default function SuissLineChart({
  title,
  data = chartData,
}: {
  title: string;
  data?: ChartData;
}) {
  return (
    <div className='h-full flex flex-col col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center'>
        <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart05 data={data} width={800} height={300} />
    </div>
  );
}
