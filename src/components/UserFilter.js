import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Spinner from './Spinner'
import Modal from './Modal'
import UserDetailModal from './UserDetailModal'
import UserCreateForm from './UserCreateForm'

const UserFilter = ({users, isLoading}) => {
  const [usersData, setUsersData] = useState([])
  const [showProfile, setShowProfile] = useState(false)
  const [showingUser, setShowingUser] = useState({})
  const [createUser, setCreateUser] = useState(false);

  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 50

  // Get current Hotel
  const indexOfLastUser  = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers     = usersData.slice(indexOfFirstUser, indexOfLastUser)

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const [queryInput, setQueryInput] = useState("")
  const keys = ["email"]

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(queryInput))
    );
  };

  const handleChangeGender = (e) => {
    const filteredUsers = users.filter((user) => user.gender === e.target.value)
    setUsersData(filteredUsers)
  }

  useEffect(() => {
    setUsersData(users)
  }, [users])

  const cancelUserHandler = () => {
    setShowProfile(false)
  }

  const showProfileDetail = (user) => {
    setShowingUser(user)
    setShowProfile(true)
  }

  return (
    <>
      <div className="flex justify-between items-center m-auto  w-4/5">
        <h1 className="text-center font-bold mt-2 mb-2">Users List</h1>
        <div className='bg-cyan-700 px-3 text-white flex justify-center items-center h-10  hover:bg-cyan-900 hover:duration-300 mt-4 '>
          <Link to="/universities">University Filter Page</Link>
        </div>
      </div>

      {
        showProfile && (
          <Modal
          title="User Detail"
          canCancel
          onCancel={cancelUserHandler}
          >
            <UserDetailModal user={showingUser} />
          </Modal>
        )
      }

      { createUser && <UserCreateForm setCreateUser={setCreateUser} /> }

      {
        isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="m-auto flex justify-between items-center w-4/5 mb-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="border border-gray-400 px-4 py-2 rounded w-full focus:shadow-xl focus:border-2 focus:outline-none focus:border-cyan-700"
                  type="text"
                  name="email"
                  onChange={(e) => setQueryInput(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="gender">Gender</label>
                <div className="mt-1">
                  <select
                    onChange={handleChangeGender}
                    name="gender"
                    id="gender"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-cyan-700 focus:bg-cyan-700; active:bg-cyan-700"
                  >
                    <option value="">Please select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <button className="bg-green-600 text-white h-10 w-28 hover:bg-green-700 hover:duration-300 mt-4" onClick={() => setCreateUser(true)}>Create User</button>
            </div>

          <table className="relative m-auto shadow-2xl font-[Poppins] border border-cyan-200 w-4/5 overflow-hidden">
            <thead className="text-white">
              <tr>
                <th className='py-3 bg-cyan-800'></th>
                <th className="py-3 bg-cyan-800 text-left px-7">Name</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Email</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Phone</th>
                <th className="py-3 bg-cyan-800 text-left px-6">Gender</th>
              </tr>
            </thead>
            <tbody className="text-cyan-900 text-center">
              { currentUsers &&
                search(currentUsers).map((user, index) => (
                <tr key={index} className=" bg-cyan-400 hover:bg-cyan-100 hover:cursor-pointer duration-300">
                  <td>
                    <img src={user.picture.thumbnail}  alt='profile' onClick={() => showProfileDetail(user)} />
                  </td>
                  <td className="py-3 px-6 text-left overflow-hidden">{user.name.first} {user.name.last}</td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-left">{user.phone}</td>
                  <td className="py-3 px-6 text-left">{user.gender}</td>
                </tr>
                ))
              }
            </tbody>
          </table>
          <Pagination usersPerPage={usersPerPage} totalUsers={usersData.length} currentPage={currentPage} paginate={paginate} />
          </>
        )
      }
    </>
  )
}

export default UserFilter