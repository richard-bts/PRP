const btnDefaultColors = "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-600";
const labelDefaultColors = "text-white";
const btnDefaultStyles = "rounded-tr rounded-br";

export const ButtonIcon = ({ children, onClick, btnColors, btnStyles, btnLabel, labelStyles, labelColors }) => {
  return (
    <button
      className={`btn px-4 py-2.5 shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out flex items-center ${ btnStyles || btnDefaultStyles } ${ btnColors || btnDefaultColors }`}
      type="button"
      id="button-addon2"
      onClick={ () => onClick() || (() => {}) }
    >
      { children }

      { btnLabel && <span className={`ml-3 font-medium tracking-wide ${ labelColors || labelDefaultColors } ${ labelStyles || '' }`}>{ btnLabel }</span> }
    </button>
  )
}
