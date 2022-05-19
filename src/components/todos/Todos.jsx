import React from "react";
import DisplayTodos from "../displayTodos/DisplayTodos";
import Todo from "../todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
  LSTodos,
} from "../../redux/reducers/Reducer.Todos";
import { TodosStyled } from "./Styled.Todos";

const Todos = () => {
  const dispatch = useDispatch();
  const todosSlice = useSelector((state) => state.todosReducer.todos);
  const [todo, setTodo] = React.useState({
    text: "",
    id: "",
  });
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    const todosLS = JSON.parse(localStorage.getItem("todos")) ?? [];
    dispatch(LSTodos(todosLS));

    let timeoutID;
    if (id !== "") {
      const LocalTodosDel = todosSlice.filter((todo) => todo.id !== id);
      timeoutID = setTimeout(() => {
        localStorage.setItem("todos", JSON.stringify(LocalTodosDel));
        dispatch(removeTodo(id));

        setId("");
      }, 1000);
    }
    return () => clearTimeout(timeoutID);
  }, [dispatch, id]);

  const todoHandler = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating && todo.text.length > 0) {
      dispatch(updateTodo(todo));
      setIsUpdating(false);
    } else if (todo.text.length > 0) {
      dispatch(addTodo(todo));
    }
    setTodo({ text: "", id: "" });
  };

  const checkUpdate = (todo) => {
    setTodo(todo);
    setIsUpdating(true);
  };

  const handleDelete = (id) => {
    setId(id);
  };

  return (
    <TodosStyled>
      <div className="filter__wrapper">
        <Todo
          todoHandler={todoHandler}
          handleSubmit={handleSubmit}
          isUpdating={isUpdating}
          todo={todo}
        />
        <DisplayTodos
          checkUpdate={checkUpdate}
          todos={todosSlice}
          handleDelete={handleDelete}
          isUpdating={isUpdating}
          id={id}
        />
      </div>
    </TodosStyled>
  );
};

export default Todos;
