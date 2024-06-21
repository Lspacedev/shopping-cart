import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import { expect } from "vitest";

window.fetch = vi.fn(() => {
  const item = { title: "T-shirt", price: "100", image: "" };

  return Promise.resolve({
    json: () => Promise.resolve(item),
  });
});

describe("ProductCard component", () => {
  it("loading text during Api request", async () => {
    const id = 1;
    const addToCart = vi.fn();
    const delCard = vi.fn();

    render(
      <BrowserRouter>
        <ProductCard id={id} addToCart={addToCart} delCard={delCard} />
      </BrowserRouter>,
    );

    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it("cart item info is being rendered", async () => {
    const id = 1;
    const addToCart = vi.fn();
    const delCard = vi.fn();

    render(
      <BrowserRouter>
        <ProductCard id={id} addToCart={addToCart} delCard={delCard} />
      </BrowserRouter>,
    );

    const itemName = await screen.findByText("T-shirt");
    expect(itemName).toBeInTheDocument();
  });

  it("error message is displayed", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "A network error was encountered" });
    });
    const id = 1;
    const addToCart = vi.fn();
    const delCard = vi.fn();

    render(
      <BrowserRouter>
        <ProductCard id={id} addToCart={addToCart} delCard={delCard} />
      </BrowserRouter>,
    );

    const errorMessage = await screen.findByText(
      "A network error was encountered",
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
