import {
  PASS_VALUE,
  LOGIN_VALUE,
  LOGAR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants/_login.constants';

export const passValue = value => ({ type: PASS_VALUE, payload: value });
export const loginValue = value => ({ type: LOGIN_VALUE, payload: value });
export const logar = perfil => ({ type: LOGAR, payload: perfil });
export const loginRequest = payload => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
