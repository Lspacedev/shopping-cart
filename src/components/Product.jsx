import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");

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
        setCat(response.category);
        setPrice(response.price);
        setDescr(response.description);

        setSrc(response.image);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="load-error">Loading...</p>;
  if (error)
    return <p className="load-error">A network error was encountered</p>;

  return (
    <div className="product-page-container">
      <div className="image">
        <img src={src} className="product-page-image" />
      </div>
      <div className="product-details">
        <div>{name}</div>
        <div>{cat}</div>
        <div>${price}</div>
        <div className="product-description">
          <div>About</div>
          <div>{descr}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
