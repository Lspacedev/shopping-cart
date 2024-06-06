import { useState } from "react";

import Card from "./Card";

function Checkout({ cartCount, handleCartCount, delCard }) {
  //const { name } = useParams();
  const [del, setDel] = useState(false);
  console.log("jjjjjjj");
  console.log(cartCount);
  return (
    <div>
      <h1>Checkout</h1>
      {cartCount.length > 0 ? (
        <ul>
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
      ) : (
        <div>Oops! Nothing in Cart</div>
      )}
    </div>
  );
}

export default Checkout;
