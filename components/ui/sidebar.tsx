"use client";

import { useEffect, useRef, useState } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { Transition } from "@headlessui/react";
import { getBreakpoint } from "../utils/utils";
import SidebarLink from "./sidebar-link";
import Logo from "./logo";
import HomeIcon from "../icons/HomeIcon";
import GovernmentIcon from "../icons/Government";
import SocialIcon from "../icons/SocialIcon";
import SocialInstitutionIcon from "../icons/socialInstitution";
import IntegrationIcon from "../icons/IntegrationIcon";
import PovertyIcon from "../icons/PovertyIcon";
import GeographicIcon from "../icons/GeographicIcon";
import PopulationIcon from "../icons/PopulationIcon";
import HistoricalIcon from "../icons/HistoricalIcon";
import BudgetIcon from "../icons/BudgetIcon";
import EconomicIcon from "../icons/EconomicIcon";
import FinancingIcon from "../icons/FinancingIcon";

const sideBarOptions = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Áreas de Acción Gobierno",
    href: "/government-action-areas",
    icon: GovernmentIcon,
  },
  {
    name: "Programas Sociales",
    href: "/social-programs",
    icon: SocialIcon,
  },
  {
    name: "Instituciones Sector Social",
    href: "/social-institutions",
    icon: SocialInstitutionIcon,
  },
  {
    name: "Sistemas Integrados",
    href: "/integrated-systems",
    icon: IntegrationIcon,
  },
  /*   {
    name: "Reducción de la Pobreza",
    href: "/poverty-reduction",
    icon: PovertyIcon,
  }, */
  /*   {
    name: "Impacto Geográfico",
    href: "/geographic-impact",
    icon: GeographicIcon,
  }, */
  {
    name: "Población",
    href: "/population",
    icon: PopulationIcon,
  },
  /*   {
    name: "Desempeño Histórico de Programas",
    href: "/historical-performance",
    icon: HistoricalIcon,
  }, */
  {
    name: "Ejecución y Presupuesto",
    href: "/execution-and-budget",
    icon: BudgetIcon,
  },
  /*   {
    name: 'Indicadores Económicos y Demográficos',
    href: '/economic-indicators',
    icon: EconomicIcon,
  }, */
  {
    name: "Fuentes de Financiamiento",
    href: "/financing-sources",
    icon: FinancingIcon,
  },
];

export default function Sidebar() {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useAppProvider();
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const segments = useSelectedLayoutSegments();
  const [breakpoint, setBreakpoint] = useState<string | undefined>(
    getBreakpoint()
  );
  const expandOnly =
    !sidebarExpanded && (breakpoint === "lg" || breakpoint === "xl");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleBreakpoint = () => {
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleBreakpoint);
    return () => {
      window.removeEventListener("resize", handleBreakpoint);
    };
  }, [breakpoint]);

  return (
    <div className={`min-w-fit ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
      {/* Sidebar backdrop (mobile only) */}
      <Transition
        className="fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto"
        show={sidebarOpen}
        enter="transition-opacity ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      {/* Sidebar */}
      <Transition
        show={sidebarOpen}
        unmount={false}
        as="div"
        id="sidebar"
        ref={sidebar}
        className="flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-slate-900 border-r dark:border-none p-4 transition-all duration-200 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-5 pr-3 sm:px-2">
          {/* Close button */}
          <button
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Logo />
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul>
              {sideBarOptions.map((option) => (
                <li
                  className={`px-3 py-2 rounded-3xl mb-0.5 last:mb-0 ${
                    segments.includes(option.href.replace("/", "")) &&
                    "bg-app-red-900"
                  }`}
                  key={option.href}
                >
                  <SidebarLink href={option.href}>
                    <div className="flex items-center">
                      <div className="w-5 flex justify-center items-center">
                        <option.icon
                          color={
                            segments.includes(option.href.replace("/", ""))
                              ? "#ffff"
                              : "#575757"
                          }
                          className="shrink-0 h-6 w-6 items-center dark:text-white"
                          viewBox="0 0 24 24"
                        />
                      </div>
                      <span
                        className={`text-xs font-medium text-app-gray-500 dark:text-white ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                          segments.includes(option.href.replace("/", "")) &&
                          "text-white"
                        }
                        2xl:whitespace-normal 2xl:break-words
                        ${sidebarExpanded && "whitespace-normal break-words"}`}
                      >
                        {option.name}
                      </span>
                    </div>
                  </SidebarLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button
              className="bg-app-gray-500 p-1 rounded-md"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-white"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-white" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
}
