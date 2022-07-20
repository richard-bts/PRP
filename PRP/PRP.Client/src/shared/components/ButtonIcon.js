import PropTypes from 'prop-types';

const btnDefaultColors = 'bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600';
const labelDefaultColors = 'text-white';
const btnDefaultStyles = 'rounded-tr rounded-br';
const btnDefaultSpacing = 'px-4 py-2.5';

export const ButtonIcon = ({ children, onClick, btnColors, btnStyles, btnLabel, labelStyles, labelColors, buttonSpacing }) => {
  return (
    <button
      className={`btn shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out flex items-center ${ btnStyles || btnDefaultStyles } ${ btnColors || btnDefaultColors } ${ buttonSpacing || btnDefaultSpacing }`}
      type="button"
      id="button-addon2"
      onClick={ () => onClick() }
    >
      { children }

      { btnLabel && <span className={`ml-3 font-medium tracking-wide ${ labelColors || labelDefaultColors } ${ labelStyles || '' }`}>{ btnLabel }</span> }
    </button>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  btnColors: PropTypes.string,
  btnStyles: PropTypes.string,
  btnLabel: PropTypes.string,
  labelStyles: PropTypes.string,
  labelColors: PropTypes.string
};
