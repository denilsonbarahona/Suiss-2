"use client";

import DoughnutChart from "@/components/charts/doughnut-chart";

// Import utilities
import { tailwindConfig } from "@/components/utils/utils";

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
    borderWidth: number;
  }[];
};

const chartData = {
  labels: [
    "Protección Social",
    "Salud",
    "Transporte y Obras Públicas",
    "Recursos Forestales y Ambiente",
    "Agricultura, Agroindustria y Ganadería",
    "Gabinete de Prevención",
    "Vialidad",
    "Competitividad",
    "Actividad Turística",
    "Defensa y Seguridad",
    "Educación y Cultura",
    "Modernización del Estado",
    "Agua y Saneamiento",
    "Comunicación",
    "Energía",
    "Vivienda",
  ],
  datasets: [
    {
      label: "Proyectos",
      data: [
        31.22, // Protección Social
        11.8, // Salud
        10.5, // Transporte y Obras Públicas
        9.61, // Recursos Forestales y Ambiente
        7.32, // Agricultura, Agroindustria y Ganadería
        5.89, // Gabinete de Prevención
        5.13, // Vialidad
        5.05, // Competitividad
        4.43, // Actividad Turística
        4.33, // Defensa y Seguridad
        3.39, // Educación y Cultura
        0.65, // Modernización del Estado
        0.38, // Agua y Saneamiento
        0.17, // Comunicación
        0.07, // Energía
        0.04, // Vivienda
      ],
      backgroundColor: [
        tailwindConfig.theme.colors["app-blue-gray"][900],
        tailwindConfig.theme.colors["app-indigo"][900],
        tailwindConfig.theme.colors["app-light-blue"][900],
        tailwindConfig.theme.colors["app-blue"][900],
        tailwindConfig.theme.colors["app-amber"][900],
        tailwindConfig.theme.colors["app-green"][900],
        tailwindConfig.theme.colors["app-red"][900],
        tailwindConfig.theme.colors["app-blue-gray"][500],
        tailwindConfig.theme.colors["app-indigo"][500],
        tailwindConfig.theme.colors["app-red"][500],
        tailwindConfig.theme.colors["app-blue"][500],
        tailwindConfig.theme.colors["app-light-blue"][500],
        tailwindConfig.theme.colors["app-green"][500],
        tailwindConfig.theme.colors["app-amber"][500],
        tailwindConfig.theme.colors["app-indigo"][300],
        tailwindConfig.theme.colors["app-blue-gray"][300],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors["app-blue-gray"][900],
        tailwindConfig.theme.colors["app-indigo"][900],
        tailwindConfig.theme.colors["app-light-blue"][900],
        tailwindConfig.theme.colors["app-blue"][900],
        tailwindConfig.theme.colors["app-amber"][900],
        tailwindConfig.theme.colors["app-green"][900],
        tailwindConfig.theme.colors["app-red"][900],
        tailwindConfig.theme.colors["app-blue-gray"][500],
        tailwindConfig.theme.colors["app-indigo"][500],
        tailwindConfig.theme.colors["app-red"][500],
        tailwindConfig.theme.colors["app-blue"][500],
        tailwindConfig.theme.colors["app-light-blue"][500],
        tailwindConfig.theme.colors["app-green"][500],
        tailwindConfig.theme.colors["app-amber"][500],
        tailwindConfig.theme.colors["app-indigo"][300],
        tailwindConfig.theme.colors["app-blue-gray"][300],
      ],
      borderWidth: 0,
    },
  ],
};

export default function DashboardCard06({
  title = "Distribución de Presupuesto por Área",
  data = chartData,
  size = "col-span-full xl:col-span-6",
}: {
  title?: string;
  data?: ChartData;
  size?: string;
}) {
  return (
    <div
      className={`flex flex-col ${size}  bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700`}
    >
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={data} width={389} height={260} />
    </div>
  );
}
