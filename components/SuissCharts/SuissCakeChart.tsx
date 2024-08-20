'use client';

import PieChart from '@/components/charts/pie-chart';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';

const chartData = {
  labels: [
    'Red Solidaria',
    'Ciudad Mujer',
    'Salud y Educación',
    'Alfabetización',
    'Infraestructura Social',
  ],
  datasets: [
    {
      label: 'L',
      data: [12, 13, 10, 65],
      backgroundColor: [
        tailwindConfig.theme.colors.emerald[400],
        tailwindConfig.theme.colors.amber[400],
        tailwindConfig.theme.colors.sky[400],
        tailwindConfig.theme.colors.indigo[500],
        tailwindConfig.theme.colors['app-red'][500],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors.emerald[500],
        tailwindConfig.theme.colors.amber[500],
        tailwindConfig.theme.colors.sky[500],
        tailwindConfig.theme.colors.indigo[600],
        tailwindConfig.theme.colors['app-red'][900],
      ],
      borderWidth: 0,
    },
  ],
};

type DataSet = {
  label: string;
  data: Array<number>;
  backgroundColor: Array<string>;
  hoverBackgroundColor: Array<string>;
  borderWidth: number;
};

type ChartData = {
  labels: Array<string>;
  datasets: Array<DataSet>;
};

export default function SuissCakeChart({
  title = 'Distribución del Presupuesto por Programa',
  subTitle = '4250 millones de Lempiras',
  description = 'Suma Total del Presupuesto del año 2024:',
  data = chartData,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  data?: ChartData;
}) {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center'>
        <h2 className='font-semibold text-app-blue-gray-900 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      <div className='px-5 py-3'>
        <div className='text-3xl font-bold text-app-blue-gray-900 dark:text-slate-100'>
          {subTitle}
        </div>
        <div className='text-sm text-app-blue-gray-500 mb-2'>{description}</div>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <PieChart data={data} width={389} height={220} />
    </div>
  );
}
