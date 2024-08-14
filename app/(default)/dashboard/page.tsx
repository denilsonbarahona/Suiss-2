'use client';

import WelcomeBanner from './welcome-banner';
import DashboardCard05 from './dashboard-card-05';
import DashboardCard06 from './dashboard-card-06';
import DashboardCard07 from './dashboard-card-07';
import DashboardCard08 from './dashboard-card-08';
import DashboardCard09 from './dashboard-card-09';
import DashboardCard10 from './dashboard-card-10';
import DashboardCard11 from './dashboard-card-11';
import SuissBarChart from '@/components/SuissCharts/suissBarChart';
import SuissCakeChart from '@/components/SuissCharts/SuissCakeChart';
import DashboardReports from '@/components/cards/dashboardReports';
import ExecutionReportIcon from '@/components/icons/ExecutionReport';

const dashboardReports = [
  {
    title: 'Informe de Ejecución',
    description:
      'Datos sobre la ejecución de los programas, incluyendo porcentajes de avance y cumplimiento de metas.',
    icon: ExecutionReportIcon,
  },
  {
    title: 'Informe de Desempeño',
    description:
      'Evaluaciones de impacto y resultados obtenidos por los programas.',
    icon: ExecutionReportIcon,
  },
  {
    title: 'Informe de Beneficiarios',
    description:
      'Información sobre la cantidad de personas beneficiadas y sus características.',
    icon: ExecutionReportIcon,
  },
];

export default function Dashboard() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <WelcomeBanner />

      {/* Cards */}
      <div className='grid grid-cols-12 gap-6'>
        <SuissBarChart />
        <SuissCakeChart />
        {dashboardReports.map((report, index) => (
          <DashboardReports
            key={index}
            title={report.title}
            description={report.description}
            Icon={report.icon}
          ></DashboardReports>
        ))}
      </div>
    </div>
  );
}
