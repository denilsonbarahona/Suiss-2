'use client';
import PaginationClassic from '../pagination-classic';
import { useRouter } from 'next/navigation';

export type DataTable = {
  title: string;
  headers: Array<any>;
  rows: Array<any>;
  showPagination?: boolean;
};

const defaultData = {
  title: 'Ejecución de Presupuesto Global por Áreas',
  headers: [
    {
      title: 'ÁREA',
    },
    {
      title: 'TOTAL ASIGNADO',
    },
    {
      title: 'EJECUTADO',
    },
    {
      title: '% EJECUTADO',
    },
  ],
  rows: [
    {
      category: 'Salud',
      budget: '$500,000',
      actual: '$450,000',
      percentage: '90%',
    },
    {
      category: 'Educación',
      budget: '$400,000',
      actual: '$380,000',
      percentage: '95%',
    },
    {
      category: 'Seguridad Social',
      budget: '$350,000',
      actual: '$320,000',
      percentage: '91%',
    },
    {
      category: 'Desarrollo Social',
      budget: '$600,000',
      actual: '$580,000',
      percentage: '97%',
    },
    {
      category: 'Trabajo y Seguridad Social',
      budget: '$300,000',
      actual: '$250,000',
      percentage: '83%',
    },
  ],
  showPagination: false,
};

export default function SuissTable({
  data = defaultData,
}: {
  data?: DataTable;
}) {
  const router = useRouter();

  return (
    <>
      <div className='col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
        <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
          <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
            {data.title}
          </h2>
        </header>
        <div className='p-3'>
          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='table-auto w-full dark:text-slate-300'>
              {/* Table header */}
              <thead className='text-xs uppercase text-app-blue-gray-500 dark:text-slate-500 bg-app-blue-gray-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm'>
                <tr>
                  {data.headers.map((title, index) => (
                    <th className='p-2' key={index}>
                      <div
                        className={`font-semibold ${
                          index === 0 ? 'text-left' : 'text-center'
                        }`}
                      >
                        {title.title}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              {/* Table body */}
              <tbody className='text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700'>
                {/* Row */}
                {data.rows.map((row, index) => (
                  <tr key={index}>
                    {Object.entries(row).map(([key, value], cellIndex) => {
                      if (key != 'to') {
                        return (
                          <td
                            key={cellIndex}
                            className='p-2'
                            onClick={() => {
                              if (row.to) router.push(row.to);
                            }}
                            role={`${row.to && 'button'}`}
                          >
                            <div
                              className={`${
                                cellIndex != 0 &&
                                'text-center text-app-blue-gray-900'
                              } text-app-blue-gray-700 dark:text-slate-100`}
                            >
                              {value as string}
                            </div>
                          </td>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {data.showPagination && (
        <div className='px-6 py-8 bg-transparent dark:bg-transparent border-none dark:border-none rounded-sm'>
          <PaginationClassic data={data} />
        </div>
      )}
    </>
  );
}
