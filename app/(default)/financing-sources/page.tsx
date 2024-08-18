'use client';

import FinancingDetailCard from '@/components/cards/financingDetailCard';
import FinancingSourcesCard from '@/components/cards/financingSourcesCard';
import SearchIcon from '@/components/icons/SearchIcon';
import WarnningIcon from '@/components/icons/WarnningIcon';

const cards = [
  {
    title: 'Gubernamentales',
    description: 'Fondos provenientes del gobierno nacional, regional o local.',
    icon: SearchIcon,
  },
  {
    title: 'Internacionales',
    description:
      'Fondos provenientes de organizaciones internacionales, gobiernos extranjeros o bancos multilaterales.',
    icon: SearchIcon,
  },
];

const detailCards = [
  {
    title: 'Banco Mundial (BM)',
    description: [
      'Programa de Mejoramiento de la Infraestructura Escolar: Financia la construcción y rehabilitación de escuelas en zonas rurales y urbanas para mejorar el acceso a la educación.',
      'Proyecto de Salud Comunitaria: Apoya la expansión de servicios de salud primaria y la capacitación de personal médico en comunidades desfavorecidas.',
    ],
    Icon: WarnningIcon,
  },
  {
    title: 'Banco Interamericano de Desarrollo (BID)',
    description: [
      'Programa de Apoyo a la Red Hospitalaria: Financia la construcción y equipamiento de hospitales en zonas necesitadas para mejorar los servicios de salud.',
      'Programa de Crédito para la Agroindustria: Proporciona financiamiento a pequeños y medianos productores agropecuarios para mejorar sus capacidades productivas y acceso a mercados.',
    ],
    Icon: WarnningIcon,
  },
  {
    title: 'Préstamos del Banco Mundial',
    description: [
      'Programa de Sostenibilidad Fiscal: Apoya las reformas fiscales y administrativas para mejorar la eficiencia del gasto público y aumentar la inversión en programas sociales.',
      'Iniciativa de Resiliencia Climática: Financia proyectos para mejorar la resiliencia ante el cambio climático y mitigar sus efectos en comunidades vulnerables.',
    ],
    Icon: WarnningIcon,
  },
  {
    title: 'Préstamos del Banco Mundial',
    description: [
      'Programa de Sostenibilidad Fiscal: Apoya las reformas fiscales y administrativas para mejorar la eficiencia del gasto público y aumentar la inversión en programas sociales.',
      'Iniciativa de Resiliencia Climática: Financia proyectos para mejorar la resiliencia ante el cambio climático y mitigar sus efectos en comunidades vulnerables.',
    ],
    Icon: WarnningIcon,
  },
];

export default function IntegratedSystems() {
  return (
    <div className='relative bg-white dark:bg-slate-900 h-full'>
      <div className='relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-app-red-900 dark:bg-transparent dark:bg-gradient-to-b dark:from-indigo-500/70 dark:to-indigo-500/30 overflow-hidden'>
        <div
          className='absolute bottom-0 pointer-events-none'
          aria-hidden='true'
        >
          <svg
            width='905'
            height='211'
            viewBox='0 0 905 211'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M76.5951 216.466C76.6538 216.395 76.7212 216.334 76.7799 216.263C82.1899 210.429 89.3144 206.253 95.8097 201.706C103.736 196.154 111.542 190.412 119.182 184.653C120.439 183.207 122.021 181.138 121.589 179.087C121.369 178.044 120.612 177.261 119.713 176.721C118.303 175.881 116.729 175.79 115.139 176.04C113.298 176.324 111.509 176.888 109.755 177.499C107.597 178.249 95.088 183.904 91.1053 186.203C87.3312 188.383 78.527 192.556 83.6337 184.89C87.1141 179.669 102.82 162.734 106.326 158.548C108.602 155.829 111.597 152.736 111.275 148.909C111.157 147.454 110.679 146.001 109.417 145.159C108.333 144.444 106.995 144.429 105.764 144.695C103.247 145.244 100.932 146.808 98.8871 148.311C94.7884 151.325 81.8304 165.921 78.3991 169.077C75.8353 171.433 68.5578 175.925 71.9559 168.882C76.7928 158.859 83.8694 150.508 89.5128 141.011C91.8347 137.094 94.1334 132.677 94.2919 128.032C94.4031 124.816 92.9 119.974 88.8442 120.452C87.2297 120.636 85.7741 121.575 84.5376 122.571C83.0614 123.758 81.7329 125.146 80.4944 126.584C71.5915 136.909 64.7323 149.156 57.3117 160.565C54.6791 164.616 51.1636 164.186 52.4323 159.085C55.3094 147.522 62.3761 137.583 64.1949 125.547C64.6472 122.541 64.6394 118.1 61.1193 116.969C58.6181 116.162 56.2631 117.392 54.5475 119.168C52.7159 121.059 51.3692 123.443 49.9745 125.668C48.0621 128.709 46.4462 131.93 44.9118 135.182C42.9067 139.437 40.8379 143.671 38.9324 147.968C36.9351 152.454 35.0421 157.481 32.0093 161.403C30.9982 162.713 29.4592 164.663 27.6392 166.703C26.8561 166.27 26.2003 165.676 25.7005 164.906C23.5312 161.501 23.0149 157.278 21.4772 153.589C19.6309 149.184 17.4741 143.703 14.3286 140.05C12.7692 138.234 10.5061 136.865 8.12038 136.959C3.78347 137.128 1.25997 141.415 0.869112 145.292C0.801305 145.963 0.77913 146.645 0.775793 147.318C3.37559 154.804 4.80185 162.919 6.2744 170.629C7.41177 176.599 5.36168 183.233 5.26891 189.256C5.04513 204.338 17.2321 220.314 30.0122 227.419C35.8803 230.68 42.647 232.266 49.3551 231.919C60.9482 231.327 69.1116 224.632 76.5851 216.484L76.5951 216.466Z'
              fill='white'
            />
            <path
              d='M898.747 35.3336C898.713 35.2848 898.686 35.2322 898.651 35.1834C895.907 30.8063 894.491 25.6341 892.737 20.7939C890.595 14.8868 888.313 9.02312 885.992 3.26031C885.297 2.22768 884.267 0.886871 882.909 0.811284C882.217 0.772699 881.599 1.11568 881.108 1.58768C880.343 2.33014 880.021 3.3018 879.909 4.34085C879.776 5.543 879.828 6.75986 879.915 7.96301C880.021 9.44238 881.454 18.2403 882.223 21.1257C882.952 23.8602 884.082 30.0849 880.138 25.5886C877.452 22.5248 869.486 9.81807 867.454 6.91267C866.133 5.02643 864.699 2.62659 862.245 2.18238C861.314 2.0105 860.322 2.06471 859.581 2.71409C858.949 3.27308 858.714 4.1092 858.673 4.92581C858.592 6.59689 859.182 8.31251 859.779 9.84815C860.977 12.9269 867.94 23.5162 869.34 26.2005C870.384 28.2057 871.971 33.5272 868.129 30.2073C862.662 25.4822 858.621 19.6351 853.619 14.4932C851.555 12.3759 849.174 10.1887 846.288 9.30503C844.291 8.69221 841.001 8.81715 840.616 11.4407C840.459 12.4841 840.802 13.5553 841.217 14.4987C841.712 15.6247 842.358 16.692 843.051 17.7114C848.021 25.0369 854.541 31.4055 860.442 37.9846C862.537 40.3192 861.674 42.4509 858.69 40.794C851.926 37.0377 846.888 30.9287 839.648 27.7559C837.84 26.9646 835.054 26.2197 833.751 28.2358C832.822 29.6676 833.196 31.3519 834.02 32.7275C834.896 34.1952 836.163 35.4421 837.323 36.6923C838.907 38.4048 840.653 39.9619 842.433 41.4731C844.763 43.4488 847.068 45.4608 849.44 47.3811C851.916 49.3909 854.748 51.4266 856.694 53.9903C857.345 54.8455 858.308 56.1398 859.279 57.6253C858.876 58.0432 858.393 58.3542 857.825 58.5374C855.325 59.3227 852.589 58.9332 850.017 59.2744C846.943 59.6882 843.142 60.115 840.321 61.4704C838.919 62.1414 837.679 63.3292 837.334 64.8408C836.708 67.5886 838.97 69.8946 841.335 70.7944C841.744 70.9502 842.168 71.0793 842.59 71.1951C847.722 70.8291 853.051 71.3051 858.134 71.6838C862.068 71.9786 865.882 74.3843 869.643 75.4596C879.061 78.1465 891.136 73.2032 897.749 66.39C900.784 63.2614 902.921 59.2865 903.836 55.0221C905.423 47.6534 902.604 41.4046 898.757 35.343L898.747 35.3336Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='relative w-full max-w-2xl mx-auto text-center'>
          <div className='mb-5'>
            <h1 className='text-2xl md:text-3xl text-white font-bold'>
              Fuentes de Financiamiento
            </h1>
          </div>
          <form className='relative'>
            <label htmlFor='action-search' className='sr-only'>
              Search
            </label>
            <input
              id='action-search'
              className='form-input pl-9 py-3 rounded-3xl dark:bg-slate-800 dark:border-slate-800 dark:hover:border-slate-900 focus:border-slate-300 dark:focus:border-slate-900 w-full'
              type='search'
            />
            <button
              className='absolute inset-0 right-auto group'
              type='submit'
              aria-label='Search'
            >
              <svg
                className='w-4 h-4 shrink-0 fill-current text-app-gray-800 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-5 mr-2'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
                <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto bg-app-blue-gray-50 dark:bg-slate-800'>
        <div className='space-y-8'>
          <div>
            <div className='mb-5'>
              <h2 className='text-app-blue-gray-900 font-semibold text-xl dark:text-slate-100'>
                Principales Fuentes de Financiamiento
              </h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {cards.map((card, index) => (
                <div key={index} className='w-full'>
                  <FinancingSourcesCard
                    title={card.title}
                    description={card.description}
                    Icon={card.icon}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='mb-5'>
              <h2 className='text-app-blue-gray-900 font-semibold text-xl dark:text-slate-100'>
                Detalles de Fuentes de Financiamiento
              </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {detailCards.map((card, index) => (
                <div key={index}>
                  <FinancingDetailCard
                    title={card.title}
                    description={card.description}
                    Icon={card.Icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
