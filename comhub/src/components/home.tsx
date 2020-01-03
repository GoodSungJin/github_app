import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [list, setList] = useState([]);

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
    list.map((item: any) => {
      console.log(item.name)
      console.log(item.owner.login)
    })

  }, [list])

  return (
    <div>
      <button onClick={commit}>커밋확인</button>
      <button onClick={repo}>레포확인</button>
      <ul>
      </ul>
    </div>
  )
};

export default Home;