import dayjs from "dayjs";
import { useState } from "react";
import { initialPartnerState } from "../../../shared/data";
import { setActivePartner, useAppDispatch, useAppSelector } from "../../../store";
import { addNewPartner } from "../../../store/partners/thunks";

const errorFormInitialState = {
  partnerName: {
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
  const { partnerId, partnerName, email, active, reportName } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(active);
  const [reportTypes, setReportTypes] = useState(reportName);
  const [errorForm, setErrorForm] = useState(errorFormInitialState);
  const [isValidData, setIsValidData] = useState(false);
  
  const [formData, setFormData] = useState({
    clientId: Math. floor(Math. random() * 100),
    partnerId: partnerId || Math. floor(Math. random() * 100),
    partnerName,
    email,
  });

  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexName = /^[A-zÀ-ÿ ]*$/;

  const handleTypeReport = (value, typeName) => {
    console.log(value, typeName);
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
    if( name === 'partnerName' && !value.match(regexName) ) {
      setErrorForm({
        ...errorForm,
        partnerName: {
          error: true,
          errorMessage: 'Name must contain only letters'
        }
      });    
      return;
    }

    if (formData.partnerName.match(regexName) && formData.email.match(regexEmail)) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }

    setErrorForm({ ...errorForm, [name]: { error: false, errorMessage: '' } });
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmitForm = () => {
    const { clientId, partnerId, partnerName, email } = formData;
    if ((!partnerName.length || partnerName.length < 3) ) {
      setErrorForm({
        ...errorForm,
        partnerName: {
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
    if(errorForm.email.error || errorForm.partnerName.error) {
      return;
    }
    setErrorForm(errorFormInitialState);
    const partner = {
      clientId,
      partnerId,
      partnerName,
      email,
      reportName: "SCAN AUDIT",
      reportTime: dayjs().format(),
      active: isActivePartner
    };
    setFormData(initialPartnerState);
    addNewPartner(partner);
    setIsActivePartner(0);
    setActivePartner();
  }

  return {
    name: formData.partnerName,
    email: formData.email,
    handleTypeReport,
    handleFormChange,
    handleSubmitForm,
    isActivePartner,
    setIsActivePartner,
    reportTypes,
    errorForm,
    isValidData
  };
};
