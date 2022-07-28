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
  const { clientId, partnerId, partnerName, email, active, reportName } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(active);
  const [emailEdited, setEmailEdited] = useState([]);
  const [newEmail, setNewEmail] = useState([]);
  const mergeReportObjects = reportTypesTest.map(report => {
    const reportObject = reportName?.find(item => item?.report_name === report?.report_name);
    return {
      ...report,
      active: reportObject?.active
    }
  });
  const [reportTypes, setReportTypes] = useState([...mergeReportObjects]);
  const [errorForm, setErrorForm] = useState(errorFormInitialState);
  const [formData, setFormData] = useState({
    clientId: clientId || '',
    partnerId: partnerId || Math.floor(Math.random() * 1000000),
    partnerName: partnerName || '',
    email: !email?.length ? [{ partner_id: partnerId, partner_email: '' }] : [...email],
  });

  const isValidConditions = formData?.partnerName?.length !== 0;
  const [isValidData, setIsValidData] = useState(isValidConditions);

  const handleTypeReport = (value, typeName) => {
    setReportTypes(prev => (
      prev.map(item => {
        if (item.report_name === typeName) {
          return { ...item, active: value };
        }
        return item;
      })
    ));
  };

  const handleAddEmail = () => {
    setFormData({ ...formData, email: [...formData.email, { partner_id: partnerId, partner_email: '' }] });
  }

  const handleRemoveEmail = (index) => {
    setFormData({ ...formData, email: formData.email.filter((_, i) => i !== index) });
  }

  const handleSaveEmail = (e, index, emailId) => {
    const { value } = e.target;
    const newValue = [...formData.email];
    newValue[index] = { ...newValue[index], partner_email: value };
    setFormData({ ...formData, email: newValue });
    if (emailId) {
      const { partner_email, ...rest } = formData.email.find(item => item.partner_email_id === emailId);
      setEmailEdited([...emailEdited, { ...rest, email: value }]);
    } else {
      setNewEmail([...newEmail, { partner_id: partnerId, partner_email: value }]);
    }
  }

  const handleFormChange = (e) => {
    const { companyName, clientID } = e;
    if (!companyName.length) {
      setErrorForm({
        ...errorForm,
        partnerName: {
          error: true,
          errorMessage: 'Company name is required'
        }
      });
      return;
    }

    const isValidConditions = companyName.length > 2;

    if (isValidConditions) {
      setIsValidData(true);
    } else {
      setIsValidData(false);
    }

    setErrorForm({ ...errorForm, partnerName: { error: false, errorMessage: '' } });
    setFormData({ ...formData, partnerName: companyName, clientId: clientID });

  }

  const handleSubmitForm = async () => {
    const { partnerId, partnerName, email, clientId } = formData;
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
    const emailsNoEmpty = email.filter(item => item.partner_email.length > 0);
    let partner = {
      client_id: clientId,
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
      const { payload } = await dispatch(editCurrentPartner({ partnerToEdit, emailEdited }));
      if(payload) {
        alertPopup('Partner data successfully saved');
      } else {
        alertPopup('Error saving partner data', 'error');
      }
    } else {
      const { 
        partner_id, 
        active: partner_active,
        ...rest
      } = partner;
      const { payload } = await dispatch(addNewPartner(rest));
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
