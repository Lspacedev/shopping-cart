import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Link } from "react-router-dom";

function ProductCard({ id, addToCart, delCard }) {
  const [added, setAdded] = useLocalStorage(`added${id}`, false);
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}/`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setName(response.title);
        setSrc(response.image);
        setPrice(response.price);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  function toggleAdded() {
    setAdded((prev) => {
      return prev ? false : true;
    });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className="product-info">
      <div>
        <div>{name}</div>
        <h4>${price}</h4>
        <Link to={`/products/${id}`}>
          <img className="product-image" src={src} />
        </Link>
      </div>
      <button
        onClick={() => {
          added ? delCard(id) : addToCart(id, Number(price));
          toggleAdded();
        }}
      >
        {added ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  addToCart: PropTypes.func,
  delCard: PropTypes.func,
};
export default ProductCard;
