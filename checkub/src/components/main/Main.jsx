import React, { useEffect } from 'react';
import { MainContainer } from './Main-styled';

import axios from 'axios';

import Input from './input/Input';
import Repositories from './repositories/Repositories';
import Profile from './profile/Profile';

const Main = ({
  repository, commit, name, setRepo, setCommit, setName, userGithub, setUserGithub
}) => {
  //   axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits',
  //   { headers: {
  //       'Authorization': 'e54b5475525f9261e7caaa92b201715155c36819'
  //     }
  //   })
  //     .then(res => console.log(res.data))

  const onClickSelectRepo = (repo) => {
    axios.get(`https://api.github.com/repos/${name}/${repo}/commits`)
      .then(res => {
        setCommit(res.data.map(item => item.commit))

        console.log(res.data.map(item => item.commit))
      })
  };

  const onChangeUserName = (e) => {
    setName(e.currentTarget.value)
  }

  const onSubmitUserName = (e) => {
    e.preventDefault();

    const promise1 = axios.get(`https://api.github.com/users/${name}/repos`);
    const promise2 = axios.get(`https://api.github.com/users/${name}`);

    Promise.all([promise1, promise2])
      .then(res => {
        setRepo(res[0].data);
        setUserGithub(res[1].data);
      })
      .catch(res => console.error('맞는 아이디가 없다'))
  };

  useEffect(() => {
    console.log(repository)
    console.log(userGithub)
  }, [userGithub])

  const onClickCloseModal = (e) => {
    if (!e.target.classList.contains('modal-wrapper')) return;

    setCommit([]);
  };

  return (
    <MainContainer>
      <Profile
        userGithub={userGithub}
      />
      <div className='contents-side'>
        <Input
          onChangeUserName={onChangeUserName}
          onSubmitUserName={onSubmitUserName}
        />
        <Repositories
          repository={repository}
          onClickSelectRepo={onClickSelectRepo}
          commit={commit}
          onClickCloseModal={onClickCloseModal}
        />
      </div>
    </MainContainer>
  )
};

export default Main;