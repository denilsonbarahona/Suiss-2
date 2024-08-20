'use client';

import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissLineChart from '@/components/SuissCharts/SuissLineChart';
import { tailwindConfig, hexToRGB } from '@/components/utils/utils';
import SuissBarBottomChart from '@/components/SuissCharts/SuissBarBottomChart';
import SuissTable from '@/components/SuissTables/SuissTable';
import SuissTimeLineChart from '@/components/SuissCharts/suissTimelineChart';
import SearchForm from '@/components/search-form';
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
      borderColor: tailwindConfig.theme.colors.indigo[500],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors.blue[500]
      )}, 0.08)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors.indigo[500],
      pointHoverBackgroundColor: tailwindConfig.theme.colors.indigo[500],
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
        tailwindConfig.theme.colors.slate[500]
      )}, 0.25)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors.slate[500]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors.slate[500]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
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

const timeLineChartData = {
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
  ],
  datasets: [
    // Indigo line
    {
      label: 'Tasa de Alfabetización',
      data: [
        73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
        110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
      ],
      borderColor: tailwindConfig.theme.colors.indigo[500],
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors.indigo[500],
      pointHoverBackgroundColor: tailwindConfig.theme.colors.indigo[500],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    // Blue line
    {
      label: 'Acceso a Servicios de Salud',
      data: [
        184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42,
        124, 88, 88, 215, 156, 88, 124, 64,
      ],
      borderColor: tailwindConfig.theme.colors.blue[400],
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors.blue[400],
      pointHoverBackgroundColor: tailwindConfig.theme.colors.blue[400],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    {
      label: 'Mejoras en Infraestructura',
      data: [
        100, 26, 32, 318, 22, 143, 32, 100, 5, 1, 22, 2, 84, 0, 276, 0, 124, 42,
        124, 88, 88, 215, 156, 88, 124, 64,
      ],
      borderColor: tailwindConfig.theme.colors['app-red'][900],
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors['app-red'][900],
      pointHoverBackgroundColor: tailwindConfig.theme.colors['app-red'][900],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
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

const bottomChartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
  ],
  datasets: [
    // Light blue bars
    {
      label: 'Cobertura',
      data: [6200, 9200, 6600, 8800, 5200, 9200],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Blue bars
    {
      label: 'Sin Cobertura',
      data: [-4000, -2600, -5350, -4000, -7500, -2000],
      backgroundColor: tailwindConfig.theme.colors.indigo[200],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[300],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
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
          <SuissLineChart title='Cobertura Vs Carencias' data={lineChartData} />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 mb-8'>
        <div className='w-full lg:w-1/3'>
          <SuissBarBottomChart
            title="KPI's de las Aldeas con Cobertura vs las que no Tienen Cobertura"
            data={bottomChartData}
          />
        </div>
        <div className='w-full lg:w-2/3 bg-white dark:bg-slate-800 rounded-3xl py-4 px-2'>
          <Map title='Indicador Geográfico: Acceso a Agua Potable' />
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
          <SuissTimeLineChart
            title='Evolución de las Aldeas a lo Largo del Tiempo'
            data={timeLineChartData}
          />
        </div>
        <div className='w-full  lg:w-1/2 bg-white dark:bg-slate-800 rounded-3xl py-4 px-2'>
          <Map title='Mapa de Zonas de Riesgo en Aldeas' />
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
