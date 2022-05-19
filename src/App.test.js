import { render, screen } from "./utils/mockReduxStore";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
