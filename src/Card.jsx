import { useState } from "react";

function Card({ id, initial, handleCartCount, delCard }) {
  //const { name } = useParams();
  const [num, setNum] = useState(initial ? initial : 0);
  function handleNum(obj) {
    setNum((prev) =>
      obj.sign === "+"
        ? prev + obj.val
        : obj.sign === "-" && prev >= 1
          ? prev - obj.val
          : prev,
    );
  }

  return (
    <div>
      <h1>CARD</h1>
      <h2>{num}</h2>
      <button onClick={() => handleNum({ sign: "+", val: 1 })}>+</button>
      <button onClick={() => handleNum({ sign: "-", val: 1 })}>-</button>
      <button onClick={() => handleCartCount(num, id)}>SUBMIT</button>
      <button
        onClick={() => {
          delCard(id);
          localStorage.setItem(`added${id}`, JSON.stringify(false));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
