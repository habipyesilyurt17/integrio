const  UserDetailModal = ({user}) => {
  return (
    <div className="flex flex-row justify-start items-center w-full rounded-md shadow-md duration-500">
      <div className="w-3/6">
        <img className="object-cover w-full h-40" src={user.picture.large} alt={user.name.first} />
      </div>
      <div className="w-4/5 h-36 py-4 px-4">
        <h1 className="text-md pb-2">{user.name.first} {user.name.last}</h1>
        <p className="text-md pb-2 text-gray-400">{user.email}</p>
        <p className="text-md text-gray-400">{user.phone}</p>
      </div>
    </div>
  )
}

export default UserDetailModal