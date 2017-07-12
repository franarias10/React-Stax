import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import userReducer from './userReducer';

export default combineReducers({
  ui: uiReducer,
  user: userReducer
});
