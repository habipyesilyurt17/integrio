const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mt-3 mb-8  w-4/5 m-auto flex bg-white rounded-lg font-[Poppins]">
      {pageNumbers.map((number) => (
        <button
          onClick={() => paginate(number)}
          key={number}
          className={`h-12 w-12 border-2 not-last:border-r-0 border-cyan-600 ${
            currentPage === number && "bg-cyan-600 text-white"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;