export const Table = () => {
  return (
    <table className="w-full table-auto min-w-max">
      <thead>
        <tr className="grid h-10 grid-cols-5 text-sm leading-normal text-gray-600 uppercase bg-gray-200 rounded md:h-12">
          <th className="px-6 py-3 text-left">Name</th>
          <th className="px-6 py-3 text-left">Email</th>
          <th className="px-6 py-3 text-center md:block">Active</th>
          <th className="px-6 py-3 text-center md:block">Report Types</th>
          <th className="px-6 py-3 text-center md:block">Actions</th>
        </tr>
      </thead>
    </table>
  )
}
