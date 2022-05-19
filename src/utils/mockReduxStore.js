import { render as RTLRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../redux/reducers/Reducer.Todos";

function render(
  component,
  {
    initState,
    store = configureStore({
      reducer: { todosReducer: TodosReducer },
      initState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return RTLRender(component, { wrapper: Wrapper, ...renderOptions });
}

// re-export all from testing package
export * from "@testing-library/react";
// override render method
export { render };
