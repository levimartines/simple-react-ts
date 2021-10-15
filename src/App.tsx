import React from 'react';
import './App.css';
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
