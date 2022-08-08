import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormInputError } from './FormInputError';

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FormInputEmail = ({ children, index, inputValue, setErrorForm, handleSaveEmail, emailId }) => {
  const [email, setEmail] = useState(inputValue || '');
  const [emailError, setEmailError] = useState({ error: false, errorMessage: '' });

  const handleChange = e => {
    const { value } = e.target;
    setEmail(value);
    if(!e.target.value.match(regexEmail)) {
      setEmailError({ error: true, errorMessage: 'Email is not valid' });
    } else {
      setEmailError({ error: false, errorMessage: '' });
    }
  }

  const handleEmailBlur = (e) => {
    if(emailError.error) {
      setErrorForm(prev => ({ ...prev, email: { error: true, errorMessage: 'All emails must be valid' } }));
      return;
    } else {
      setErrorForm(prev => ({ ...prev, email: { error: false, errorMessage: '' } }));
    }
    handleSaveEmail(e, index, emailId);
  }

  return (
    <>
      <div className={`${ index > 0 ? 'pt-3' : ''} grid items-center email_container`}>
        <input
          type="email"
          className="p-2 outline-none form_input form__partner-input"
          placeholder={`Email ${index + 1}`}
          name={email}
          value={email}
          onChange={ e => handleChange(e)}
          onBlur={ handleEmailBlur }
          autoComplete="off"
        />
        { children && children }
      </div>
      
      { emailError.error && <FormInputError
              errorMessage={emailError.errorMessage}
              error={emailError.error}
            /> }
    </>
  );
};

FormInputEmail.propTypes = {
  children: PropTypes.node,
  handleSaveEmail: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setErrorForm: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  emailId: PropTypes.number
};