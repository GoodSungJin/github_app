import { combineReducers } from 'redux';
import comhub from './comhub';
import userInfo from './userinfo';

const rootReducer = combineReducers({
  comhub, userInfo
});

export default rootReducer;