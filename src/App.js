import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Todolist from './pages/TodoList';
import TodoHead from './pages/TodoHead';


const GlobalStyle = createGlobalStyle`
  body{
    background-color: #c9c9c9;
  }
`;

const TodolistBg = styled.div`
  width: 50%;
  height: 700px;
  top: 4rem;
  left: 16rem;
  text-align: center;
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0 8px 10px 2px rgba(0,0,0,0.2);
  background-color: white;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <TodolistBg>
        <TodoHead />
        <Todolist />
      </TodolistBg>
    </>
  );
}

export default App;
