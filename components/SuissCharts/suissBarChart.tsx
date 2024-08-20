'use client';

import BarChart01 from '@/components/charts/bar-chart-01';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';

type ChartData = {
  labels: string[];
  detailLabels?: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    hoverBackgroundColor: string;
    barPercentage: number;
    categoryPercentage: number;
  }[];
  labelStyle?: string;
  showLabels?: boolean;
};

const chartDataDefault = {
  labels: ['RS', 'CM', 'SE', 'ALF', 'IS'],
  detailLabels: [
    'Red Solidaria (RS)',
    'Salud y Educación (SE)',
    'Infraestructura Social (IS)',
    'Ciudad Mujer (CM)',
    'Alfabetización (ALF)',
  ],
  datasets: [
    // Blue bars
    {
      label: '2023',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: '2024',
      data: [1600, 700, 1000, 400, 1300],
      backgroundColor: tailwindConfig.theme.colors['app-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-blue'][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: true,
};

export default function SuissBarChart({
  title = 'Presupuesto Anual por Programa (2023 vs 2024)',
  chartData = chartDataDefault,
}: {
  title?: string;
  chartData?: ChartData;
}) {
  return (
    <div className='h-full flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-semibold text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart01 data={chartData} width={595} height={248} />
      {chartData.detailLabels && chartData.detailLabels?.length > 0 && (
        <footer className='flex flex-wrap gap-x-3 gap-y-2 justify-center px-5 py-3'>
          {chartData.detailLabels.map((label, index) => (
            <p
              key={index}
              className='flex font-normal text-xs text-app-blue-gray-500'
            >
              {label}
            </p>
          ))}
        </footer>
      )}
    </div>
  );
}
