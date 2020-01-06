import React from 'react';
import { Form } from './Input-styled';

const Input = ({ onChangeUserName, onSubmitUserName }) => {


  return (
    <Form onSubmit={onSubmitUserName} className="contain">
      <input type="text" onChange={onChangeUserName} placeholder="Write Your Nickname!!" />
    </Form>
  )
};

export default Input;