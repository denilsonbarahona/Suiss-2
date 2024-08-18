'use client';

import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissLineChart from '@/components/SuissCharts/SuissLineChart';
import { tailwindConfig } from '@/components/utils/utils';
import DashboardCard06 from '../dashboard/dashboard-card-06';
import SuissAnalytics from '@/components/SuissCharts/SuissAnalytics';
import SuissBarTopChart from '@/components/SuissCharts/SuissBarTopChart';
import SuissBarBottomChart from '@/components/SuissCharts/SuissBarBottomChart';
import SuissTable from '@/components/SuissTables/SuissTable';
import { access } from 'fs';
import SuissTimeLineChart from '@/components/SuissCharts/suissTimelineChart';
import SearchForm from '@/components/search-form';

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

const tableData = {
  title: 'Otros Indicador Geográfico',
  headers: [
    {
      title: 'Región',
    },
    {
      title: 'Tasa de Matrícula Escolar',
    },
    {
      title: 'Tasa de Mortalidad Infantil',
    },
    {
      title: 'Tasa de Empleo',
    },
    {
      title: 'Viviendas Adecuadas',
    },
    {
      title: 'Acceso a Alimentos Adecuados',
    },
    {
      title: 'Acceso a Seguro Social',
    },
  ],
  rows: [
    {
      category: 'Norte',
      tuition: '92%',
      mortality: '5 por 1000',
      employmentRate: '60%',
      housing: '70%',
      accessToFood: '85%',
      security: '40%',
    },
    {
      category: 'Central',
      tuition: '92%',
      mortality: '5 por 1000',
      employmentRate: '60%',
      housing: '70%',
      accessToFood: '85%',
      security: '40%',
    },
    {
      category: 'Sur',
      tuition: '92%',
      mortality: '5 por 1000',
      employmentRate: '60%',
      housing: '70%',
      accessToFood: '85%',
      security: '40%',
    },
    {
      category: 'Este',
      tuition: '92%',
      mortality: '5 por 1000',
      employmentRate: '60%',
      housing: '70%',
      accessToFood: '85%',
      security: '40%',
    },
    {
      category: 'Oeste',
      tuition: '92%',
      mortality: '5 por 1000',
      employmentRate: '60%',
      housing: '70%',
      accessToFood: '85%',
      security: '40%',
    },
  ],
  showPagination: false,
};

const tableData2 = {
  title: 'Detalles de Intervenciones en Aldeas',
  headers: [
    {
      title: 'ÁREA',
    },
    {
      title: 'TIPO DE INTERVENCIÓN',
    },
    {
      title: 'RESULTADO CLAVE',
    },
  ],
  rows: [
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
    {
      area: 'Nombre de Aldea',
      intervention: 'Salud',
      keyResult: 'Reducción del 20% en enfermedades',
    },
  ],
  showPagination: false,
};

const tableData3 = {
  title: 'Oferta de Servicios por Aldea 3717',
  headers: [
    {
      title: 'NOMBRE DE ALDEA',
    },
    {
      title: 'CENTRO EDUCATIVO',
    },
    {
      title: 'CENTRO DE SALUD',
    },
    {
      title: 'SERVICIOS DE INFRAESTRUCTURA',
    },
    {
      title: 'CALIDAD DE SERVICIOS',
    },
  ],
  rows: [
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
    {
      title: 'Nombre de Aldea',
      school: 'Escuela Primaria, Colegio Secundario',
      hospital: 'Clínica, Hospital',
      infrastructure: 'Agua Potable, Electricidad',
      qualityServices: 'Alta',
    },
  ],
  showPagination: true,
};

const barChartData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    // Blue bars
    {
      label: 'Área Urbana',
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: 'Área Rural',
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

export default function GeographicImpact() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Impacto Geográfico
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
          <SuissLineChart title='Cobertura Vs Carencias' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-8'>
        <div className='w-full lg:w-1/3'>
          <SuissBarBottomChart title="KPI's de las Aldeas con Cobertura vs las que no Tienen Cobertura" />
        </div>
        <div className='w-full lg:w-2/3 bg-white rounded-3xl'>
          <p>Regiones con tasas de pobreza</p>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-6 mb-6'>
        <SuissTable data={tableData} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div>
          <SuissBarChart
            title='Comparación de la pobreza en áreas urbanas y rurales'
            chartData={barChartData}
          />
        </div>
        <div className='[&>div]:h-full'>
          <SuissTable data={tableData2} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-8'>
        <div className='w-full lg:w-1/2'>
          <SuissTimeLineChart title='Evolución de las Aldeas a lo Largo del Tiempo' />
        </div>
        <div className='w-full lg:w-1/2 bg-white rounded-3xl'>
          <p>Regiones con tasas de pobreza</p>
        </div>
      </div>
      <div>
        <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
          <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Oferta de Servicios
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

        <SuissTable data={tableData3} />
      </div>
    </div>
  );
}
