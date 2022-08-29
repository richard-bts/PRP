import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPartner, fetchPartnerQuery } from '../../shared/helpers/fetch';
import { addPartner, setCompanyNamesOptions, setLoading } from './partnersSlice';

/* GET PARTNER EMAIL */

export const getPartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(`getpartneremails?partnerID=${partnerId}`);
  const body = await response.json();
  const { data } = body;
  return data;
}

/* ADD PARTNER EMAIL */

export const addPartnerEmail = async(data) => {
  const response = await fetchPartner('add-partner-email', undefined, data, 'POST');
  const body = await response.json();
  return body;
}

/* EDIT PARTNER EMAIL */

export const editPartnerEmail = async(data) => {
  const response = await fetchPartner('update-partner-email', undefined, data, 'PUT');
  const body = await response.json();
  return body;
}

/* REMOVE PARTNER EMAIL */

export const deletePartnerEmail = async(emailId) => {
  const response = await fetchPartnerQuery(`remove-partner-email?emailId=${emailId}`, 'PUT');
  const body = await response.json();
  return body;
}

/* GET ALL THE PARTNER EMAILS */

export const getEmails = async() => {
  const response = await fetchPartnerQuery('getemails');
  const body = await response.json();
  return body;
}

/* GET ALL THE PARTNERS */

export const getPartners = createAsyncThunk("partners/getPartners", async() => {
  const response = await fetchPartnerQuery('partners');
  const { data } = await response.json();
  return data;
});

/* GET A SPECIFIC PARTNER */

export const getOnePartner = async(partnerId) => {
  const response = await fetchPartnerQuery(`partner?partner_id=${partnerId}`);
  const body = await response.json();
  return body;
}

/* GET ALL ACTIVE PARTNER */

export const getActivePartners = async() => {
  const response = await fetchPartnerQuery('active-partners');
  const body = await response.json();
  return body;
}

/* GET ALL INACTIVE PARTNER */

export const getInactivePartners = async() => {
  const response = await fetchPartnerQuery('inactive-partners');
  const body = await response.json();
  return body;
}

/* GET REPORT TYPES */

export const getReportTypes = async() => {
  const response = await fetchPartnerQuery('report-types');
  const body = await response.json();
  return body;
}

/* GET COMPANY NAME LIST */

export const getCompanysName = createAsyncThunk("partners/getCompanysName", async(name, { dispatch }) => {
  dispatch(setLoading(true));
  const url = `http://172.24.32.132/Xcelerator/prpserver/api/report/GetCompanyName?Name=${name}`
  const response = await fetch(url);
  const { result } = await response.json();
  dispatch(setLoading(false));
  dispatch(setCompanyNamesOptions(result));
});

/* EDIT REPORT TYPES */

export const editReportTypes = async(data) => {
  const response = await fetchPartner('update-partner-report-type', undefined, data, 'PUT');
  const body = await response.json();
  return body;
}


/* ADD A PARTNER */

export const addNewPartner = createAsyncThunk("partners/addNewPartner", async(partnerToAdd, { dispatch }) => {
  const { partner_emails, ...data } = partnerToAdd;
  const response = await fetchPartner('create-partner', undefined, { ...data, partner_emails: partner_emails[0].partner_email }, 'POST');
  const body = await response.json();
  
  if(body.success) {
    await partner_emails.forEach((email, index) => (!!email && index > 0) && addPartnerEmail({
      partner_id: body.data[0].partner_id, 
      partner_email: email.partner_email
    }));
    const partner = await getOnePartner(body.data[0].partner_id);
    dispatch(addPartner(partner.data[0]));
    return true;
  } else {
    return false;
  }
});

/* EDIT A PARTNER */

export const editCurrentPartner = createAsyncThunk("partners/editCurrentPartner", async({ partnerToEdit, deletedEmails }, { dispatch }) => {
  const { partner_report_types, partner_emails, ...data } = partnerToEdit;
  const finalReports = partner_report_types.filter(report => report.active !== 'undefined');
  const response = await fetchPartner('update-partner', undefined, data, 'PUT');
  const body = await response.json();
  if(body.success) {
    await partner_emails.forEach(email => !!email.partner_email_id ? 
      editPartnerEmail({
        partner_id: email.partner_id,
        partner_email_id: email.partner_email_id,
        email: email.partner_email,
        active: email.active
      })
    : 
      addPartnerEmail({
        partner_id: body.data[0].partner_id, 
        partner_email: email.partner_email
      })
    )
    await finalReports.forEach(typeReport => editReportTypes({
      partner_id: partnerToEdit.partner_id,
      report_type_id: typeReport.report_type_id,
      active: typeReport.active
    }));
    await deletedEmails.forEach(email => deletePartnerEmail(email.partner_email_id));
    dispatch(addPartner(partnerToEdit));
    return true;
  } else {
    return false;
  }
});