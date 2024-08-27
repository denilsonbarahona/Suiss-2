'use client';

import SearchForm from '@/components/search-form';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissTable from '@/components/SuissTables/SuissTable';
import { tailwindConfig } from '@/components/utils/utils';

const dataTable = {
  title: 'Instituciones del Sector Social 21',
  headers: [
    {
      title: 'NOMBRE DE PROGRAMA',
    },
    {
      title: 'MISIÓN',
    },
    {
      title: 'VISIÓN',
    },
  ],
  rows: [
    {
      title: 'Secretaría de Desarrollo Social',
      mision: 'Mejorar la calidad de vida de los ciudadanos hondureños',
      vision: 'Ser un ente de referencia en el desarrollo social',
    },
    {
      title: 'Secretaría de Salud',
      mision: 'Garantizar la salud de la población',
      vision: 'Un sistema de salud accesible y de calidad',
    },
    {
      title: 'Secretaría de Educación',
      mision: 'Promover una educación inclusiva y de calidad',
      vision: 'Lograr un sistema educativo que forme ciudadanos integrales',
    },
    {
      title: 'Instituto Hondureño de Seguridad Social',
      mision: 'Proveer seguridad social y protección económica',
      vision: 'Ser un modelo de seguridad social en la región',
    },
    {
      title: 'Secretaría de Trabajo y Seguridad Social',
      mision: 'Proteger los derechos laborales',
      vision: 'Crear un entorno laboral justo y equitativo',
    },
  ],
  showPagination: true,
};

const dataTable2 = {
  title: 'Desempeño por Institución',
  headers: [
    {
      title: 'Institución del sector social',
    },
    {
      title: 'Cumplimiento de Metas',
    },
    {
      title: 'Beneficiarios Atendidos',
    },
  ],
  rows: [
    {
      title: 'Secretaría de Desarrollo Social (SEDESOL)',
      percentage: '85%',
      beneficiaries: '150,000',
    },
    {
      title: 'Secretaría de Salud (SESAL)',
      percentage: '85%',
      beneficiaries: '150,000',
    },
    {
      title: 'Secretaría de Educación (SEDUC)',
      percentage: '85%',
      beneficiaries: '150,000',
    },
    {
      title: 'Instituto Hondureño de Seguridad Social (IHSS)',
      percentage: '85%',
      beneficiaries: '150,000',
    },
    {
      title: 'Secretaría de Trabajo y Seguridad Social(SETASS)',
      percentage: '85%',
      beneficiaries: '150,000',
    },
  ],
};

const barChartData = {
  labels: ['Norte (N)', 'Central (C)', 'Sus (S)', 'Este (E)', 'Oeste (O)'],
  datasets: [
    // Blue bars
    {
      label: 'Beneficiarios',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  labelStyle: 'font-semibold text-base',
};

export default function SocialInstitutions() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Instituciones del Sector Social
        </h1>
        <span className='flex items-center justify-center flex-col lg:flex-row gap-2'>
          <SearchForm
            placeholder='Buscar por institución'
            className='w-full lg:w-auto [&>input]:w-full [&>input]:lg:w-auto'
          />
          <button className='btn w-full lg:w-auto bg-app-light-blue-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap'>
            <svg
              className='w-4 h-4 mr-1'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='fill-current text-white'
                d='M8.76586 8.00335H8.23919L8.05253 7.82335C8.70586 7.06335 9.09919 6.07668 9.09919 5.00335C9.09919 2.61001 7.15919 0.670013 4.76586 0.670013C2.37253 0.670013 0.432526 2.61001 0.432526 5.00335C0.432526 7.39668 2.37253 9.33668 4.76586 9.33668C5.83919 9.33668 6.82586 8.94335 7.58586 8.29001L7.76586 8.47668V9.00335L11.0992 12.33L12.0925 11.3367L8.76586 8.00335ZM4.76586 8.00335C3.10586 8.00335 1.76586 6.66335 1.76586 5.00335C1.76586 3.34335 3.10586 2.00335 4.76586 2.00335C6.42586 2.00335 7.76586 3.34335 7.76586 5.00335C7.76586 6.66335 6.42586 8.00335 4.76586 8.00335Z'
              />
            </svg>
            Buscar
          </button>
        </span>
      </div>
      <div className='w-full col-span-12'>
        <SuissTable data={dataTable} />
      </div>
      <div className='w-full col-span-12 flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/2'>
          <SuissBarChart
            title='Ejecución por Ubicación Geográfica'
            chartData={barChartData}
          />
        </div>
        <div className='w-full md:w-1/2'>
          <SuissTable data={dataTable2} />
        </div>
      </div>
    </div>
  );
}
