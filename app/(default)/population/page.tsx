'use client';

import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissLineChart from '@/components/SuissCharts/SuissLineChart';
import { tailwindConfig } from '@/components/utils/utils';
import SuissAnalytics2 from '@/components/SuissCharts/SuissAnalytics2';
import Map from '@/components/SuissCharts/Map';

const chartData = {
  labels: ['Norte', 'Central', 'Sur', 'Este', 'Oeste'],
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
  showLabels: false,
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
            title='Cobertura de Programas por Región'
            chartData={chartData}
          />
        </div>
        <div>
          <SuissLineChart title='Evolución del Ingreso per Cápita' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-8'>
        <div className='w-full lg:w-1/2'>
          <SuissAnalytics2 />
        </div>
        <div className='w-full lg:w-1/2 bg-white dark:bg-slate-800 rounded-3xl'>
          <Map title='Mapa de población' />
        </div>
      </div>
    </div>
  );
}
