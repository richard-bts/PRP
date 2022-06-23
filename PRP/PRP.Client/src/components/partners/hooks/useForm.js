import PropTypes from 'prop-types';
import { useId, useState } from "react";
import { initialPartnerState } from "../../../shared/data";
import { addPartner, editPartner, useAppDispatch, useAppSelector } from "../../../store";

export const useForm = (handleCloseForm) => {

  const dispatch = useAppDispatch();
  const { activePartner } = useAppSelector( state => state.partners );
  const { id, name, email, isActive, typesReport } = activePartner || initialPartnerState;
  const [isActivePartner, setIsActivePartner] = useState(isActive);
  const [reportTypes, setReportTypes] = useState(typesReport);
  const [formData, setFormData] = useState({
    id: id || useId(),
    name,
    email,
  });

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
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { id, name, email } = formData;
    const partner = { id, name, email, isActive: isActivePartner, typesReport: reportTypes };
    setFormData(initialPartnerState);
    setIsActivePartner(false);
    handleCloseForm(null);
    if(activePartner) {
      dispatch(editPartner(partner));
      return;
    }
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
    reportTypes
  };
};

useForm.propTypes = {
  handleCloseForm: PropTypes.func.isRequired
}

