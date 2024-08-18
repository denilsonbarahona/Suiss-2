'use client';

import { useRouter } from 'next/navigation';
import { dataTable } from '../page';
import Datepicker from '@/components/datepicker';
import SuissTimeLineChart from '@/components/SuissCharts/suissTimelineChart';
import DashboardCard06 from '../../dashboard/dashboard-card-06';
import SuissAnalytics from '@/components/SuissCharts/SuissAnalytics';
import SuissAnalytics2 from '@/components/SuissCharts/SuissAnalytics2';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import { tailwindConfig } from '@/components/utils/utils';

const dataAnalytics = {
  title: 'Top Channels',
  headers: ['Tipo', 'Monto'],
  rows: [
    {
      title: 'Presupuesto Asignado',
      number: '80%',
    },
    {
      title: 'Gastos Realizados',
      number: '60%',
    },
  ],
};

const dataAnalytics2 = {
  title: 'Frecuencia de Entregas',
  headers: ['Tipo', 'Monto'],
  rows: [
    {
      title: '2019',
      number: '90%',
    },
    {
      title: '2020',
      number: '80%',
    },
    {
      title: '2021',
      number: '70%',
    },
    {
      title: '2022',
      number: '60%',
    },
    {
      title: '2023',
      number: '50%',
    },
  ],
};

const dataAnalytics3 = {
  title: 'Ejecución Global por Programa',
  headers: ['Indicador', 'Valor'],
  rows: [
    {
      title: '% de Ejecución del Presupuesto',
      number: '30%',
    },
    {
      title: 'Beneficiarios Atendidos',
      number: '10%',
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
    // Light blue bars
    {
      label: 'Porcentaje de Ejecución',
      data: [1600, 700, 1000, 400, 1300],
      backgroundColor: tailwindConfig.theme.colors.blue[400],
      hoverBackgroundColor: tailwindConfig.theme.colors.blue[500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  labelStyle: 'font-semibold text-base',
  showLabels: true,
};

export default function SocialProgram() {
  const router = useRouter();

  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='grid grid-cols-12 gap-6 mb-8'>
        <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0'>
          <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
            Detalles del Programa Social
          </h1>
          <span className='flex items-center justify-center flex-col lg:flex-row gap-2'>
            <button
              className='btn w-full lg:w-auto gap-3 bg-app-red-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap'
              onClick={() => router.push('/social-programs')}
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.6594 6.17087H3.35107L7.41774 2.10421C7.74274 1.77921 7.74274 1.24587 7.41774 0.920874C7.09274 0.595874 6.56774 0.595874 6.24274 0.920874L0.751074 6.41254C0.426074 6.73754 0.426074 7.26254 0.751074 7.58754L6.24274 13.0792C6.56774 13.4042 7.09274 13.4042 7.41774 13.0792C7.74274 12.7542 7.74274 12.2292 7.41774 11.9042L3.35107 7.83754H12.6594C13.1177 7.83754 13.4927 7.46254 13.4927 7.00421C13.4927 6.54587 13.1177 6.17087 12.6594 6.17087Z'
                  fill='white'
                />
              </svg>
              Volver
            </button>
          </span>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 mb-8'>
        <div className='col-span-12'>
          <select className='form-select w-full border-none shadow-none'>
            <option>Institución responsable</option>
            {dataTable.rows.map((area, index) => (
              <option key={index}>{area.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 mb-8'>
        <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0'>
          <h1 className='w-full text-lg font-semibold text-center lg:text-start text-slate-800 dark:text-slate-100'>
            Programa Red Solidaria
          </h1>
          <span className='flex items-center justify-center flex-col lg:flex-row gap-2'>
            <Datepicker />
          </span>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 mb-6'>
        <SuissTimeLineChart title='Metas vs. Realidad a lo largo del tiempo.' />
        <DashboardCard06 size='col-span-full xl:col-span-4' />
      </div>
      <div className='grid grid-cols-12 gap-6 mb-6'>
        <SuissAnalytics data={dataAnalytics} />
        <SuissAnalytics data={dataAnalytics2} />
        <SuissAnalytics data={dataAnalytics3} />
      </div>
      <div className='grid grid-cols-12 gap-6'>
        <SuissAnalytics2 />
        <SuissBarChart
          title='Ejecución por Ubicación Geográfica'
          chartData={barChartData}
        />
      </div>
    </div>
  );
}
