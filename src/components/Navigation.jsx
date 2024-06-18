import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "@remixicon/react";

function Navigation({ count }) {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">OneStop</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li className="checkout-li">
            <Link to="/checkout">
              <RiShoppingCart2Line className="cart-icon" />
            </Link>
            <div className="cart-count">
              <div className="count">{count}</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  count: PropTypes.number,
};

export default Navigation;
