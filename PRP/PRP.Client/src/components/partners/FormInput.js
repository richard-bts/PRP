import PropTypes from 'prop-types';
import { FormInputError } from './FormInputError';

export const FormInput = ({ inputType, inputName, placeholder, value, handleFormChange, errorMessage, error }) => {
  return (
    <div className="flex flex-col py-3">
      <label className="pb-2 font-semibold text-gray-700 first-letter:uppercase">{ placeholder }</label>
      <input
        type={ inputType }
        className="p-2 bg-gray-100 rounded-lg shadow outline-none focus:bg-gray-200"
        placeholder={ placeholder }
        name={ inputName }
        value={value}
        onChange={ handleFormChange }
        autoComplete="off"
      />
      <FormInputError
        errorMessage={errorMessage}
        error={error}
      />
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired
};