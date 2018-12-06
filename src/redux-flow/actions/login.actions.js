import SET_FB_LOGIN_DATA from '../constants/login.constants';

export const setFbLoginData = payload => ({
  type: SET_FB_LOGIN_DATA,
  payload,
});

export default setFbLoginData;
