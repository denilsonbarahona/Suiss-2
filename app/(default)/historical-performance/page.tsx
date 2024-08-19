'use client';

import Map from '@/components/SuissCharts/Map';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissBarTopChart from '@/components/SuissCharts/SuissBarTopChart';
import { tailwindConfig } from '@/components/utils/utils';

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

const barTopchartData = {
  labels: ['RS', 'SE', 'IS', 'CM', 'ALF', 'NP'],
  longLabels: [
    'Red Solidaria (RS)',
    'Salud y Educación (SE)',
    'Infraestructura Social (IS)',
    'Ciudad Mujer (CM)',
    'Alfabetización (ALF)',
    'Nombre Programa (NP)',
  ],
  datasets: [
    {
      label: 'Área Urbana',
      data: [5000, 4000, 4000, 3800, 5200, 5100],
      backgroundColor: tailwindConfig.theme.colors.indigo[700],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[800],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    {
      label: 'Área Rural',
      data: [4800, 4200, 4800, 1800, 3300, 3500],
      backgroundColor: tailwindConfig.theme.colors.indigo[100],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[200],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

export default function HistoricalPerformance() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Desempeño Histórico de Programas
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <div>
          <SuissBarChart title='Evolución en Cobertura' chartData={chartData} />
        </div>
        <div>
          <SuissBarChart
            title='Presupuesto y Ejecución a lo Largo de los Años (en millones)'
            chartData={chartData}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <SuissBarTopChart
            title='Presupuestado y Ejecutado en Físico'
            data={barTopchartData}
          />
        </div>
        <div className='w-full bg-white dark:bg-slate-800 rounded-3xl'>
          <Map title='Mapa de Desempeño Histórico de Programas' />
        </div>
      </div>
    </div>
  );
}
