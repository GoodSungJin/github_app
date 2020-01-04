import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Action_Repo, Action_Commit, Action_SelectRepo } from '../models/comhub';
import { Action_UserName } from '../models/userinfo';

import Main from '../components/main/Main';

const MainContainer = () => {
  const dispatch = useDispatch();

  const { repository, commit, selectRepo, name } = useSelector((state: any) => ({
    repository: state.comhub.repository,
    commit: state.comhub.commit,
    selectRepo: state.comhub.selectRepo,
    name: state.userInfo.name
  }));

  const setRepo = useCallback((repo: any) => dispatch(Action_Repo(repo)), [dispatch])
  const setCommit = useCallback((commit: any) => dispatch(Action_Commit(commit)), [dispatch])
  const setName = useCallback((name: string) => dispatch(Action_UserName(name)), [dispatch])
  const setSelectRepo = useCallback((name: string) => dispatch(Action_SelectRepo(name)), [dispatch])

  return (
    <Main 
      repository={repository}
      commit={commit} 
      name={name}
      setRepo={setRepo}
      setCommit={setCommit}
      setName={setName}
      selectRepo={selectRepo}
      setSelectRepo={setSelectRepo}
    />
  )
};

export default memo(MainContainer);