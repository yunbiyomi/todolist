import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <TodoListContainer>
      <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
      <TodoItem text="운동하기" done={false}></TodoItem>
    </TodoListContainer>
  )
}

export default TodoList;

const TodoListContainer = styled.div`
  margin-top: 30px;
  flex: 1;
  overflow-y: auto;
`;