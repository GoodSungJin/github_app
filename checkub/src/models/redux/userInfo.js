import { createAction, handleActions } from "redux-actions";

const SET_USERNAME = 'SET_USERNAME';
const SET_USERGITHUB = 'SET_USERGITHUB';

export const Action_UserName = createAction(SET_USERNAME, name => name);
export const Action_UserGithub = createAction(SET_USERGITHUB, info => info);

const initialState = {
  name: '',
  userGithub: []
}

const userInfo = handleActions({
  [SET_USERNAME]: (state, action) => ({ ...state, name: action.payload }),
  [SET_USERGITHUB]: (state, action) => ({ ...state, userGithub: action.payload })
}, initialState)

export default userInfo;