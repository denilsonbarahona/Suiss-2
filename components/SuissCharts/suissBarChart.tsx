'use client';

import BarChart01 from '@/components/charts/bar-chart-01';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    hoverBackgroundColor: string;
    barPercentage: number;
    categoryPercentage: number;
  }[];
  labelStyle?: string;
};

const chartDataDefault = {
  labels: ['RS', 'CM', 'SE', 'ALF', 'IS'],
  datasets: [
    // Blue bars
    {
      label: '2023',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: '2024',
      data: [1600, 700, 1000, 400, 1300],
      backgroundColor: tailwindConfig.theme.colors.blue[400],
      hoverBackgroundColor: tailwindConfig.theme.colors.blue[500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

export default function SuissBarChart({
  title = 'Presupuesto Anual por Programa (2023 vs 2024)',
  chartData = chartDataDefault,
}: {
  title?: string;
  chartData?: ChartData;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-semibold text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart01 data={chartData} width={595} height={248} />
    </div>
  );
}
