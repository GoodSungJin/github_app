import { createAction, handleActions } from "redux-actions";

const SET_USERNAME = 'SET_USERNAME';

export const Action_UserName = createAction(SET_USERNAME, (name: string) => name);

const initialState = {
  name: ''
}

const userInfo = handleActions({
  [SET_USERNAME]: (state: any, action: any) => ({ ...state, name: action.payload })
}, initialState)

export default userInfo;