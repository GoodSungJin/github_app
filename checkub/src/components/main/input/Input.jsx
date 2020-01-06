import React from 'react';
import { Form } from './Input-styled';

const Input = ({ onChangeUserName, onSubmitUserName }) => {


  return (
    <Form onSubmit={onSubmitUserName} className="contain">
      <span>Write Your Nickname</span>
      <input type="text" onChange={onChangeUserName} placeholder="Enter!!" />
    </Form>
  )
};

export default Input;