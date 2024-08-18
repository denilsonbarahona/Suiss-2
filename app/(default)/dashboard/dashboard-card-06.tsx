'use client';

import DoughnutChart from '@/components/charts/doughnut-chart';

// Import utilities
import { tailwindConfig } from '@/components/utils/utils';

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
    borderWidth: number;
  }[];
};

const chartData = {
  labels: [
    'Salud',
    'Educación',
    'Seguridad Social',
    'Desarrollo Social',
    'Mujer',
    'Trabajo y Seguridad Social',
    'Cultura y Patrimonio',
    'Derechos Humanos',
    'Infancia y Familia',
    'Emprendimiento',
    'Prevención de Alcoholismo',
    'Agraria',
    'Agua y Saneamiento',
  ],
  datasets: [
    {
      label: 'Top Countries',
      data: [45, 67, 12, 98, 33, 76, 54, 89, 22, 41, 63, 90, 18],
      backgroundColor: [
        tailwindConfig.theme.colors['app-blue-gray'][900],
        tailwindConfig.theme.colors['app-indigo'][900],
        tailwindConfig.theme.colors['app-light-blue'][900],
        tailwindConfig.theme.colors['app-blue'][900],
        tailwindConfig.theme.colors['app-amber'][900],
        tailwindConfig.theme.colors['app-green'][900],
        tailwindConfig.theme.colors['app-red'][900],
        tailwindConfig.theme.colors['app-blue-gray'][500],
        tailwindConfig.theme.colors['app-indigo'][500],
        tailwindConfig.theme.colors['app-red'][500],
        tailwindConfig.theme.colors['app-blue'][500],
        tailwindConfig.theme.colors['app-light-blue'][500],
        tailwindConfig.theme.colors['app-green'][500],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors['app-blue-gray'][900],
        tailwindConfig.theme.colors['app-indigo'][900],
        tailwindConfig.theme.colors['app-light-blue'][900],
        tailwindConfig.theme.colors['app-blue'][900],
        tailwindConfig.theme.colors['app-amber'][900],
        tailwindConfig.theme.colors['app-green'][900],
        tailwindConfig.theme.colors['app-red'][900],
        tailwindConfig.theme.colors['app-blue-gray'][500],
        tailwindConfig.theme.colors['app-indigo'][500],
        tailwindConfig.theme.colors['app-red'][500],
        tailwindConfig.theme.colors['app-blue'][500],
        tailwindConfig.theme.colors['app-light-blue'][500],
        tailwindConfig.theme.colors['app-green'][500],
      ],
      borderWidth: 0,
    },
  ],
};

export default function DashboardCard06({
  title = 'Distribución de Presupuesto por Área',
  data = chartData,
  size = 'col-span-full xl:col-span-6',
}: {
  title?: string;
  data?: ChartData;
  size?: string;
}) {
  return (
    <div
      className={`flex flex-col ${size}  bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700`}
    >
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={data} width={389} height={260} />
    </div>
  );
}
