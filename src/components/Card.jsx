import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Card({ id, initial, handleCartCount, delCard }) {
  const [num, setNum] = useState(initial ? initial : 0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [src, setSrc] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}/`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setName(response.title);

        setPrice(response.price);

        setSrc(response.image);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  function handleNum(obj) {
    setNum((prev) =>
      obj.sign === "+"
        ? prev + obj.val
        : obj.sign === "-" && prev >= 1
          ? prev - obj.val
          : prev,
    );
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div data-testid="card" className="card">
      <div>
        <img src={src} className="card-img" />
      </div>

      <div className="card-info">
        <div className="card-details">
          <div>${price}</div>
          <div>{name}</div>
        </div>
        <div className="card-buttons">
          <div className="update-count-buttons">
            <button
              onClick={() => {
                handleNum({ sign: "+", val: 1 });
              }}
            >
              +
            </button>
            <p data-testid="counter">{num}</p>
            <button
              onClick={() => {
                handleNum({ sign: "-", val: 1 });
              }}
            >
              -
            </button>
          </div>
          <div className="submit-delete">
            <button
              onClick={() => {
                handleCartCount(num, id);
              }}
            >
              SUBMIT
            </button>
            <button
              onClick={() => {
                delCard(id);
                localStorage.setItem(`added${id}`, JSON.stringify(false));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  initial: PropTypes.number,
  handleCartCount: PropTypes.func,
  delCard: PropTypes.func,
};

export default Card;
