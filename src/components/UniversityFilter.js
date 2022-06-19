import { useRef } from "react";
import { Link } from 'react-router-dom'
import Spinner from "./Spinner";
const UniversityFilter = ({ universities, searchUniversity, isLoading }) => {
  const nameInput = useRef(null);
  const countryInput = useRef(null);
  const domainsInput = useRef(null);

  const searchQuery = () => {
    const name    = nameInput.current.value.trim().toLowerCase()
    const country = countryInput.current.value.trim().toLowerCase()    
    const domains = domainsInput.current.value.trim().toLowerCase()
    var newParams = ''

    if (name) {
      newParams = `name=${name}`
      if (country) {
        newParams += `&country=${country}`
      }
      if (domains) {
        newParams += `&domain=${domains}`
      }
    } else if (country) {
      newParams = `country=${country}`
      if (domains) {
        newParams += `&domain=${domains}`
      }
    } else if (domains) {
      newParams = `domain=${domains}`
    } 
    searchUniversity(newParams)
  }

  
  return (
    <>
      <div className="flex justify-between items-center m-auto  w-4/5">
        <h1 className="text-center font-bold mt-2 mb-2">Universities List</h1>
        <div className='bg-cyan-700 px-3 text-white flex justify-center items-center h-10  hover:bg-cyan-900 hover:duration-300 mt-4 '>
          <Link to="/users">Users Filter Page</Link>
        </div>
      </div>

      <div className="m-auto flex justify-between items-center w-4/5 mb-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="name"
            ref={nameInput}
          />
        </div>
      
        <div>
          <label htmlFor="country">Country</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="country"
            ref={countryInput}
          />
        </div>

        <div>
          <label htmlFor="domain">Domain</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
            type="text"
            name="domain"
            ref={domainsInput}
          />
        </div>

        <button onClick={searchQuery} className="bg-cyan-700 text-white h-10 w-28 hover:bg-cyan-900 hover:duration-300 mt-4">Search</button>
      </div>
      {
        isLoading ? (
          <Spinner />
        ) :
        (
          <table className="relative m-auto shadow-2xl font-[Poppins] border border-cyan-200 w-4/5 overflow-hidden">
            <thead className="text-white">
              <tr>
                <th className="py-3 bg-cyan-800 text-left px-7">Name</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Country</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Web Page</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Domain</th>
              </tr>
            </thead>
            <tbody className="text-cyan-900 text-center">
              { universities &&
                universities.map((university, index) => (
                <tr key={index} className=" bg-cyan-400 hover:bg-cyan-100 cursur-pointer duration-300">
                  <td className="py-3 px-6 text-left overflow-hidden">{university.name}</td>
                  <td className="py-3 px-6 text-left">{university.country}</td>
                  <td className="py-3 px-6 text-left">{university.web_pages[0]}</td>
                  <td className="py-3 px-6 text-left">{university.domains[0]}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </>
  )
}

export default UniversityFilter