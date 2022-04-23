export default function Table() {
  // { labels, values }
  const labels = ['Product name', 'Color', 'Category', 'Price']
  const values = [
    ['Apple MacBook Pro 17', 'Sliver', 'Laptop', '$2999'],
    ['Apple MacBook Pro 17', 'Sliver', 'Laptop', '$2999'],
    ['Apple MacBook Pro 17', 'Sliver', 'Laptop', '$2999']
  ]
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {labels.map((label, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {value.map((item, index) => (
                <td
                  key={index}
                  scope="row"
                  className={`px-6 py-4 ${
                    index === 0 &&
                    'font-medium text-gray-900 dark:text-white whitespace-nowrap'
                  }`}
                >
                  {item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
