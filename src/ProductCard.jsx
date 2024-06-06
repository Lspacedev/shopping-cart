import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Link } from "react-router-dom";

function ProductCard({ id, addToCart, delCard }) {
  const [added, setAdded] = useLocalStorage(`added${id}`, false);

  function toggleAdded() {
    setAdded((prev) => {
      return prev ? false : true;
    });
  }
  return (
    <div>
      <h1>CARD{id}</h1>
      <h2>{JSON.stringify(added)}</h2>
      <Link to={`/products/${id}`}>{id}</Link>
      <button
        onClick={() => {
          added ? delCard(id) : addToCart(id);
          toggleAdded();
        }}
      >
        {added ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
