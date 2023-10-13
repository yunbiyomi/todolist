import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';


function TodoItem({done, text}) {
  return (
    <TodoItemContainer>
      <Check done={done}>{done && <MdDone />}</Check>
      <Text done={done}>{text}</Text>
      <RemoveText>
        <MdDelete />
      </RemoveText>
    </TodoItemContainer>
  )
}

export default TodoItem;

const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-right: 15px;
  width: 32px;
  height: 32px;
  border: solid 2px #775144; 
  border-radius: 50%;
  font-size: 24px;
  color: #775144;
  cursor: pointer;

  ${props =>
    props.done && css `
      border: solid 2px #775144;
      color: #775144;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  font-weight: 500;
  color: #2a0800;

  ${props =>
    props.done && css `
      color: #efe5dc;
      text-decoration: line-through;
  `}
`;

const RemoveText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #efe5dc;
  font-size: 24px;
  cursor: pointer;
  display: none;

  &:hover {
    color: #775144;
  }
`;

const TodoItemContainer = styled.div`
  margin: 0 30px 20px 30px;
  display: flex;
  align-items: center;

  &:hover {
    ${RemoveText} {
      display: initial;
    }
  }
`;