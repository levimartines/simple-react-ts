import { Todo } from "../../models/todo";
import React from "react";
import css from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: Todo, onRemoveTodo: () => void }> = (props) => {
  return <li className={css.item} onClick={props.onRemoveTodo}>{props.item.text}</li>
}

export default TodoItem;