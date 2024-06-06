import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

import Navigation from "./Navigation";

import { useParams } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Checkout from "./Checkout";
import Product from "./Product";

import "./App.css";

function App() {
  const { name, id } = useParams();
  const [cartCount, setCartCount] = useLocalStorage("cartCount", []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    /* Sum of items in cart */
    let sum = 0;
    cartCount.map((obj) => {
      sum += obj.value;
    });
    setCount(sum);
  }, [cartCount]);

  /* Add items to cart */

  function addToCart(id) {
    setCartCount((prev) => {
      let exists = prev.filter((obj) => obj.id == id);

      console.log(exists);
      return prev.length === 0 || exists.length == 0
        ? [...prev, { id: id, value: 1 }]
        : prev;
    });

    /*if (cartCount.length == 0 /*|| present.length == 0) {
      setCartCount((prev) => [...prev, { id: id, value: 1 }]);
    }*/
  }

  /* Update number of items in cart */

  function handleCartCount(val, id) {
    setCartCount(
      cartCount.map((obj) => (obj.id == id ? { ...obj, value: val } : obj)),
    );
  }

  /* Delete items in cart */

  function delCard(id) {
    setCartCount((prev) => prev.filter((obj) => obj.id != id));
  }
  return (
    <div>
      <Navigation count={count} />

      {name === "products" ? (
        <Products addToCart={addToCart} delCard={delCard} />
      ) : name === "checkout" ? (
        <Checkout
          cartCount={cartCount}
          handleCartCount={handleCartCount}
          delCard={delCard}
        />
      ) : id ? (
        <Product />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
