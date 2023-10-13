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
`;