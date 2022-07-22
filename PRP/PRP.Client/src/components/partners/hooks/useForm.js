import dayjs from "dayjs";
import { useState } from "react";
import { initialPartnerState, reportTypesTest } from "../../../shared/data";
import { alertPopup } from "../../../shared/helpers/alertPopup";
import { setActivePartner, useAppDispatch, useAppSelector } from "../../../store";
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

const regexName = /^[A-zÀ-ÿ ]*$/;

export const useForm = () => {

  const dispatch = useAppDispatch();
  const { activePartner } = useAppSelector(state => state.partners);
  const { id, clientId, partnerId, partnerName, email, active, reportName } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(active);
  const [reportTypes, setReportTypes] = useState([...reportName]);
  const [errorForm, setErrorForm] = useState(errorFormInitialState);
  const [formData, setFormData] = useState({
    id: id || Math.floor(Math.random() * 1000000),
    clientId: clientId || Math.floor(Math.random() * 1000000),
    partnerId: partnerId || Math.floor(Math.random() * 1000000),
    partnerName: partnerName || '',
    email: !email?.length ? [''] : [...email],
  });

  const isValidConditions = formData?.partnerName?.match(regexName) && formData?.partnerName?.length !== 0;
  const [isValidData, setIsValidData] = useState(isValidConditions);

  const handleTypeReport = (value, typeName) => {
    setReportTypes(prev => (
      prev.map(item => {
        if (item.report_name === typeName) {
          return { ...item, active: value };
        }
        return item;
      })
    )
    );
  };

  const handleAddEmail = () => {
    setFormData({ ...formData, email: [...formData.email, ''] });
  }

  const handleRemoveEmail = (index) => {
    setFormData({ ...formData, email: [...formData.email.slice(0, index), ...formData.email.slice(index + 1)] });
  }

  const handleSaveEmail = (e, index) => {
    const { value } = e.target;
    const newEmail = [...formData.email];
    newEmail[index] = value;
    setFormData({ ...formData, email: newEmail });
  }

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

    const isValidConditions = formData?.partnerName?.match(regexName) && formData?.partnerName?.length > 2;

    if (isValidConditions) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }

    setErrorForm({ ...errorForm, [name]: { error: false, errorMessage: '' } });
    setFormData({ ...formData, [name]: value });

  }

  const handleSubmitForm = async () => {
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
    if (errorForm.email.error || errorForm.partnerName.error) {
      return;
    }
    setErrorForm(errorFormInitialState);
    const emailsNoEmpty = email.filter(item => item.length > 0).join(',');
    let partner = {
      partner_id: partnerId,
      partner_emails: emailsNoEmpty,
      partner_name: partnerName,
      partner_report_types: [...reportTypes],
      partner_report_time: dayjs().format(),
      partner_active: isActivePartner
    };
    setFormData(initialPartnerState);
    if (activePartner.id) {
      const { partner_active, ...rest } = partner;
      const partnerToEdit = {
        ...rest,
        active: partner_active
      };
      const { payload } = await dispatch(editCurrentPartner(partnerToEdit));
      if(payload) {
        alertPopup('Partner data successfully saved');
      } else {
        alertPopup('Error saving partner data', 'error');
      }
    } else {
      const { partner_id, ...rest } = partner;
      const partnerToAdd = { ...rest };
      const { payload } = await dispatch(addNewPartner(partnerToAdd));
      if (payload) {
        alertPopup('Partner data successfully saved');
      } else {
        alertPopup('Error saving partner data', 'error');
      }
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
    handleAddEmail,
    handleSaveEmail,
    isActivePartner,
    setIsActivePartner,
    reportName: reportTypes,
    setErrorForm,
    handleRemoveEmail,
    errorForm,
    isValidData
  };
};
