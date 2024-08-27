"use client";

import SuissBarChart from "@/components/SuissCharts/suissBarChart";
import SuissLineChart from "@/components/SuissCharts/SuissLineChart";
import { tailwindConfig } from "@/components/utils/utils";
import DashboardCard06 from "../dashboard/dashboard-card-06";
import SuissAnalytics from "@/components/SuissCharts/SuissAnalytics";
import SuissBarTopChart from "@/components/SuissCharts/SuissBarTopChart";
import Map from "@/components/SuissCharts/Map";

const chartData = {
  labels: ["RS", "CM", "SE", "ALF", "IS"],
  datasets: [
    // Blue bars
    {
      label: "2023",
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors["app-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  showLabels: false,
};

const donutChartData = {
  labels: ["Hombres", "Mujeres"],
  datasets: [
    {
      label: "Top Countries",
      data: [50, 50],
      backgroundColor: [
        tailwindConfig.theme.colors["app-blue-gray"][900],
        tailwindConfig.theme.colors["app-indigo"][900],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors["app-blue-gray"][900],
        tailwindConfig.theme.colors["app-indigo"][900],
      ],
      borderWidth: 0,
    },
  ],
};

const dataAnalytics = {
  title: "Distribución de pobreza por grupos de edad",
  headers: ["GRUPO DE EDADES", "% DE POBREZA"],
  rows: [
    {
      title: "0-14",
      number: "60%",
    },
    {
      title: "15-24",
      number: "55%",
    },
    {
      title: "25-54",
      number: "50%",
    },
    {
      title: "55+",
      number: "45%",
    },
  ],
  hideFooter: true,
};

const dataAnalytics2 = {
  title: "Efectividad de programas sociales",
  headers: ["PROGRAMA SOCIAL", "% REDUCCIÓN POBREZA"],
  rows: [
    {
      title: "Programa Red Solidaria (PRS)",
      number: "5%",
    },
    {
      title: "Programa de Acción Solidaria (PROASOL)",
      number: "7%",
    },
    {
      title: "Secretaría de Salud",
      number: "4%",
    },
    {
      title: "Transferencias Monetarias Condicionadas (TMC)",
      number: "3%",
    },
    {
      title: "Secretaría de la Mujer",
      number: "5%",
    },
  ],
  hideFooter: true,
};

const dataAnalytics3 = {
  title: "Resumen de desempeño de programas",
  headers: ["INDICADOR", "VALOR"],
  rows: [
    {
      title: "Programas exitosos",
      number: "45%",
    },
    {
      title: "Programas en curso",
      number: "40%",
    },
    {
      title: "Impacto total: Reducción pobreza",
      number: "10%",
    },
  ],
  hideFooter: true,
};

const barChartData = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    // Blue bars
    {
      label: "Área Urbana",
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors["app-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: "Área Rural",
      data: [1600, 700, 1000, 400, 1300],
      backgroundColor: tailwindConfig.theme.colors["app-light-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-light-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
  labelStyle: "font-semibold text-base",
  showLabels: true,
};

const barTopchartData = {
  labels: ["RS", "SE", "IS", "CM", "ALF", "NP"],
  longLabels: [
    "Red Solidaria (RS)",
    "Salud y Educación (SE)",
    "Infraestructura Social (IS)",
    "Ciudad Mujer (CM)",
    "Alfabetización (ALF)",
    "Nombre Programa (NP)",
  ],
  datasets: [
    {
      label: "Área Urbana",
      data: [5000, 4000, 4000, 3800, 5200, 5100],
      backgroundColor: tailwindConfig.theme.colors["app-red"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-red"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    {
      label: "Área Rural",
      data: [4800, 4200, 4800, 1800, 3300, 3500],
      backgroundColor: tailwindConfig.theme.colors["app-red"][500],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-red"][900],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
  ],
};

export default function PovertyReduction() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8">
        <h1 className="w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold">
          Informes de Reducción de la Pobreza
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <div>
          <SuissBarChart
            title='Evolución del porcentaje de pobreza (2014-2024)'
            chartData={chartData}
          />
        </div> */}
        <div>
          <SuissLineChart title="Comparación de pobreza extrema y moderada" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-8 mb-8">
        <div className="w-full lg:w-3/4 bg-white dark:bg-slate-800 rounded-3xl py-4 px-2">
          <Map title="Regiones con tasas de pobreza" choroplethMap />
        </div>
        <div className="w-full lg:w-1/4">
          <DashboardCard06
            title="Distribución de pobreza por género"
            data={donutChartData}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <SuissAnalytics data={dataAnalytics} />
        <SuissAnalytics data={dataAnalytics2} />
        <SuissAnalytics data={dataAnalytics3} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <SuissBarChart
            title="Comparación de la pobreza en áreas urbanas y rurales"
            chartData={barChartData}
          />
        </div>
        <div className="[&>div]:h-full">
          <SuissBarTopChart
            title="Comparación de la pobreza en áreas urbanas y rurales"
            data={barTopchartData}
          />
        </div>
      </div>
    </div>
  );
}
