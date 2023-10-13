import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useTodoState } from '../TodoContext';

function TodoHead() {
  const today = new Date();
  const todos = useTodoState();
  const count = todos.filter(todo => !todo.done).length;

  return (
    <TodoHeadContainer>
      <DayWrap>
        <SDate>{format(today, 'yyyy년 MM월 dd일')}</SDate>
        <SDay>{format(today, 'EEEE', { locale: ko })}</SDay>
      </DayWrap>
      {count > 0 
        ? <TaskLeft>오늘의 할 일이 {count}개 남았습니다.</TaskLeft>
        : <TaskLeft>오늘의 할 일이 다 끝났습니다.</TaskLeft>
      }
    </TodoHeadContainer>
  )
}

export default TodoHead;

const TodoHeadContainer = styled.div`
  border-bottom: 1px solid #e9ecef;
`;

const DayWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
`;

const SDate = styled.h1`
  color: #2a0800;
  padding: 0 30px;
`;

const SDay = styled.div`
  color: #bea8a7;
  font-size: 20px;
  font-weight: 500;
`;

const TaskLeft = styled.div`
  margin-bottom: 30px;
  padding: 0 30px;
  color: #775144;
  font-size: 18px;
  font-weight: bold;
`;
