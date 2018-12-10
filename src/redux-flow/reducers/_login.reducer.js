import {
  PASS_VALUE,
  LOGIN_VALUE,
  LOGAR,
  LOGIN_SUCCESS,
 } from '../constants/_login.constants';

export const INITIAL_STATE = {
  login: '',
  pass: '',
  logado: false,
  perfil: {},
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_VALUE:
      return {
        ...state,
        login: action.payload,
      }
    case PASS_VALUE:
        return {
          ...state,
          pass: action.payload,
        }
    case LOGAR:
        return {
          ...state,
          logado: true,
          perfil: action.payload,
        }
    case LOGIN_SUCCESS:
        return state;
    default:
      return state;
  }
}

export default loginReducer;
