import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from './hooks';
import { SwitchForm } from './SwitchForm';
import { MinusIcon, PlusSmIcon } from '@heroicons/react/solid';
import { FormInput } from './FormInput';
import { FormConfirm } from './FormConfirm';
import { FormInputEmail } from './FormInputEmail';
import { ButtonIcon } from '../../shared/components/ButtonIcon';
import { FormInputError } from './FormInputError';
import { ButtonComponent } from './ButtonComponent';
import { ReportTime } from './ReportTime';

export const Form = ({ handleCloseForm }) => {

  const { name, email, handleTypeReport, handleFormChange, handleSubmitForm, handleAddEmail, handleSaveEmail, isActivePartner, setIsActivePartner, errorForm, isValidData, reportName, setErrorForm, handleRemoveEmail, handleChangeDateTime, reportDate } = useForm(handleCloseForm);
  let [isOpen, setIsOpen] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (errorForm.email.error || errorForm.partnerName.error) return;
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-40 flex flex-row flex-wrap min-h-screen bg-slate-200/50 md:p-12 w-100vw">
        <form
          className="absolute w-11/12 p-5 m-0 overflow-y-auto bg-white shadow md:w-3/5 lg:w-1/3 md:rounded-lg h-max top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 partner-form"
          onSubmit={(e) => submitForm(e)}
        >
          <h2 className="mb-6 text-2xl font-semibold text-center uppercase">Partner data</h2>

          <FormInput
            value={name}
            placeholder="Partner name"
            handleFormChange={handleFormChange}
            errorMessage={errorForm.partnerName.errorMessage}
            error={errorForm.partnerName.error}
          />

          <div className="relative flex flex-col py-3 mb-7">
            <label className="pb-2 font-semibold text-gray-700 first-letter:uppercase">Emails</label>
            {email.length > 0 && email.map(({ partner_email, partner_email_id }, index) => (
              <FormInputEmail
                key={`${partner_email}+${index}`}
                index={index}
                inputValue={partner_email}
                emailId={partner_email_id}
                setErrorForm={setErrorForm}
                handleSaveEmail={handleSaveEmail}
              >
                <ButtonIcon
                  btnLabel="Remove email"
                  labelStyles="hidden"
                  btnStyles="rounded-full h-10 w-10 justify-self-end"
                  btnColors="bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-600"
                  buttonSpacing="p-1"
                  onClick={() => handleRemoveEmail(index)}
                >
                  <MinusIcon className="w-full text-white" />
                </ButtonIcon>
              </FormInputEmail>
            ))
            }
            <FormInputError
              errorMessage={errorForm.email.errorMessage}
              error={errorForm.email.error}
            />
            <ButtonIcon
              btnLabel="Add new email"
              btnStyles="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded w-full h-11 justify-center"
              onClick={handleAddEmail}
            >
              <PlusSmIcon className="text-white w-7" />
            </ButtonIcon>
          </div>

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
              reportName.map(({ report_name, active }, index) => (
                <SwitchForm
                  key={`${report_name}-${index}`}
                  switchEnabled={!!active}
                  typeReport={report_name}
                  isTypeReport
                  handleTypeReport={handleTypeReport}
                />
              ))
            }
          </div>

          <div className="flex flex-col py-3">
            <label className="pb-2 font-semibold text-gray-700">Report time</label>
            <ReportTime
              handleChangeDateTime={ handleChangeDateTime }
              reportDate={ reportDate }
            />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <button
              className={`${isValidData ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-500 opacity-50 cursor-default'} rounded p-3 font-medium text-white transition-colors duration-300`}
              type="submit"
            >Save</button>

            <ButtonComponent
              buttonText="Cancel"
              handleClick={handleCloseForm}
            />
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