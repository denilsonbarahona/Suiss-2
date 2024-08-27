"use client";

import { useRouter } from "next/navigation";
import Datepicker from "@/components/datepicker";
import DashboardCard06 from "../../dashboard/dashboard-card-06";
import SuissAnalytics from "@/components/SuissCharts/SuissAnalytics";
import SuissAnalytics2 from "@/components/SuissCharts/SuissAnalytics2";
import SuissBarChart from "@/components/SuissCharts/suissBarChart";
import { tailwindConfig } from "@/components/utils/utils";
import SuissLineChart from "@/components/SuissCharts/SuissLineChart";
import { hexToRGB } from "@/components/utils/utils";

const lineChartData = {
  subTitle: "Reducción del índice de pobreza",
  subTitleValue: "15%",
  labels: ["12-01-2018", "01-01-2023"],
  datasets: [
    {
      label: "Metas",
      data: [0, 20],
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
      label: "Realidad",
      data: [0, 17],
      borderColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-red"][900]
      )}, 0.25)`,
      fill: true,
      backgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-red"][900]
      )}, 0.08)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-red"][900]
      )}, 0.25)`,
      pointHoverBackgroundColor: `rgba(${hexToRGB(
        tailwindConfig.theme.colors["app-red"][900]
      )}, 0.25)`,
      pointBorderWidth: 0,
      pointHoverBorderWidth: 0,
      clip: 20,
    },
  ],
};

const donutChartData = {
  labels: ["<18", "18-24", "24-34", ">35"],
  datasets: [
    {
      label: "Top Countries",
      data: [20, 40, 10, 30],
      backgroundColor: [
        tailwindConfig.theme.colors["app-indigo"][900],
        tailwindConfig.theme.colors["app-light-blue"][900],
        tailwindConfig.theme.colors["app-blue"][900],
        tailwindConfig.theme.colors["app-amber"][900],
      ],
      hoverBackgroundColor: [
        tailwindConfig.theme.colors["app-indigo"][900],
        tailwindConfig.theme.colors["app-light-blue"][900],
        tailwindConfig.theme.colors["app-blue"][900],
        tailwindConfig.theme.colors["app-amber"][900],
      ],
      borderWidth: 0,
    },
  ],
};

const dataAnalytics = {
  title: "Presupuesto y Financiación",
  headers: ["Tipo", "Monto"],
  rows: [
    {
      title: "Presupuesto Asignado",
      number: "80%",
    },
    {
      title: "Gastos Realizados",
      number: "60%",
    },
  ],
};

const dataAnalytics2 = {
  title: "Frecuencia de Entregas",
  headers: ["Tipo", "Monto"],
  rows: [
    {
      title: "2019",
      number: "90%",
    },
    {
      title: "2020",
      number: "80%",
    },
    {
      title: "2021",
      number: "70%",
    },
    {
      title: "2022",
      number: "60%",
    },
    {
      title: "2023",
      number: "50%",
    },
  ],
};

const dataAnalytics3 = {
  title: "Ejecución Global por Programa",
  headers: ["Indicador", "Valor"],
  rows: [
    {
      title: "% de Ejecución del Presupuesto",
      number: "30%",
    },
    {
      title: "Beneficiarios Atendidos",
      number: "10%",
    },
  ],
};

const barChartData = {
  labels: ["Norte (N)", "Central (C)", "Sus (S)", "Este (E)", "Oeste (O)"],
  datasets: [
    // Blue bars
    {
      label: "Beneficiarios",
      data: [1400, 500, 800, 200, 1200],
      backgroundColor: tailwindConfig.theme.colors["app-blue"][900],
      hoverBackgroundColor: tailwindConfig.theme.colors["app-blue"][500],
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    },
    // Light blue bars
    {
      label: "Porcentaje de Ejecución",
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

const dataTable = {
  title: "Programas sociales",
  headers: [
    {
      title: "NOMBRE DE PROGRAMA",
    },
    {
      title: "ÁREA DE ACCIÓN",
    },
    {
      title: "INSTITUCIÓN RESPONSABLE",
    },
    {
      title: "ESTADO",
    },
    {
      title: "INICIO",
    },
  ],
  rows: [
    {
      title: "Programa Red Solidaria (PRS)",
      accionArea: "Desarrollo Social",
      institution: "Secretaría de Desarrollo Social (SEDESOL)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Transferencias Monetarias Condicionadas (TMC)",
      accionArea: "Desarrollo Social",
      institution: "Secretaría de Desarrollo Social (SEDESOL)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Programa de Acción Solidaria (PROASOL)",
      accionArea: "Desarrollo Social",
      institution: "Secretaría de Desarrollo Social (SEDESOL)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Trabajo y Seguridad Social",
      accionArea: "Trabajo y Seguridad Social",
      institution: "Secretaría de Trabajo y Seguridad Social",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Salud",
      accionArea: "Salud",
      institution: "Secretaría de Salud (SESAL)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Educación",
      accionArea: "Educación",
      institution: "Secretaría de Educación (SEDUC)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Cultura, Artes y Patrimonio",
      accionArea: "Cultura y Patrimonio",
      institution: "Secretaría de Cultura, Artes y Patrimonio",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Cultura, Artes y Patrimonio",
      accionArea: "Cultura y Patrimonio",
      institution: "Secretaría de Cultura, Artes y Patrimonio",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de la Mujer",
      accionArea: "Mujer",
      institution: "Secretaría de la Mujer (SEMUJER)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
    {
      title: "Secretaría de Derechos Humanos",
      accionArea: "Derechos Humanos",
      institution: "Secretaría de Derechos Humanos (SEDH)",
      progress: "85%",

      startDate: "2000",
      to: "/social-programs/1",
    },
  ],
  showPagination: true,
};

export default function SocialProgram() {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0">
          <h1 className="w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold">
            Detalles del Programa Social
          </h1>
          <span className="flex items-center justify-center flex-col lg:flex-row gap-2">
            <button
              className="btn w-full lg:w-auto gap-3 bg-app-red-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap"
              onClick={() => router.push("/social-programs")}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6594 6.17087H3.35107L7.41774 2.10421C7.74274 1.77921 7.74274 1.24587 7.41774 0.920874C7.09274 0.595874 6.56774 0.595874 6.24274 0.920874L0.751074 6.41254C0.426074 6.73754 0.426074 7.26254 0.751074 7.58754L6.24274 13.0792C6.56774 13.4042 7.09274 13.4042 7.41774 13.0792C7.74274 12.7542 7.74274 12.2292 7.41774 11.9042L3.35107 7.83754H12.6594C13.1177 7.83754 13.4927 7.46254 13.4927 7.00421C13.4927 6.54587 13.1177 6.17087 12.6594 6.17087Z"
                  fill="white"
                />
              </svg>
              Volver
            </button>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12">
          <select className="form-select w-full border-none shadow-none">
            <option>Institución responsable</option>
            {dataTable.rows.map((area, index) => (
              <option key={index}>{area.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0">
          <h1 className="w-full text-lg font-semibold text-center lg:text-start text-slate-800 dark:text-slate-100">
            Programa Red Solidaria
          </h1>
          <span className="flex items-center justify-center flex-col lg:flex-row gap-2">
            <Datepicker />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <SuissLineChart
          title="Metas vs. Realidad a lo largo del tiempo."
          data={lineChartData}
        />
        <DashboardCard06
          size="col-span-full xl:col-span-4"
          title="Distribución Demográfica de los Beneficiarios"
          data={donutChartData}
        />
      </div>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <SuissAnalytics data={dataAnalytics} />
        <SuissAnalytics data={dataAnalytics2} />
        <SuissAnalytics data={dataAnalytics3} />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <SuissAnalytics2 />
        <SuissBarChart
          title="Ejecución por Ubicación Geográfica"
          chartData={barChartData}
        />
      </div>
    </div>
  );
}
