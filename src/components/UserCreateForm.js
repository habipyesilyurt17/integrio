import { useRef, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
const UserCreateForm = ({setCreateUser}) => {
  const nameInputRef = useRef(null)
  const lastNameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const [gender, setGender] = useState(null)

  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const cancelUserHandler = () => {
    setCreateUser(false)
  }

  const createUserHandler = () => {
    const name = nameInputRef.current.value
    const lastName = lastNameInputRef.current.value
    const email = emailInputRef.current.value
    const userObject = { name, lastName, email, gender };

    (async () => {
      try {
        await axios.post('https://randomuser.me/api/', userObject).then(response => {
          console.log("response----",response)
        }).catch(err => console.log(err.response.status, err.response.data))
      } catch (error) {
        console.log("error----",error)
      } finally {
        setCreateUser(false)
      }
    })();
  }

  return (
    <Modal
      title="Add User"
      canCancel
      canConfirm
      onCancel={cancelUserHandler}
      onConfirm={createUserHandler}
      confirmText="Add"
      cancelText="Cancel"
    >
      <form className="mb-0 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              ref={nameInputRef}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500;"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <div className="mt-1">
            <input
              ref={lastNameInputRef}
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="lastName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500;"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              ref={emailInputRef}
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500;"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
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
      </form>
    </Modal>
  )
}

export default UserCreateForm