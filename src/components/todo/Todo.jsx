import React from "react";
import { TodoStyled } from "./Styled.Todo";

const Todo = ({ handleSubmit, todo, todoHandler, isUpdating }) => {
  return (
    <TodoStyled>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          id="todo"
          name="todo"
          value={todo.text}
          onChange={todoHandler}
        />
        <label htmlFor="todo" className="label">
          Enter Todo
        </label>
        <button disabled={!todo.text.length > 0} type="submit">
          {isUpdating ? "Update" : "Add"}
        </button>
      </form>
    </TodoStyled>
  );
};

export default Todo;
