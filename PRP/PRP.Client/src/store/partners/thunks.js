import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPartner, fetchPartnerQuery } from '../../shared/helpers/fetch';

const baseURL = 'http://172.24.32.132/Xcelerator/CDLPRP/api/partner';

const partnerData = {
  clientId: 54321,
  partnerId: 98765,
  partnerName: "Partner test from code",
  reportName: "dolor consequat aute enim",
  reportTime: "1964-12-27T12:10:11.461Z"
}

const partnerEditData = {
  clientId: 7896,
  partnerId: 90,
  partnerName: "test partner name",
  reportName: "POD",
  reportTime: "1964-12-27T12:10:11.46",
  active: 1
}

const partnerAddEmail = {
  id: 1,
  partnerId: 1,
  email: "testnewedit@cdl.react"
}


/* GET ALL THE PARTNERS */

export const getPartners = createAsyncThunk("partners/getPartners", async() => {
  const response = await fetchPartnerQuery(baseURL, 'getpartners');
  const { result } = await response.json();
  return result;
});

/* GET A SPECIFIC PARTNER */

export const getOnePartner = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `getpartner?partnerId=${partnerId}`);
  const body = await response.json();
  console.log('Get Partner', body);
}

/* ADD A PARTNER */

export const addNewPartner = async(data) => {
  console.log('Add Partner', data);
  try {
    const response = await fetchPartner(baseURL, 'addpartner', undefined, data, 'POST');
    const body = await response.json();
    if(body.isSuccess) {
      // dispatch(addPartner(data));
      console.log('Add Partner', body);
    } else {
      throw new Error(body.errorMessages);
    }
  } catch (error) {
    console.log(error);
  }
}

/* EDIT A PARTNER */

export const editCurrentPartner = async(data) => {
  try {
    const response = await fetchPartner(baseURL, 'editpartner', undefined, data, 'PUT');
    const body = await response.json();
    if(body.isSuccess) {
      // dispatch(addPartner(data));
      console.log('Edit Partner', body);
    } else {
      throw new Error(body.errorMessages);
    }
  } catch (error) {
    console.log(error);
  }
}

/* REMOVE A PARTNER */

export const removeCurrentPartner = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `removepartner?partnerID=${partnerId}`, 'DELETE');
  const body = await response.json();
  console.log('Remove Partner', body);
}

/* GET PARTNER EMAIL */

export const getPartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `getpartneremails?partnerID=${partnerId}`);
  const body = await response.json();
  console.log('Get Partner email', body);
}

/* ADD PARTNER EMAIL */

export const addPartnerEmail = async(data = partnerAddEmail) => {
  const response = await fetchPartner(baseURL, 'addpartneremail', undefined, data, 'POST');
  const body = await response.json();
  console.log('Add Partner email', body);
}

/* EDIT PARTNER EMAIL */

export const editPartnerEmail = async(data = partnerAddEmail) => {
  const response = await fetchPartner(baseURL, 'editpartneremail', undefined, data, 'PUT');
  const body = await response.json();
  console.log('Edit Partner email', body);
}

/* REMOVE PARTNER EMAIL */

export const removePartnerEmail = async(partnerId) => {
  const response = await fetchPartnerQuery(baseURL, `removepartneremail?partnerID=${partnerId}`, 'DELETE');
  const body = await response.json();
  console.log('Remove Partner', body);
}