'use client';

import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissLineChart from '@/components/SuissCharts/SuissLineChart';
import { tailwindConfig, hexToRGB } from '@/components/utils/utils';
import SuissAnalytics2 from '@/components/SuissCharts/SuissAnalytics2';
import Map from '@/components/SuissCharts/Map';

const chartData = {
  labels: ['Norte', 'Central', 'Sur', 'Este', 'Oeste'],
  datasets: [
    // Blue bars
    {
      label: '2023',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors['app-red'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: false,
};

const lineChartData = {
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
      label: 'Cobertura',
      data: [
        0, 2.5, 2.5, 4, 2.5, 3.8, 5, 9, 7.5, 11, 14, 15, 17, 15, 14, 9, 15, 26,
        16, 18, 15, 20, 18, 19, 19, 24, 29, 26, 39, 27, 35, 32, 29, 35, 36, 34,
        39, 36, 41, 41, 48,
      ],
      borderColor: tailwindConfig.theme.colors['app-light-blue'][900],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-light-blue'][900]
      )}, 0.08)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      pointHoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    {
      label: 'Carencia',
      data: [
        0.7, 3.5, 4.5, 3.5, 4.2, 4.6, 6, 7, 6, 6, 11, 13, 14, 18, 17, 15, 13,
        16, 20, 21, 24, 22, 20, 22, 25, 18, 21, 23, 24, 32, 28, 29, 35, 37, 42,
        32, 32, 33, 33, 37, 32,
      ],
      borderColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-blue'][900]
      )}, 0.25)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-blue'][900]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors['app-blue'][900]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
};

const analyticsChartData = {
  labels: ['02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021'],
  datasets: [
    // Blue bars
    {
      label: 'Hombres',
      data: [8000, 3800, 5350, 7800],
      backgroundColor: tailwindConfig.theme.colors['app-red'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-red'][500],
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: 'Mujeres',
      data: [4000, 6500, 2200, 5800],
      backgroundColor: tailwindConfig.theme.colors['app-light-blue'][900],
      hoverBackgroundColor: tailwindConfig.theme.colors['app-light-blue'][500],
      categoryPercentage: 0.66,
    },
  ],
};

export default function Population() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Población
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <SuissBarChart
            title='Distribución de Niveles Socioeconómicos'
            chartData={chartData}
          />
        </div>
        <div>
          <SuissLineChart
            title='Evolución del Ingreso per Cápita'
            data={lineChartData}
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-8'>
        <div className='w-full lg:w-1/2'>
          <SuissAnalytics2
            title='Distribución de la Población por Edad y Género'
            data={analyticsChartData}
          />
        </div>
        <div className='w-full lg:w-1/2 bg-white dark:bg-slate-800 rounded-3xl'>
          <Map title='Mapa de población' bubbleMap />
        </div>
      </div>
    </div>
  );
}
