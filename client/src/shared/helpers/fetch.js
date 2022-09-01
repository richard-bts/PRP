const baseURL = 'https://testx.cdldelivers.com/Xcelerator/prpserver';

export const fetchPartnerQuery = (endpoint, method = 'GET') => {

  const url = `${baseURL}/${endpoint}`;
  return fetch(url, {
    method
  });

};

export const fetchPartner = (endpoint, headers = { 'Content-type': 'application/json' }, data, method = 'GET') => {

  const url = `${baseURL}/${endpoint}`;

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data)
  });

};