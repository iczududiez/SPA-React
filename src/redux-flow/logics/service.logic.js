import { createLogic } from 'redux-logic';

import {
  LOAD_DATA_LIST_TOWN_HOUSE,
  LOAD_DATA_TOWN_HOUSE,
} from '../constants/service.constants';

export const LoadDataListTownHouseLogic = createLogic({
  type: LOAD_DATA_LIST_TOWN_HOUSE,
  latest: true,
  process({ requestUtil, action }, dispatch, done) {
    action.success([
      { Id: 1, name: 'name_1' },
      { Id: 2, name: 'name_2' },
      { Id: 3, name: 'name_3' },
      { Id: 4, name: 'name_4' },
      { Id: 5, name: 'name_5' },
    ]);
    done();
    // requestUtil('http://heero.azurewebsites.net/Authentication', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify(action.payload),
    // }).then(success => dispatch(loginSuccess(success))).then(done);
  },
});

export const LoadDataTownHouseLogic = createLogic({
  type: LOAD_DATA_TOWN_HOUSE,
  latest: true,
  process({ requestUtil, action }, dispatch, done) {
    action.success([
      { Id: 1, name: 'name_1' },
      { Id: 2, name: 'name_2' },
      { Id: 3, name: 'name_3' },
      { Id: 4, name: 'name_4' },
      { Id: 5, name: 'name_5' },
    ]);
    done();
    // requestUtil('http://heero.azurewebsites.net/Authentication', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify(action.payload),
    // }).then(success => dispatch(loginSuccess(success))).then(done);
  },
});
