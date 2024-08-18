import DateSelect from '@/components/date-select';
import { SocialProgram } from './page';

export default function FilterSidebar({
  actionAreas,
}: {
  actionAreas: SocialProgram[];
}) {
  return (
    <div>
      <div className='bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700 p-5 min-w-[15rem]'>
        <div className='grid grid-cols-1 gap-3'>
          <div>
            <div className='text-sm text-app-blue-gray-900 dark:text-slate-100 font-normal mb-3'>
              Búsqueda avanzada
            </div>
            <ul className='text-sm font-medium space-y-2'>
              <li>
                <a className='text-indigo-500' href='#0'>
                  Ver todo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <select className='form-select w-full border-none shadow-none'>
              <option>Área de acción</option>
              {actionAreas.map((area, index) => (
                <option key={index}>{area.accionArea}</option>
              ))}
            </select>
          </div>
          <div>
            <select className='form-select w-full border-none shadow-none'>
              <option>Institución responsable</option>
              {actionAreas.map((area, index) => (
                <option key={index}>{area.institution}</option>
              ))}
            </select>
          </div>
          <div className='[&>div]:w-full [&>div>button]:w-full [&>div>button]:rounded-3xl'>
            <DateSelect />
          </div>
          <div>
            <label className='font-normal text-sm text-app-blue-gray-900 dark:text-white'>
              Palabra clave
            </label>
            <textarea
              id='keyword'
              className='form-textarea w-full focus:border-slate-300'
              rows={4}
              placeholder=''
              defaultValue={''}
            />
          </div>
          <span>
            <button className='btn w-full bg-app-light-blue-900 rounded-3xl hover:bg-indigo-600 text-white whitespace-nowrap'>
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
      </div>
    </div>
  );
}
