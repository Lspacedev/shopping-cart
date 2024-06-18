import PropTypes from "prop-types";

import Card from "./Card";
import { Link } from "react-router-dom";

function Checkout({ cartCount, handleCartCount, delCard }) {
  let sum = cartCount.reduce((count, obj) => {
    return (count += obj.value * obj.price);
  }, 0);

  return (
    <section className="checkout-section">
      {cartCount.length > 0 ? (
        <div>
          <ul className="checkout-list">
            {cartCount.map((obj) => (
              <li key={obj.id}>
                <Card
                  key={obj.id}
                  id={obj.id}
                  initial={obj.value}
                  handleCartCount={handleCartCount}
                  delCard={delCard}
                />
              </li>
            ))}
          </ul>
          <div>
            <h3>Subtotal: </h3>
            <p>${sum}</p>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty-message">Oops! Nothing in Cart</div>
          <div className="empty-icon">:|</div>
          <div>
            <Link to="/products">
              <button className="empty-cart-button">Go Back Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

Checkout.propTypes = {
  cartCount: PropTypes.number,
  handleCartCount: PropTypes.func,
  delCard: PropTypes.func,
};

export default Checkout;
