const governmentTableHeaders = [
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
];

const governmentAreas = [
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
];

export default function DashboardCard07() {
  return (
    <div className='col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-700'>
      <header className='px-5 py-4 border-b border-slate-100 dark:border-slate-700'>
        <h2 className='font-semibold text-slate-800 dark:text-slate-100'>
          Ejecución de Presupuesto Global por Áreas
        </h2>
      </header>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full dark:text-slate-300'>
            {/* Table header */}
            <thead className='text-xs uppercase text-app-blue-gray-500 dark:text-slate-500 bg-app-blue-gray-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm'>
              <tr>
                {governmentTableHeaders.map((title, index) => (
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
              {governmentAreas.map((row, index) => (
                <tr key={index}>
                  <td className='p-2'>
                    <div className='flex items-center'>
                      <div className='text-app-blue-gray-900 dark:text-slate-100'>
                        {row.category}
                      </div>
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center text-app-blue-gray-700'>
                      {row.budget}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center text-app-blue-gray-700'>
                      {row.actual}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center text-app-blue-gray-900'>
                      {row.percentage}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
