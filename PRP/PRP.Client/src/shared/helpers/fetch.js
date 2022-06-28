export const fetchPartnerQuery = (baseUrl, endpoint, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`;
  return fetch(url, {
    method
  });

};

export const fetchPartner = (baseUrl, endpoint, headers = { 'Content-type': 'application/json' }, data, method = 'GET') => {

  const url = `${baseUrl}/${endpoint}`;

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data)
  });

};