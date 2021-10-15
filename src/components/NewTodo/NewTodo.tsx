import React, { useContext, useRef } from "react";
import css from "./NewTodo.module.css";
import { TodosContext } from "../../store/todos-context";

const NewTodo: React.FC = () => {
  const context = useContext(TodosContext);
  const textInput = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textInput.current!.value;

    if (text.trim().length === 0) return;
    context.addTodo(text);
    textInput.current!.value = '';
  };

  return <form className={css.form} onSubmit={handleFormSubmit}>
    <label htmlFor="text">Todo Text</label>
    <input id="text" type="text" ref={textInput}/>
    <button>Add Todo</button>
  </form>

}

export default NewTodo;
