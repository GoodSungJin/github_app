import { createAction, handleActions } from 'redux-actions';

const SET_REPOSITORY = 'SET_REPOSITORY';
const SET_COMMIT = 'SET_COMMIT';
const SET_SELECTREPO = 'SET_SELECTREPO';

export const Action_Repo = createAction(SET_REPOSITORY, (repo: any) => repo);
export const Action_Commit = createAction(SET_COMMIT, (commit: any) => commit);
export const Action_SelectRepo = createAction(SET_SELECTREPO, (commit: any) => commit);

const initialState = {
  repository: [],
  commit: [],
  selectRepo: ''
};

const comhub = handleActions({
  [SET_REPOSITORY]: (state: any, action: any) => ({ ...state, repository: action.payload }),
  [SET_COMMIT]: (state: any, action: any) => ({ ...state, commit: action.payload }),
  [SET_SELECTREPO]: (state: any, action: any) => ({ ...state, selectRepo: action.payload })
}, initialState)

export default comhub;