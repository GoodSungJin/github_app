import React, { FormEvent } from 'react';

const Input = ({ onChangeUserName, onSubmitUserName }: any) => {


  return (
    <form onSubmit={onSubmitUserName}>
      <input type="text" onChange={onChangeUserName} />
    </form>
  )
};

export default Input;