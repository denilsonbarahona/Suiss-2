import SearchForm from "@/components/search-form";
import FilterSidebar from "./filter-sidebar";
import SuissTable from "@/components/SuissTables/SuissTable";

type SocialProgram = {
  title: string;
  accionArea: string;
  institution: string;
};

const socialPrograms: SocialProgram[] = [
  {
    title: "Programa Red Solidaria (PRS)",
    accionArea: "Desarrollo Social",
    institution: "Secretaría de Desarrollo Social (SEDESOL)",
  },
  {
    title: "Transferencias Monetarias Condicionadas (TMC)",
    accionArea: "Desarrollo Social",
    institution: "Secretaría de Desarrollo Social (SEDESOL)",
  },
  {
    title: "Programa de Acción Solidaria (PROASOL)",
    accionArea: "Desarrollo Social",
    institution: "Secretaría de Desarrollo Social (SEDESOL)",
  },
  {
    title: "Secretaría de Trabajo y Seguridad Social",
    accionArea: "Trabajo y Seguridad Social",
    institution: "Secretaría de Trabajo y Seguridad Social",
  },
  {
    title: "Secretaría de Salud",
    accionArea: "Salud",
    institution: "Secretaría de Salud (SESAL)",
  },
  {
    title: "Secretaría de Educación",
    accionArea: "Educación",
    institution: "Secretaría de Educación (SEDUC)",
  },
  {
    title: "Secretaría de Cultura, Artes y Patrimonio",
    accionArea: "Cultura y Patrimonio",
    institution: "Secretaría de Cultura, Artes y Patrimonio",
  },
  {
    title: "Secretaría de Cultura, Artes y Patrimonio",
    accionArea: "Cultura y Patrimonio",
    institution: "Secretaría de Cultura, Artes y Patrimonio",
  },
  {
    title: "Secretaría de la Mujer",
    accionArea: "Mujer",
    institution: "Secretaría de la Mujer (SEMUJER)",
  },
  {
    title: "Secretaría de Derechos Humanos",
    accionArea: "Derechos Humanos",
    institution: "Secretaría de Derechos Humanos (SEDH)",
  },
];

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

export default function SocialPrograms() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0">
          <h1 className="w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold">
            Listado de Programas Sociales
          </h1>
          {/*  <span className="flex items-center justify-center flex-col lg:flex-row gap-2">
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
          </span> */}
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between gap-6">
        {/* <div className="w-full xl:w-1/4">
          <FilterSidebar actionAreas={socialPrograms} />
        </div> */}
        <div className="w-full xl:w-3/4">
          <SuissTable data={dataTable} />
        </div>
      </div>
    </div>
  );
}
