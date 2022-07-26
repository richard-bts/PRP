import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPartner, fetchPartnerQuery } from '../../shared/helpers/fetch';
import { addPartner } from './partnersSlice';

const baseURL = 'http://172.24.32.132/Xcelerator/CDLPRP';


/* GET PARTNER EMAIL */

export const getPartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `getpartneremails?partnerID=${partnerId}`);
  const body = await response.json();
  const { result } = body;
  return result;
}

/* ADD PARTNER EMAIL */

export const addPartnerEmail = async(data) => {
  const response = await fetchPartner(baseURL, 'add-partner-email', undefined, data, 'POST');
  const body = await response.json();
  return body;
}

/* EDIT PARTNER EMAIL */

export const editPartnerEmail = async(data) => {
  const response = await fetchPartner(baseURL, 'update-partner-email', undefined, data, 'PUT');
  const body = await response.json();
  return body;
}

/* GET ALL THE PARTNER EMAILS */

export const getEmails = async() => {
  const response = await fetchPartnerQuery(baseURL, 'getemails');
  const body = await response.json();
  return body;
}

/* GET ALL THE PARTNERS */

export const getPartners = createAsyncThunk("partners/getPartners", async() => {
  const response = await fetchPartnerQuery(baseURL, 'partners');
  const { result } = await response.json();
  return result;
});

/* GET A SPECIFIC PARTNER */

export const getOnePartner = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `partner?partner_id=${partnerId}`);
  const body = await response.json();
  return body;
}

/* GET ALL ACTIVE PARTNER */

export const getActivePartners = async() => {
  const response = await fetchPartnerQuery(baseURL, 'active-partners');
  const body = await response.json();
  return body;
}

/* GET ALL INACTIVE PARTNER */

export const getInactivePartners = async() => {
  const response = await fetchPartnerQuery(baseURL, 'inactive-partners');
  const body = await response.json();
  return body;
}

/* GET REPORT TYPES */

export const getReportTypes = async() => {
  const response = await fetchPartnerQuery(baseURL, 'report-types');
  const body = await response.json();
  return body;
}

/* EDIT REPORT TYPES */

export const editReportTypes = async(data) => {
  const response = await fetchPartner(baseURL, 'update-partner-report-type', undefined, data, 'PUT');
  const body = await response.json();
  return body;
}


/* ADD A PARTNER */

export const addNewPartner = createAsyncThunk("partners/addNewPartner", async(partnerToAdd, { dispatch }) => {
  const { partner_emails, ...data } = partnerToAdd;
  const response = await fetchPartner(baseURL, 'create-partner', undefined, { ...data, partner_emails: partner_emails[0].partner_email }, 'POST');
  const body = await response.json();
  
  if(body.isSuccess) {
    await partner_emails.forEach((email, index) => (!!email && index > 0) && addPartnerEmail({
      partner_id: body.result[0].partner_id, 
      partner_email: email.partner_email
    }));
    dispatch(addPartner({ ...partnerToAdd, partner_id: body.result.partner_id, client_id: body.result.client_id, id: body.result.id }));
    return true;
  } else {
    console.log(body)
    return false;
  }
});

/* EDIT A PARTNER */

export const editCurrentPartner = createAsyncThunk("partners/editCurrentPartner", async({ partnerToEdit, emailEdited }, { dispatch }) => {
  const { partner_report_types, partner_emails, ...data } = partnerToEdit;
  const finalReports = partner_report_types.filter(report => report.active !== 'undefined');
  const response = await fetchPartner(baseURL, 'update-partner', undefined, data, 'PUT');
  const body = await response.json();
  if(body.isSuccess) {
    await partner_emails.forEach(email => !!email.partner_email_id ? 
      editPartnerEmail({
        partner_id: email.partner_id,
        partner_email_id: email.partner_email_id,
        email: email.partner_email,
        active: email.active
      })
    : 
      addPartnerEmail({
        partner_id: body.result[0].partner_id, 
        partner_email: email.partner_email
      })
    )
    await finalReports.forEach(typeReport => editReportTypes({
      partner_id: partnerToEdit.partner_id,
      report_type_id: typeReport.report_type_id,
      active: typeReport.active
    }));
    dispatch(addPartner(partnerToEdit));
    return true;
  } else {
    return false;
  }
});