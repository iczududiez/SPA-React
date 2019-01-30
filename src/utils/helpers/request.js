import 'whatwg-fetch';
import ApiError from './apiError';
import { perfilSession } from './helpers';

const parseJSON = response => response.json();

const throwError = (json, status) => {
  throw new ApiError(status, json.message);
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then(json => throwError(json, response.status));
};

const request = (url, options) => {

  const perfil = perfilSession();

  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${perfil.token || ''}`,
    },
  })
  .then(checkStatus)
  .then(parseJSON);
}

export default request;
