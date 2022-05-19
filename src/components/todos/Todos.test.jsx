import { render, screen, waitFor } from "../../utils/mockReduxStore";
import User from "@testing-library/user-event";
import Todos from "./Todos";

test("should load correctly", () => {
  render(<Todos />);

  expect(screen.getByText(/enter todo/i)).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Add");
});

test("should add first todo and it should be visible on screen", () => {
  render(<Todos />);

  expect(screen.queryByText(/new todo 1/i)).not.toBeInTheDocument();

  User.type(screen.getByRole("textbox", { name: "Enter Todo" }), "New Todo 1");
  User.click(screen.getByText(/add/i));

  expect(screen.getByText(/new todo 1/i)).toBeInTheDocument();
});

test("should correctly update todo", () => {
  render(<Todos />);

  expect(screen.getByText(/new todo 1/i)).toBeInTheDocument();

  User.click(screen.getByText(/update/i));
  User.clear(screen.getByRole("textbox", { name: "Enter Todo" }));
  User.type(screen.getByRole("textbox", { name: "Enter Todo" }), "New Todo 22");
  User.click(screen.getAllByRole("button", { name: "Update" })[0]);

  expect(screen.getByText(/new todo 22/i)).toBeInTheDocument();
});

test("should correctly delete todo", async () => {
  render(<Todos />);

  User.click(screen.getByRole("button", { name: "X" }));

  await waitFor(() =>
    expect(screen.queryByText(/new todo 22/i)).not.toBeInTheDocument()
  );
});

// npm test -- --coverage
