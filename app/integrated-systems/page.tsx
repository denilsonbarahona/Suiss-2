'use client';

import IntegratedSystemCard from '@/components/cards/integratedSystemCard';
import SearchForm from '@/components/search-form';

const cards = [
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
  {
    date: 'Vie 1 Jul 2024',
    subTitle: '50,000 registros de intervenciones',
    title: 'Sistema de Monitoreo de Intervenciones del Sector Salud',
    description:
      'Monitorea las intervenciones de salud pública y evalúa su efectividad en la población.',
    footer: 'Ministerio de Salud',
  },
];

export default function IntegratedSystems() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      <div className='w-full col-span-12 flex flex-col lg:flex-row gap-3 lg:gap-0 mb-8'>
        <h1 className='w-full text-3xl text-center lg:text-start text-slate-800 dark:text-slate-100 font-bold'>
          Sistemas Integrados
        </h1>
        <span className='flex items-center justify-center flex-col lg:flex-row gap-2'>
          <SearchForm
            placeholder='Buscar por institución'
            className='w-full lg:w-auto [&>input]:w-full [&>input]:lg:w-auto'
          />
          <button className='btn w-full lg:w-auto bg-app-light-blue-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap'>
            <svg
              className='w-4 h-4 mr-1'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='fill-current text-white'
                d='M8.76586 8.00335H8.23919L8.05253 7.82335C8.70586 7.06335 9.09919 6.07668 9.09919 5.00335C9.09919 2.61001 7.15919 0.670013 4.76586 0.670013C2.37253 0.670013 0.432526 2.61001 0.432526 5.00335C0.432526 7.39668 2.37253 9.33668 4.76586 9.33668C5.83919 9.33668 6.82586 8.94335 7.58586 8.29001L7.76586 8.47668V9.00335L11.0992 12.33L12.0925 11.3367L8.76586 8.00335ZM4.76586 8.00335C3.10586 8.00335 1.76586 6.66335 1.76586 5.00335C1.76586 3.34335 3.10586 2.00335 4.76586 2.00335C6.42586 2.00335 7.76586 3.34335 7.76586 5.00335C7.76586 6.66335 6.42586 8.00335 4.76586 8.00335Z'
              />
            </svg>
            Buscar
          </button>
        </span>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
        {cards.map((card, index) => (
          <div key={index} className='w-full'>
            <IntegratedSystemCard
              date={card.date}
              subTitle={card.subTitle}
              title={card.title}
              description={card.description}
              footer={card.footer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
