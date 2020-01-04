import React from 'react';
import { SectionTab } from './Main-styled';
import Input from './input/Input';
import Repositories from './repositories/Repositories';

const Main = ({ repository, commit, name, setRepo, setCommit, setName }: any) => {
  // const ajaxCommit = () => {
  //   axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits',
  //   { headers: {
  //       'Authorization': 'e54b5475525f9261e7caaa92b201715155c36819'
  //     }
  //   })
  //     .then(res => console.log(res.data))



  //   axios.get('https://api.github.com/repos/GoodSungjin/PortFolio/commits')
  //     .then(res => setList(res.data))
  // };

  return (
    <main>
      <SectionTab>
        <Input name={name} setName={setName} setRepo={setRepo} />
        <Repositories repository={repository} />
      </SectionTab>
    </main>
  )
};

export default Main;