import React from 'react'
import styled from 'styled-components';

function TodoTemplate({children}) {
  return (
    <TodoTemplateContainer>{children}</TodoTemplateContainer>
  )
}

export default TodoTemplate;

const TodoTemplateContainer = styled.div`
  width: 512px;
  height: 768px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;