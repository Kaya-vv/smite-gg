import React from "react";

function Pagination({
  playersPerPage,
  totalPlayers,
  loading,
  currentPage,
  paginate,
}) {
  const pageNumbers = [];
  const startingPage = currentPage >= 5 ? currentPage - 3 : 1;
  const endPage = currentPage >= 5 ? currentPage + 5 : 10;
  for (
    let i = startingPage;
    i <= Math.ceil(totalPlayers / playersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-2xl py-6 mx-auto">
      <nav>
        <ul className="inline-flex -space-x-px items-center center">
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage - 1)}
              className="leading-tight py-2 px-3 text-white font-semibold hover:border-b-2 hover:border-white "
            >
              Prev
            </a>
          </li>
          {pageNumbers.map((number, idx) => {
            if (number <= endPage) {
              return (
                <li key={number}>
                  <a
                    href="#"
                    onClick={() => paginate(number)}
                    className={
                      number === currentPage
                        ? "leading-tight py-2 px-3 text-[#cddcfe] border-b-2 border-blue-600"
                        : "leading-tight py-2 px-3 text-[#cddcfe] hover:border-b-2 hover:border-blue-600"
                    }
                  >
                    {number}
                  </a>
                </li>
              );
            }
            return "";
          })}

          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage + 1)}
              className="leading-tight py-2 px-3 text-white font-semibold hover:border-b-2 hover:border-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
