"use client";

import SearchForm from "@/components/search-form";
import DashboardCard06 from "../dashboard/dashboard-card-06";
import DashboardCard07 from "../dashboard/dashboard-card-07";
import WelcomeBanner from "../dashboard/welcome-banner";
import GovernmentActionAreas from "@/components/cards/governmentAreas";
import HealthIcon from "@/components/icons/HealthIcon";
import EducationIcon from "@/components/icons/EducationIcon";
import SocialSecurityIcon from "@/components/icons/SocialSecurityIcon";
import SocialDevelopmentIcon from "@/components/icons/SocialDevelopment";
import SocialWorkIcon from "@/components/icons/SocialWorkIcon";
import CultureIcon from "@/components/icons/CultureIcon";
import WomenIcon from "@/components/icons/WomenIcon";
import HumanRightsIcon from "@/components/icons/HumanRightsIcon";
import FamilyIcon from "@/components/icons/FamilyIcon";
import AgrarianIcon from "@/components/icons/AgrarianIcon";
import AlcoholPreventionIcon from "@/components/icons/AlcoholPreventionIcon";
import WaterIcon from "@/components/icons/WaterIcon";
import EntrepreneurshipIcon from "@/components/icons/EntrepreneurshipIcon";
import SuissTable from "@/components/SuissTables/SuissTable";

const governmentActionAreas = [
  {
    icon: HealthIcon,
    title: "Salud",
    description:
      "Administración de la salud pública, programas preventivos, manejo de hospitales y políticas de salud.",
    href: "",
  },
  {
    icon: EducationIcon,
    title: "Educación",
    description:
      "Supervisión de educación en todos los niveles, diseño de currículos y mejora de la calidad educativa.",
    href: "",
  },
  {
    icon: SocialSecurityIcon,
    title: "Seguridad Social",
    description:
      "Servicios de seguridad social, incluyendo atención médica, pensiones y seguros de invalidez.",
    href: "",
  },
  {
    icon: SocialDevelopmentIcon,
    title: "Desarrollo Social",
    description:
      "Reducción de la pobreza, programas sociales y oportunidades para los sectores vulnerables.",
    href: "",
  },
  {
    icon: SocialWorkIcon,
    title: "Trabajo y Seguridad Social",
    description:
      "Políticas laborales, mejora de condiciones, inclusión laboral y capacitación.",
    href: "",
  },
  {
    icon: CultureIcon,
    title: "Cultura y Patrimonio",
    description:
      "Preservación del patrimonio, fomento de las artes y promoción de la diversidad cultural.",
    href: "",
  },
  {
    icon: WomenIcon,
    title: "Mujer",
    description:
      "Derechos de las mujeres, igualdad de género, prevención de violencia y acceso a educación y empleo.",
    href: "",
  },
  {
    icon: HumanRightsIcon,
    title: "Derechos Humanos",
    description:
      "Protección de derechos humanos, supervisión, educación y colaboración internacional.",
    href: "",
  },
  {
    icon: FamilyIcon,
    title: "Infancia y Familia",
    description:
      "Protección de los derechos de la niñez, programas de atención integral y políticas públicas.",
    href: "",
  },
  {
    icon: AgrarianIcon,
    title: "Agrario",
    description:
      "Administración de tierras, apoyo a agricultores y promoción de prácticas agrícolas sostenibles.",
    href: "",
  },
  {
    icon: AlcoholPreventionIcon,
    title: "Prevención Alcoholismo y Drogadicción",
    description:
      "Prevención y tratamiento del alcoholismo y drogadicción, programas educativos y de rehabilitación.",
    href: "",
  },
  {
    icon: WaterIcon,
    title: "Agua Potable y Saneamiento",
    description:
      "Supervisión y regulación de servicios de agua potable, calidad y accesibilidad de estos servicios.",
    href: "",
  },
  {
    icon: EntrepreneurshipIcon,
    title: "Emprendimiento",
    description:
      "Apoyo a emprendedores, capacitación, asesoría y financiamiento para iniciativas emprendedoras.",
    href: "",
  },
];

const dataTable = {
  title: "Ejecución de Presupuesto Global por Áreas",
  headers: [
    {
      title: "ÁREA",
    },
    {
      title: "TOTAL ASIGNADO",
    },
    {
      title: "EJECUTADO",
    },
    {
      title: "% EJECUTADO",
    },
  ],
  rows: [
    {
      category: "Salud",
      budget: "$500,000",
      actual: "$450,000",
      percentage: "90%",
    },
    {
      category: "Educación",
      budget: "$400,000",
      actual: "$380,000",
      percentage: "95%",
    },
    {
      category: "Seguridad Social",
      budget: "$350,000",
      actual: "$320,000",
      percentage: "91%",
    },
    {
      category: "Desarrollo Social",
      budget: "$600,000",
      actual: "$580,000",
      percentage: "97%",
    },
    {
      category: "Trabajo y Seguridad Social",
      budget: "$300,000",
      actual: "$250,000",
      percentage: "83%",
    },
  ],
};

export default function GovernmentAreas() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <WelcomeBanner
        title="Áreas de acción del gobierno"
        description="El gobierno de la república de Honduras se enorgullece de abordar las áreas más importantes"
      />

      <div className="grid grid-cols-12 gap-6">
        <SuissTable data={dataTable} />
        <DashboardCard06 />
        <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0">
          <h1 className="w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold">
            Listado de Áreas de Acción del Gobierno
          </h1>
          <span className="flex items-center justify-center flex-col lg:flex-row gap-2">
            <SearchForm
              placeholder="Buscar por institución"
              className="w-full lg:w-auto [&>input]:w-full [&>input]:lg:w-auto"
            />
            <button className="btn w-full lg:w-auto bg-app-light-blue-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-white"
                  d="M8.76586 8.00335H8.23919L8.05253 7.82335C8.70586 7.06335 9.09919 6.07668 9.09919 5.00335C9.09919 2.61001 7.15919 0.670013 4.76586 0.670013C2.37253 0.670013 0.432526 2.61001 0.432526 5.00335C0.432526 7.39668 2.37253 9.33668 4.76586 9.33668C5.83919 9.33668 6.82586 8.94335 7.58586 8.29001L7.76586 8.47668V9.00335L11.0992 12.33L12.0925 11.3367L8.76586 8.00335ZM4.76586 8.00335C3.10586 8.00335 1.76586 6.66335 1.76586 5.00335C1.76586 3.34335 3.10586 2.00335 4.76586 2.00335C6.42586 2.00335 7.76586 3.34335 7.76586 5.00335C7.76586 6.66335 6.42586 8.00335 4.76586 8.00335Z"
                />
              </svg>
              Buscar
            </button>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
        {governmentActionAreas.map((area, index) => (
          <div key={index} className="grid-cols-4">
            <GovernmentActionAreas
              Icon={area.icon}
              title={area.title}
              description={area.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
