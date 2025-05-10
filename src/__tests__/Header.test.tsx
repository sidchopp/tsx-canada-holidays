import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("render Title", () => {
    render(<Header />);

    const title = screen.getByText(/canadian holidays/i);

    expect(title).toBeInTheDocument();
  });
});
