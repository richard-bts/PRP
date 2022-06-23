import PropTypes from 'prop-types';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

export const Pagination = ({ partnersPerPage, totalPartners, handleChangePage, currentPage }) => {

  const pageNumbers = [];
  const totalPages = Math.ceil( totalPartners / partnersPerPage );
  const prevAvailable = currentPage > 1;
  const nextAvailable = currentPage < totalPages;

  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i+1);
  };

  return (
    <div className="grid justify-center grid-flow-col gap-3 mt-10 justify-items-center pagination">
        <button
          className={`grid items-center grid-flow-col gap-1 px-4 py-2 rounded shadow-md ${ prevAvailable ? 'bg-white' : 'bg-gray-100 text-gray-500 cursor-default' }`}
          onClick={ () => prevAvailable ? handleChangePage(currentPage - 1) : null }
        >
          <ChevronDoubleLeftIcon className="w-4 h-4 text-gray-500" />
          <span>Prev</span>
        </button>
      {
        pageNumbers.map( number => (
          <button
            key={ number }
            className={`${ currentPage === number ? 'current-page cursor-default bg-indigo-600 text-white' : currentPage === (number - 1) ? 'bg-white next-page' : 'bg-white' } ${ (number > (currentPage + 2)) || (number < (currentPage - 2)) ? 'hidden' : ''  } px-4 py-2 rounded shadow-md pagination-item`}
            onClick={ () => handleChangePage(number) }
          >{ number }</button>
        ))
      }
      <button
        className={`grid items-center grid-flow-col gap-1 px-4 py-2 rounded shadow-md ${ nextAvailable ? 'bg-white' : 'bg-gray-100 text-gray-500 cursor-default' }`}
        onClick={ () => nextAvailable ? handleChangePage(currentPage + 1) : null }
      >
        <span>Next</span>
        <ChevronDoubleRightIcon className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  partnersPerPage: PropTypes.number.isRequired,
  totalPartners: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
