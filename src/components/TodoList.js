import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListContainer>
      {todos.map(todo =>
        <TodoItem 
        key={todo.id}
        id={todo.id}
        text={todo.text}
        done={todo.done}
        />
      )}
    </TodoListContainer>
  )
}

export default TodoList;

const TodoListContainer = styled.div`
  margin-top: 30px;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 30px;
    margin-right: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #775144;
    border: 10px solid #fff;
    border-radius: 30px;
  }
`;