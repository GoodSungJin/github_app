import { createAction, handleActions } from 'redux-actions';

const SET_REPOSITORY = 'SET_REPOSITORY';
const SET_COMMIT = 'SET_COMMIT';

export const Action_Repo = createAction(SET_REPOSITORY, repo => repo);
export const Action_Commit = createAction(SET_COMMIT, commit => commit);

const initialState = {
  repository: [],
  commit: [],
};

const githubApi = handleActions({
  [SET_REPOSITORY]: (state, action) => ({ ...state, repository: action.payload }),
  [SET_COMMIT]: (state, action) => ({ ...state, commit: action.payload }),
}, initialState)

export default githubApi;