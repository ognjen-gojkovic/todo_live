import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      },
      prepare: (todo) => {
        const id = nanoid();
        return { payload: { ...todo, id } };
      },
    },

    removeTodo: {
      reducer: (state, action) => {
        const id = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== id);
      },
    },

    updateTodo: {
      reducer: (state, action) => {
        const newTodos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          return todo;
        });
        state.todos = newTodos;
        localStorage.setItem("todos", JSON.stringify(newTodos));
      },
    },
    LSTodos: {
      reducer: (state, action) => {
        state.todos = action.payload;
      },
    },
  },
});

const { actions, reducer } = todosSlice;

export const { addTodo, removeTodo, updateTodo, LSTodos } = actions;
export default reducer;
