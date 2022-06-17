const UniversityFilter = () => {
  return (
    <>
      <h1 className="text-center font-bold mt-2 mb-2">Universities List</h1>

      <div className="m-auto flex justify-between items-center w-4/5 mb-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="name"
          />
        </div>
      
        <div>
          <label htmlFor="country">Country</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="country"
          />
        </div>

        <div>
          <label htmlFor="domain">Domain</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="domain"
          />
        </div>

        <button className="bg-cyan-700 text-white h-10 w-28 hover:bg-cyan-900 hover:duration-300 mt-4">Search</button>
      </div>

      <table className="relative m-auto shadow-2xl font-[Poppins] border border-cyan-200 w-4/5 overflow-hidden">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-cyan-800">Web Page</th>
            <th className="py-3 bg-cyan-800">Country</th>
            <th className="py-3 bg-cyan-800">Domain</th>
            <th className="py-3 bg-cyan-800">Name</th>
          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center">
          <tr className=" bg-cyan-400 hover:bg-cyan-100 hover:scale-105 cursur-pointer duration-300">
            <td className="py-3 px-6">http://www.meu.edu.jo/</td>
            <td className="py-3 px-6">Jordan</td>
            <td className="py-3 px-6">meu.edu.jo</td>
            <td className="py-3 px-6">Middle East University</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default UniversityFilter