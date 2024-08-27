import SuissAnalytics from "@/components/SuissCharts/SuissAnalytics";
import SuissBarChart from "@/components/SuissCharts/suissBarChart";
import SuissBarTopChart from "@/components/SuissCharts/SuissBarTopChart";
import SuissCakeChart from "@/components/SuissCharts/SuissCakeChart";
import { tailwindConfig } from "@/components/utils/utils";

const chartData = {
  labels: ["2024", "2022", "2023"],
  datasets: [
    // Blue bars
    {
      label: "Presupuesto Asignado",
      data: [40039542111, 36510687470, 31946760002],
      backgroundColor: tailwindConfig.theme.colors["app-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: "Presupuesto Ejecutado",
      data: [8376619284, 26850346151, 16814667880],
      backgroundColor: tailwindConfig.theme.colors["app-light-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-light-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: true,
  labelStyle: "font-semibold text-base",
};

const dataAnalytics = {
  title: "Presupuestos Anuales o por Periodos",
  headers: ["Años", "Presupuesto Asignado (en millones)"],
  rows: [
    {
      title: "2024",
      number: "20.92%",
    },
    {
      title: "2022",
      number: "73.54%",
    },
    {
      title: "2023",
      number: "52.63%",
    },
  ],
};

const cakehartData = {
  labels: [
    "Instituto Hondureño de Seguridad Social",
    "Secretaria de Infraestructura y Transporte",
    "Banco Nacional de Desarrollo Agricola",
    "Secretaría de Educación",
    "Programa de Accion Solidaria",
  ],
  datasets: [
    {
      label: "L",
      data: [17195750055, 14374182033, 2358094950, 1761090159, 1384705805],
      backgroundColor: [
        tailwindConfig.theme.colors.emerald[400],
        tailwindConfig.theme.colors.amber[400],
        tailwindConfig.theme.colors.sky[400],
        tailwindConfig.theme.colors.indigo[500],
        tailwindConfig.theme.colors["app-red"][500],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors.emerald[500],
        tailwindConfig.theme.colors.amber[500],
        tailwindConfig.theme.colors.sky[500],
        tailwindConfig.theme.colors.indigo[600],
        tailwindConfig.theme.colors["app-red"][900],
      ],
      borderWidth: 0,
    },
  ],
};

export default function ExecutionAndBudget() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8">
        <h1 className="w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold">
          Ejecución y Presupuesto
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="[&>div]:h-full">
          <SuissAnalytics data={dataAnalytics} />
        </div>
        <div>
          <SuissBarChart
            title="Presupuesto y Ejecución a lo Largo de los Años (en millones)"
            chartData={chartData}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <SuissCakeChart
            subTitle="40 mil millones de Lempiras"
            title="Presupuesto"
            data={cakehartData}
          />
        </div>
      </div>
    </div>
  );
}
