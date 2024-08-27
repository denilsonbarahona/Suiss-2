"use client";

import WelcomeBanner from "./welcome-banner";
import SuissBarChart from "@/components/SuissCharts/suissBarChart";
import SuissCakeChart from "@/components/SuissCharts/SuissCakeChart";
import DashboardReports from "@/components/cards/dashboardReports";
import ExecutionReportIcon from "@/components/icons/ExecutionReport";
import PerformanceReportIcon from "@/components/icons/PerformanceReport";
import BeneficiariesReportIcon from "@/components/icons/BeneficiariesReport";

const dashboardReports = [
  {
    title: "Informe de Ejecución",
    description:
      "Datos sobre la ejecución de los programas, incluyendo porcentajes de avance y cumplimiento de metas.",
    icon: ExecutionReportIcon,
  },
  {
    title: "Informe de Desempeño",
    description:
      "Evaluaciones de impacto y resultados obtenidos por los programas.",
    icon: PerformanceReportIcon,
  },
  {
    title: "Informe de Beneficiarios",
    description:
      "Información sobre la cantidad de personas beneficiadas y sus características.",
    icon: BeneficiariesReportIcon,
  },
];

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <WelcomeBanner />

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        <SuissBarChart />
        <SuissCakeChart />
        {/* {dashboardReports.map((report, index) => (
          <DashboardReports
            key={index}
            title={report.title}
            description={report.description}
            Icon={report.icon}
          ></DashboardReports>
        ))} */}
      </div>
    </div>
  );
}
