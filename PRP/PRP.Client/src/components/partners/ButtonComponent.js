import PropTypes from 'prop-types';

export const ButtonComponent = ({ handleClick, buttonText, isPrimary }) => {
  if (isPrimary) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center h-full px-4 py-2 text-sm font-medium text-white transition duration-300 bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600 focus:outline-none focus-visible:ring-2"
        onClick={ handleClick }
      >
        { buttonText }
      </button>
    )
  } else {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center h-full px-4 py-2 text-sm font-medium text-indigo-600 transition duration-300 bg-white border border-transparent rounded-md hover:border-indigo-500 focus:border-indigo-500 active:border-indigo-500 focus:outline-none focus-visible:ring-2"
        onClick={ handleClick }
      >
        { buttonText }
      </button>
    )
  }
}

ButtonComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool
}
