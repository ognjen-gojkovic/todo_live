import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./reducers/Reducer.Todos";

export const store = configureStore({
  reducer: {
    todosReducer: TodosReducer,
  },
});
