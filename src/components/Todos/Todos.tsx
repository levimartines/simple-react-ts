import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import css from "./Todos.module.css";
import { TodosContext } from "../../store/todos-context";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return <ul className={css.todos}>
    {context.items.map(item => (
      <TodoItem key={item.id} item={item} onRemoveTodo={context.removeTodo.bind(null, item.id)}/>
    ))}
  </ul>
}

export default Todos;