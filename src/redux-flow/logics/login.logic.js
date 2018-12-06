import { createLogic } from 'redux-logic';

import { LOGIN_REQUEST } from '../constants/_login.constants';
import { loginSuccess } from '../actions/_login.actions';

export const Logar = createLogic({
  type: LOGIN_REQUEST,
  latest: true,
  process({ requestUtil, action }, dispatch, done) {
    requestUtil('http://heero.azurewebsites.net/Authentication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(action.payload),
    }).then(success => dispatch(loginSuccess(success))).then(done);
  }
  // async process({ requestUtil }, dispatch, done) {
  //   try {
  //     const coeList = await requestUtil(COE_LIST, {
  //       method: 'GET',
  //     });
  //     dispatch(loadCoeListSuccess(normalizeCoeListData(coeList)));
  //   } catch (error) {
  //     dispatch(loadCoeListError(error));
  //   }
  //   done();
  // },
});

export default Logar;
