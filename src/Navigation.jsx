import { Link } from "react-router-dom";

function Navigation({ count }) {
  return (
    <div>
      <nav>
        <div>LOGO</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/checkout">{count}Checkout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
