import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "./components/useLocalStorage";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import Footer from "./components/Footer";

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

  function addToCart(id, pric) {
    setCartCount((prev) => {
      let exists = prev.filter((obj) => obj.id == id);

      console.log(exists);
      return prev.length === 0 || exists.length == 0
        ? [...prev, { id: id, value: 1, price: pric }]
        : prev;
    });
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
    <main className="app-container">
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
      <Footer />
    </main>
  );
}

export default App;
