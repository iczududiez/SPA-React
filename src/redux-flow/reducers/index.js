import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  routerReducer,
  toastr: toastrReducer,
});

export default reducers;
