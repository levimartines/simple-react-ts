import React, { useState } from "react";
import { Todo } from "../models/todo";

interface ITodosContext {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<ITodosContext>({
  items: [],
  addTodo: (text: string) => {
  },
  removeTodo: (id: string) => {
  }
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => setTodos(prevState => prevState.concat(new Todo(text)));
  const removeTodoHandler = (id: string) => setTodos(prevState => prevState.filter(todo => todo.id !== id));

  const context: ITodosContext = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return <TodosContext.Provider value={context}>
    {props.children}
  </TodosContext.Provider>
};

export default TodosContextProvider;