import { useId, useState } from "react";
import { initialPartnerState } from "../../../shared/data";
import { addPartner, setActivePartner, useAppDispatch, useAppSelector } from "../../../store";

const errorFormInitialState = {
  name: {
    error: false,
    errorMessage: ''
  },
  email: {
    error: false,
    errorMessage: ''
  }
}

export const useForm = () => {

  const dispatch = useAppDispatch();
  const { activePartner } = useAppSelector( state => state.partners );
  const { id, partnerName, email, active: isActive, reportName } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(isActive);
  const [reportTypes, setReportTypes] = useState(reportName);
  const [errorForm, setErrorForm] = useState(errorFormInitialState);
  
  const [formData, setFormData] = useState({
    id: id || useId(),
    name: partnerName,
    email,
  });

  console.log(formData);
  console.log({ id, partnerName, email, isActive, reportName });

  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexName = /^[A-zÀ-ÿ ]*$/;

  const handleTypeReport = (value, typeName) => {
    setReportTypes( prev => (
        prev.map(item => {
          if (item.type === typeName) {
            return { ...item, status: value };
          }
          return item;
        })
      )
    );
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if( name === 'name' && !value.match(regexName) ) {
      setErrorForm({
        ...errorForm,
        name: {
          error: true,
          errorMessage: 'Name must contain only letters'
        }
      });    
      return;
    }
    setErrorForm({ ...errorForm, [name]: { error: false, errorMessage: '' } });
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmitForm = () => {
    const { id, name, email } = formData;
    if ((!name.length || name.length < 3) ) {
      setErrorForm({
        ...errorForm,
        name: {
          error: true,
          errorMessage: 'Name must be at least 3 characters'
        }
      });
      return;
    }
    if ((!email.length || email.length < 3) ) {
      setErrorForm({
        ...errorForm,
        email: {
          error: true,
          errorMessage: 'Email must be at least 3 characters'
        }
      });
      return;
    }
    
    if (!email.match(regexEmail) ) {
      setErrorForm({
        ...errorForm,
        email: {
          error: true,
          errorMessage: 'Email must be valid'
        }
      });
      return;
    }
    if(errorForm.email.error || errorForm.name.error) {
      return;
    }
    setErrorForm(errorFormInitialState);
    const partner = { id, name, email, isActive: isActivePartner, reportName: reportTypes };
    setFormData(initialPartnerState);
    setIsActivePartner(false);
    setActivePartner();
    dispatch(addPartner(partner));
  }

  return {
    name: formData.name,
    email: formData.email,
    handleTypeReport,
    handleFormChange,
    handleSubmitForm,
    isActivePartner,
    setIsActivePartner,
    reportTypes,
    errorForm
  };
};
