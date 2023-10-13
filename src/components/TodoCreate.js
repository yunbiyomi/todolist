import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

function TodoCreate() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });

    setValue('');
    setIsOpen(false);
    nextId.current += 1;
  }

  return (
    <>
    {isOpen &&
      <InputContainer>
        <InputForm onSubmit={onSubmit}>
          <SInput 
            autoFocus
            placeholder='할 일을 입력한 뒤, Enter를 눌러주세요.'
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
        </InputForm>
      </InputContainer>
    }
    <AddBtn onClick={() => setIsOpen(!isOpen)} open={isOpen}>
      <MdAdd />
    </AddBtn>
    </>
  )
}

export default TodoCreate;

const AddBtn = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  color: #fff;
  background-color: #775144;
  border: none;
  border-radius: 50%;
  font-size: 60px;
  outline: none;
  cursor: pointer;
  z-index: 5;
  transform: translate(-50%, 50%);
  transition: .2s all ease-in;

  &:hover {
    background-color: #c09891;
  }

  &:active {
    background-color: #efe5dc;
  }

  ${props =>
    props.open && css `
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InputContainer = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InputForm = styled.form`
  padding: 40px 30px 80px 30px;
  background-color: #d0b8ac;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const SInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #775144;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  box-sizing: border-box;
`;