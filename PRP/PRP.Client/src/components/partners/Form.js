import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from './hooks';
import { SwitchForm } from './SwitchForm';
import { XIcon } from '@heroicons/react/solid';
import { FormInput } from './FormInput';
import { FormConfirm } from './FormConfirm';

export const Form = ({ handleCloseForm }) => {

  const { name, email, handleTypeReport, handleFormChange, handleSubmitForm, isActivePartner, setIsActivePartner, reportName, errorForm } = useForm(handleCloseForm);
  let [isOpen, setIsOpen] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-40 flex flex-row flex-wrap min-h-screen bg-slate-200/50 md:p-12 w-100vw">
        <form
          className="absolute w-11/12 p-5 m-0 bg-white shadow md:w-3/5 lg:w-1/3 md:rounded-lg h-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          onSubmit={ (e) => addPartner(e) }
        >

          <XIcon
            className="absolute w-10 h-10 transition-opacity duration-300 cursor-pointer top-2 right-2 hover:opacity-70"
            onClick={() => handleCloseForm()}
          />

          <h2 className="mb-6 text-2xl font-semibold text-center uppercase">Partner data</h2>

          <FormInput
            inputType="text"
            inputName="name"
            placeholder="Partner name"
            value={name}
            handleFormChange={handleFormChange}
            errorMessage={errorForm.name.errorMessage}
            error={errorForm.name.error}
          />

          <FormInput
            inputType="email"
            inputName="email"
            placeholder="partner@email.xyz"
            value={email}
            handleFormChange={handleFormChange}
            errorMessage={errorForm.email.errorMessage}
            error={errorForm.email.error}
          />

          <div className="flex flex-col gap-3 py-3">
            <label className="font-semibold text-gray-700">Is the partner active?</label>
            <SwitchForm
              switchEnabled={!!isActivePartner}
              setSwitchEnabled={setIsActivePartner}
            />
          </div>

          <div className="flex flex-col py-3">
            <label className="pb-2 font-semibold text-gray-700">Partner Types Report</label>
            {
              reportName.map(({ status, type }) => (
                <SwitchForm
                  key={type}
                  switchEnabled={status}
                  typeReport={type}
                  isTypeReport
                  handleTypeReport={handleTypeReport}
                />
              ))
            }
          </div>

          <div className="mt-2">
            <button
              className="w-full p-3 font-medium text-white transition-colors duration-300 bg-indigo-500 rounded hover:bg-indigo-600"
              type="submit"
            >Save partner</button>
          </div>
        </form>
      </div>
      <FormConfirm
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleSubmitForm={handleSubmitForm}
        handleCloseForm={handleCloseForm}
        name={name}
      />
    </>
  );
};

Form.propTypes = {
  handleCloseForm: PropTypes.func.isRequired
}