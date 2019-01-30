import { LOGAR } from '../constants/login';

export const logar = payload => ({
  type: LOGAR,
  payload,
});

export default LOGAR;
