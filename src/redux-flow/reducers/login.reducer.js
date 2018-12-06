import SET_FB_LOGIN_DATA from '../constants/login.constants';

export const INITIAL_STATE = {
  accessToken: '',
  data_access_expiration_time: 0,
  email: '',
  expiresIn: 0,
  id: '',
  name: '',
  picture: {},
  reauthorize_required_in: 0,
  signedRequest: '',
  userID: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FB_LOGIN_DATA: {
      return {
        ...action.payload,
      }
    }
    default:
      return state
  }
};

export default loginReducer;
