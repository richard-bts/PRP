import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPartner, fetchPartnerQuery } from '../../shared/helpers/fetch';

const baseURL = 'http://172.24.32.132/Xcelerator/CDLPRP/api/partner';

const partnerData = {
  clientId: 12345,
  partnerId: 67890,
  partnerName: "non adipisicing",
  reportName: "dolor consequat aute enim",
  reportTime: "1964-12-27T12:10:11.461Z"
}

const partnerEditData = {
  id: 2,
  clientId: 7896,
  partnerId: 3,
  partnerName: "Name edited",
  reportName: "POD, EXCEPTION",
  reportTime: "2022-06-24T15:13:33.537",
  active: 0
}

const partnerAddEmail = {
  id: 1,
  partnerId: 1,
  email: "testnewedit@cdl.react"
}

export const getPartners = createAsyncThunk("partners/getPartners", async() => {
  const response = await fetchPartnerQuery(baseURL, 'getpartners');
  const { result } = await response.json();
  return result;
});

export const getOnePartner = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `getpartner?partnerId=${partnerId}`);
  const body = await response.json();
  console.log('Get Partner', body);
}

export const addNewPartner = async(data = partnerData) => {
  const response = await fetchPartner(baseURL, 'addpartner', undefined, data, 'POST');
  const body = await response.json();
  console.log('Add Partner', body);
}

export const editCurrentPartner = async(data = partnerEditData) => {
  const response = await fetchPartner(baseURL, 'editpartner', undefined, data, 'PUT');
  const body = await response.json();
  console.log('Edit Partner', body);
}

export const removeCurrentPartner = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `removepartner?partnerID=${partnerId}`, 'DELETE');
  const body = await response.json();
  console.log('Remove Partner', body);
}

export const getPartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `getpartneremails?partnerID=${partnerId}`);
  const body = await response.json();
  console.log('Get Partner email', body);
}

export const addPartnerEmail = async(data = partnerAddEmail) => {
  const response = await fetchPartner(baseURL, 'addpartneremail', undefined, data, 'POST');
  const body = await response.json();
  console.log('Add Partner email', body);
}

export const editPartnerEmail = async(data = partnerAddEmail) => {
  const response = await fetchPartner(baseURL, 'editpartneremail', undefined, data, 'PUT');
  const body = await response.json();
  console.log('Edit Partner email', body);
}

export const removePartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `removepartneremail?partnerID=${partnerId}`, 'DELETE');
  const body = await response.json();
  console.log('Remove Partner', body);
}