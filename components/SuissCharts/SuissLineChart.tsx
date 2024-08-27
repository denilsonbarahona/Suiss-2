"use client";

import LineChart05 from "@/components/charts/line-chart-05";

// Import utilities
import { tailwindConfig, hexToRGB } from "@/components/utils/utils";

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill?: boolean;
    backgroundColor?: string;
    borderWidth: number;
    tension: number;
    pointRadius: number;
    pointHoverRadius: number;
    pointBackgroundColor: string;
    pointHoverBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverBorderWidth: number;
    clip: number;
  }[];
  labelStyle?: string;
  showLabels?: boolean;
};

const chartData = {
  labels: [
    "ATLANTIDA",
    "COLON",
    "COMAYAGUA",
    "COPAN",
    "CORTES",
    "CHOLUTECA",
    "EL PARAISO",
    "FRANCISCO MORAZAN",
    "GRACIAS A DIOS",
    "INTIBUCA",
    "ISLAS DE LA BAHIA",
    "LA PAZ",
    "LEMPIRA",
    "OCOTEPEQUE",
    "OLANCHO",
    "SANTA BARBARA",
    "VALLE",
    "YORO",
  ],
  datasets: [
    {
      label: "Pobreza Extrema",
      data: [
        320, 729, 2450, 3459, 547, 5221, 5752, 4245, 2942, 3145, 9, 2380, 686,
        652, 4840, 2559, 1729, 4071,
      ],
      borderColor: tailwindConfig.theme.colors["app-red"][900],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-red"][900]
      )}, 0.08)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: tailwindConfig.theme.colors["app-red"][900],
      pointHoverBackgroundColor: tailwindConfig.theme.colors["app-red"][900],
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    {
      label: "Pobreza Moderada",
      data: [
        1947, 3918, 15799, 17018, 2863, 26144, 28276, 15052, 9146, 18522, 198,
        17361, 3709, 4686, 19812, 15967, 6310, 15678,
      ],
      borderColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-light-blue"][900]
      )}, 0.25)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-light-blue"][900]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-light-blue"][900]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
    {
      label: "No Pobre",
      data: [
        3563, 4478, 17995, 16486, 2569, 16699, 21599, 12709, 2891, 16448, 1290,
        16309, 4601, 8255, 24831, 13858, 4214, 19608,
      ],
      borderColor: tailwindConfig.theme.colors["app-green"][900],
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-green"][900]
      )}, 0.25)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-green"][900]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-green"][900]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
};

export default function SuissLineChart({
  title,
  data = chartData,
}: {
  title: string;
  data?: ChartData;
}) {
  return (
    <div className="h-full flex flex-col col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart05 data={data} width={800} height={300} />
    </div>
  );
}
