'use client';

import BarChart04 from '@/components/charts/bar-chart-04';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';
const chartData = {
  labels: ['02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021'],
  datasets: [
    // Blue bars
    {
      label: 'Presupuesto',
      data: [8000, 3800, 5350, 7800],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: 'Ejecutado',
      data: [4000, 6500, 2200, 5800],
      backgroundColor: tailwindConfig.theme.colors.sky[400],
      hoverBackgroundColor: tailwindConfig.theme.colors.sky[500],
      categoryPercentage: 0.66,
    },
  ],
};

type DataSet = {
  label: string;
  data: Array<number>;
  backgroundColor: string;
  hoverBackgroundColor: string;
  categoryPercentage: number;
};

type ChartData = {
  labels: Array<string>;
  datasets: Array<DataSet>;
};

export default function SuissAnalytics2({
  title = 'Ejecución por Año y Fondo',
  data = chartData,
}: {
  title?: string;
  data?: ChartData;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-medium text-base text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart04 data={data} width={595} height={248} />
    </div>
  );
}
