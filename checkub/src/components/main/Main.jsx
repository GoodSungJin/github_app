import React, { useEffect } from 'react';
import { MainContainer } from './Main-styled';

import axios from 'axios';

import Input from './input/Input';
import Repositories from './repositories/Repositories';

const Main = ({
  repository, commit, name, setRepo, setCommit, setName
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

        // res.data.map(item => {
        //   console.log(item.commit.committer);
        //   console.log(item.commit.message);
        // })
      })
  };

  const onChangeUserName = (e) => {
    setName(e.currentTarget.value)
  }

  const onSubmitUserName = (e) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${name}/repos`)
      .then(res => setRepo(res.data))
      .catch(res => console.log('맞는 아이디가 없다'))
  };

  useEffect(() => {
    console.log(repository)
  }, [repository])

  const onClickCloseModal = (e) => {
    if (!e.target.classList.contains('modal-wrapper')) return;

    setCommit([]);
  };

  return (
    <MainContainer>
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
    </MainContainer>
  )
};

export default Main;