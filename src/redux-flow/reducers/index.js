import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux';
import loginReducer from './_login.reducer.js';

const reducers = combineReducers({
  routerReducer,
  loginReducer,
  toastr: toastrReducer,
});

export default reducers;
