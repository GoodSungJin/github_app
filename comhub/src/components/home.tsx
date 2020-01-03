import React, { useEffect, useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { SectionHome, LiRepository } from './home-styled';
import Main from './main/main';

const Home = () => {
  const [list, setList] = useState([]);
  const [userName, setUserName] = useState('goodsungjin');

  const commit = () => {
    // axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits',
    // { headers: {
    //     'Authorization': 'e54b5475525f9261e7caaa92b201715155c36819'
    //   }
    // })
    //   .then(res => console.log(res.data))
    axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits')
      .then(res => setList(res.data))
  };

  const repo = () => {
    // axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits',
    // { headers: {
    //     'Authorization': 'e54b5475525f9261e7caaa92b201715155c36819'
    //   }
    // })
    //   .then(res => console.log(res.data))
    axios.get('https://api.github.com/users/GoodSungJin/repos')
      .then(res => setList(res.data))
  };



  useEffect(() => {
    console.log(list)


    // 커밋
    // list.map((item: any) => {
    //   console.log(item.commit.message)
    //   console.log(item.commit.committer.name, item.commit.committer.date)
    // })

    // 레포
    // list.map((item: any) => {
    //   console.log(item.name)
    //   console.log(item.owner.login)
    // })

  }, [list])

  const onChangeUserName = (e: FormEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
  }

  const onSubmitUserName = (e: FormEvent) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(res => setList(res.data))
      .catch(res => console.log('맞는 아이디가 없다'))
  };

  return (
    <SectionHome>
      <form onSubmit={onSubmitUserName}>
        <input type="text" onChange={onChangeUserName} />
      </form>
      <button onClick={commit}>커밋확인</button>
      <button onClick={repo}>레포확인</button>
      <ul className="repo-list">
        {
          list.length > 0 && list.map((item: any) => {
            return (
              <LiRepository>
                <span>{item.name}</span>
              </LiRepository>
            )
          })
        }
      </ul>
      <Main></Main>
    </SectionHome>
  )
};

export default Home;