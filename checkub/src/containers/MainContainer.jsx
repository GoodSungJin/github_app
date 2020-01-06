import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Action_Repo, Action_Commit } from '../models/redux/githubApi';
import { Action_UserName, Action_UserGithub } from '../models/redux/userInfo';

import Main from '../components/main/Main';

const MainContainer = () => {
  const dispatch = useDispatch();

  const { repository, commit, name, userGithub } = useSelector(state => ({
    repository: state.githubApi.repository,
    commit: state.githubApi.commit,
    name: state.userInfo.name,
    userGithub: state.userInfo.userGithub,
  }));

  const setRepo = useCallback(repo => dispatch(Action_Repo(repo)), [dispatch])
  const setCommit = useCallback(commit => dispatch(Action_Commit(commit)), [dispatch])

  const setName = useCallback(name => dispatch(Action_UserName(name)), [dispatch])
  const setUserGithub = useCallback(info => dispatch(Action_UserGithub(info)), [dispatch])

  return (
    <Main 
      repository={repository}
      setRepo={setRepo}
      commit={commit} 
      setCommit={setCommit}
      name={name}
      setName={setName}
      userGithub={userGithub}
      setUserGithub={setUserGithub}
    />
  )
};

export default memo(MainContainer);