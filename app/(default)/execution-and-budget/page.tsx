import SuissAnalytics from '@/components/SuissCharts/SuissAnalytics';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissBarTopChart from '@/components/SuissCharts/SuissBarTopChart';
import SuissCakeChart from '@/components/SuissCharts/SuissCakeChart';
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

const dataAnalytics = {
  title: 'Presupuestos Anuales o por Periodos',
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

export default function HistoricalPerformance() {
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
          <SuissCakeChart />
        </div>
      </div>
    </div>
  );
}
