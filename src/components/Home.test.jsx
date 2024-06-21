import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";

describe("Home component", () => {
  it("section exists", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
  });
});
