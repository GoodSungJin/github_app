import { createAction, handleActions } from 'redux-actions';

const REPOSITORY = 'REPOSITORY';
const COMMIT = 'COMMIT';

export const Action_Repo = createAction(REPOSITORY, (repo: any) => repo);
export const Action_Commit = createAction(COMMIT, (commit: any) => commit);

const initialState = {
  repository: [],
  commit: []
};

const comhub = handleActions({
  [REPOSITORY]: (state: any, action: any) => ({ ...state, repository: action.payload }),
  [COMMIT]: (state: any, action: any) => ({ ...state, commit: action.payload })
}, initialState)

export default comhub;