import React, { FormEvent } from 'react';
import axios from 'axios';

const Input = ({ name, setName, setRepo}: any) => {
  const onChangeUserName = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const onSubmitUserName = (e: FormEvent) => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${name}/repos`)
      .then(res => setRepo(res.data))
      .catch(res => console.log('맞는 아이디가 없다'))
  };

  return (
    <form onSubmit={onSubmitUserName}>
      <input type="text" onChange={onChangeUserName} />
    </form>
  )
};

export default Input;