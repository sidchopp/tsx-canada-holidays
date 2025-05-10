import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders title", () => {
    render(<Header english={true} toggleLanguage={jest.fn()} />);

    const title = screen.getByText(/canadian holidays/i);
    expect(title).toBeInTheDocument();
  });

  test("shows the correct toggle language button", () => {
    render(<Header english={true} toggleLanguage={jest.fn()} />);

    const toggleButton = screen.getByRole("button", { name: /FR/i });
    expect(toggleButton).toBeInTheDocument();
  });
});
