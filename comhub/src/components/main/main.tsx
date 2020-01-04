import React, { FormEvent, useEffect } from 'react';
import { SectionTab } from './Main-styled';
import Input from './input/Input';
import Repositories from './repositories/Repositories';
import axios from 'axios';

const Main = ({
  repository, commit, name, setRepo, setCommit, setName, selectRepo, setSelectRepo
}: any) => {
  //   axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits',
  //   { headers: {
  //       'Authorization': 'e54b5475525f9261e7caaa92b201715155c36819'
  //     }
  //   })
  //     .then(res => console.log(res.data))

  const onClickSelectRepo = (repo: string) => {
    setSelectRepo(repo);

    axios.get(`https://api.github.com/repos/${name}/${selectRepo}/commits`)
      .then(res => {
        console.log(selectRepo);

        res.data.map((item: any) => {
          console.log(item.commit.committer);
          console.log(item.commit.message);
        })
      })
  };

  const onChangeUserName = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const onSubmitUserName = (e: FormEvent) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${name}/repos`)
      .then(res => setRepo(res.data))
      .catch(res => console.log('맞는 아이디가 없다'))
  };

  useEffect(() => {
    console.log(repository)
  }, [repository])

  return (
    <main>
      <SectionTab>
        <Input onChangeUserName={onChangeUserName} onSubmitUserName={onSubmitUserName} />
        <Repositories repository={repository} onClickSelectRepo={onClickSelectRepo} />
      </SectionTab>
    </main>
  )
};

export default Main;