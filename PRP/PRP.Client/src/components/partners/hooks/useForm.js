import dayjs from "dayjs";
import { useState } from "react";
import Swal from "sweetalert2";
import { initialPartnerState, reportTypesTest } from "../../../shared/data";
import { addPartner, setActivePartner, useAppDispatch, useAppSelector } from "../../../store";
import { addNewPartner, editCurrentPartner } from "../../../store/partners/thunks";

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
  const { activePartner } = useAppSelector(state => state.partners);
  const { id, clientId, partnerId, partnerName, email, active, reportName } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(active);
  // const [reportTypes, setReportTypes] = useState(reportName);
  const [reportTypes, setReportTypes] = useState(reportTypesTest);
  const [errorForm, setErrorForm] = useState(errorFormInitialState);
  const [formData, setFormData] = useState({
    id: id || Math.floor(Math.random() * 100),
    clientId: clientId || Math.floor(Math.random() * 100),
    partnerId: partnerId || Math.floor(Math.random() * 100),
    partnerName: partnerName || '',
    email: email || '',
  });
  const isValidConditions = formData?.partnerName?.match(regexName) && formData?.email?.match(regexEmail) && formData?.partnerName?.length !== 0 && formData?.email?.length !== 0;
  const [isValidData, setIsValidData] = useState(isValidConditions);

  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexName = /^[A-zÀ-ÿ ]*$/;

  const handleTypeReport = (value, typeName) => {
    setReportTypes(prev => (
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
    if (name === 'partnerName' && !value.match(regexName)) {
      setErrorForm({
        ...errorForm,
        partnerName: {
          error: true,
          errorMessage: 'Name must contain only letters'
        }
      });
      return;
    }
    const isValidConditions = formData?.partnerName?.match(regexName) && formData?.email?.match(regexEmail) && formData?.partnerName?.length > 2 && formData?.email?.length > 8;

    if (isValidConditions) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }

    setErrorForm({ ...errorForm, [name]: { error: false, errorMessage: '' } });
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmitForm = () => {
    const { id, clientId, partnerId, partnerName, email } = formData;
    if ((!partnerName.length || partnerName.length < 3)) {
      setErrorForm({
        ...errorForm,
        partnerName: {
          error: true,
          errorMessage: 'Name must be at least 3 characters'
        }
      });
      return;
    }
    if ((!email.length || email.length < 3)) {
      setErrorForm({
        ...errorForm,
        email: {
          error: true,
          errorMessage: 'Email must be at least 3 characters'
        }
      });
      return;
    }

    if (!email.match(regexEmail)) {
      setErrorForm({
        ...errorForm,
        email: {
          error: true,
          errorMessage: 'Email must be valid'
        }
      });
      return;
    }
    if (errorForm.email.error || errorForm.partnerName.error) {
      return;
    }
    setErrorForm(errorFormInitialState);
    const arrayStrings = reportTypes.map(item => item.status ? item.type : '');
    let partner = {
      clientId,
      partnerId,
      partnerName,
      email,
      reportName: arrayStrings.join(''),
      reportTime: dayjs().format(),
      active: isActivePartner
    };
    setFormData(initialPartnerState);
    if (activePartner.clientId) {
      partner = {
        ...partner,
        id,
      };
      editCurrentPartner(partner);
      setTimeout(() => {
        dispatch(addPartner(partner));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Partner data successfully saved',
          showConfirmButton: false,
          timer: 1500
        })
      }, 500);
    } else {
      console.log("activePartner", activePartner);
      addNewPartner(partner);
      setTimeout(() => {
        dispatch(addPartner(partner));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Partner data successfully added',
          showConfirmButton: false,
          timer: 1500
        })
      }, 500);
    }
    setIsActivePartner(0);
    setActivePartner({});
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
