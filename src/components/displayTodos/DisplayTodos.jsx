import React from "react";
import Fade from "react-reveal/Fade";
import { DisplayTodosStyled } from "./Styled.DisplayTodos";

const DisplayTodos = ({ todos, checkUpdate, handleDelete, isUpdating, id }) => {
  return (
    <DisplayTodosStyled>
      {todos.map((todo) => {
        return (
          <Fade down key={todo.id}>
            <li className={`${id && id === todo.id ? "active" : ""}`}>
              <h2>{todo.text}</h2>
              <Fade right delay={400}>
                <div className="controller">
                  <button
                    disabled={isUpdating}
                    onClick={() => checkUpdate(todo)}
                  >
                    Update
                  </button>
                  <button
                    disabled={isUpdating}
                    onClick={() => handleDelete(todo.id)}
                  >
                    X
                  </button>
                </div>
              </Fade>
            </li>
          </Fade>
        );
      })}
    </DisplayTodosStyled>
  );
};

export default DisplayTodos;
