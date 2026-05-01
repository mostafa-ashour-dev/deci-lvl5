import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("jest is working", () => {
  expect(1 + 1).toBe(2);
});


test("multiplication works", () => {  expect(2 * 3).toBe(6);
});

