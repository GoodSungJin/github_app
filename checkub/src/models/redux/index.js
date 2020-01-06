import { combineReducers } from 'redux';
import githubApi from './githubApi';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  githubApi, userInfo
});

export default rootReducer;