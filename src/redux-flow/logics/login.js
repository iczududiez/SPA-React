import { createLogic } from 'redux-logic';
import Moment from 'moment';
import { LOCATION_CHANGE } from 'react-router-redux';
import LOGAR from '../actions/login';

export const LogarLogic = createLogic({
  type: LOGAR,
  cancelType: LOCATION_CHANGE,

  process({ requestUtil, action }, dispatch, done) {
    requestUtil(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(action.payload.data),
    }).then((success) => {
      debugger;
      action.success(success);
    }).catch((error) => {
      debugger;
      action.error(error);
    }).then(done);
  },
});

export default LogarLogic;
