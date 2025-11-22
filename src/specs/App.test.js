import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders name title", () => {
  render(<App />);
  const name_text = screen.getByText(/Nicolas Arias/i);
  expect(name_text).toBeInTheDocument();
});
