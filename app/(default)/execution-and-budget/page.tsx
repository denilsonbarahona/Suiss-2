import SuissAnalytics from '@/components/SuissCharts/SuissAnalytics';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissBarTopChart from '@/components/SuissCharts/SuissBarTopChart';
import SuissCakeChart from '@/components/SuissCharts/SuissCakeChart';
import { tailwindConfig } from '@/components/utils/utils';

const chartData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    // Blue bars
    {
      label: 'Presupuesto Asignado',
      data: [1400, 500, 800, 200, 1200, 1000, 1500],
      backgroundColor: tailwindConfig.theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: 'Presupuesto Ejecutado',
      data: [1600, 700, 1000, 400, 1300, 1000, 1500],
      backgroundColor: tailwindConfig.theme.colors.blue[400],
      hoverBackgroundColor: tailwindConfig.theme.colors.blue[500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: true,
  labelStyle: 'font-semibold text-base',
};

const dataAnalytics = {
  title: 'Presupuestos Anuales o por Periodos',
  headers: ['Años', 'Presupuesto Asignado (en millones)'],
  rows: [
    {
      title: '2018',
      number: '30%',
    },
    {
      title: '2019',
      number: '50%',
    },
    {
      title: '2020',
      number: '70%',
    },
    {
      title: '2021',
      number: '90%',
    },
    {
      title: '2022',
      number: '33%',
    },
    {
      title: '2023',
      number: '25%',
    },
    {
      title: '2024',
      number: '75%',
    },
  ],
};

const cakehartData = {
  labels: [
    'Seguridad',
    'Educación',
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

export default function ExecutionAndBudget() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Ejecución y Presupuesto
        </h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <div className='[&>div]:h-full'>
          <SuissAnalytics data={dataAnalytics} />
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
          <SuissCakeChart title='Presupuesto' data={cakehartData} />
        </div>
      </div>
    </div>
  );
}
