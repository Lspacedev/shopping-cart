import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Card from "./Card";
import { expect } from "vitest";

window.fetch = vi.fn(() => {
  const item = { title: "Ring", price: "100", image: "" };

  return Promise.resolve({
    json: () => Promise.resolve(item),
  });
});

describe("Card component", () => {
  it("loading text during Api request", async () => {
    const id = 1;
    let initial = 1;
    const handleCartCount = vi.fn();
    const delCard = vi.fn();
    render(
      <Card
        id={id}
        initial={initial}
        handleCartCount={handleCartCount}
        delCard={delCard}
      />,
    );
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  it("cart item info is being rendered", async () => {
    const id = 1;
    let initial = 1;
    const handleCartCount = vi.fn();
    const delCard = vi.fn();
    render(
      <Card
        id={id}
        initial={initial}
        handleCartCount={handleCartCount}
        delCard={delCard}
      />,
    );
    const itemName = await screen.findByText("Ring");
    expect(itemName).toBeInTheDocument();
  });

  it("error message is displayed", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "A network error was encountered" });
    });

    const id = 1;
    let initial = 1;
    const handleCartCount = vi.fn();
    const delCard = vi.fn();
    render(
      <Card
        id={id}
        initial={initial}
        handleCartCount={handleCartCount}
        delCard={delCard}
      />,
    );

    const errorMessage = await screen.findByText(
      "A network error was encountered",
    );
    expect(errorMessage).toBeInTheDocument();
  });

  //test increment and decrement buttons
  /*it("counter is incremented on + button click", async () => {
    const id = 2;
    let initial = 1;
    const handleCartCount = vi.fn();
    const delCard = vi.fn();
    render(
      <Card
        id={id}
        initial={initial}
        handleCartCount={handleCartCount}
        delCard={delCard}
      />,
    );

    const counter = await screen.getByTestId("counter");
    const incrementBtn = await screen.getByText("+");

    UserEvent.click(incrementBtn);
    UserEvent.click(incrementBtn);

    expect(counter.textContent).toEqual("3");
  });*/
});
