'use client';

import Map from '@/components/SuissCharts/Map';
import SuissTable from '@/components/SuissTables/SuissTable';

const tableData = {
  title: 'Análisis de Indicadores',
  headers: [
    {
      title: 'Año',
    },
    {
      title: 'Ingreso per Cápita (USD)',
    },
    {
      title: 'Tasa de Desempleo (%)',
    },
  ],
  rows: [
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
    {
      area: 'Nombre de Aldea',
      total: '$5,000',
      percentage: '10%',
    },
  ],
  showPagination: false,
};

export default function ExecutionAndBudget() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Indicadores Económicos y Demográficos
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <div className='[&>div]:h-full'>
          <SuissTable data={tableData} />
        </div>
        <div className='w-full bg-white dark:bg-slate-800 rounded-3xl'>
          <Map title='Mapa de Desempeño Histórico de Programas' bubbleMap/>
        </div>
      </div>
    </div>
  );
}
