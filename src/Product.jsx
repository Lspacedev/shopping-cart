import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  const info = [
    { id: 1, name: "phone", cat: "tech" },
    { id: 2, name: "comp", cat: "tech" },
    { id: 3, name: "shirt", cat: "clothes" },
    { id: 4, name: "sneaker", cat: "shoes" },
    { id: 5, name: "flip", cat: "shoes" },
    /*{ id: 6, name: "phone", cat: "tech" },
    { id: 7, name: "comp", cat: "tech" },
    { id: 8, name: "shirt", cat: "clothes" },
    { id: 9, name: "sneaker", cat: "shoes" },
    { id: 10, name: "flip", cat: "shoes" },
    { id: 11, name: "phone", cat: "tech" },
    { id: 12, name: "comp", cat: "tech" },
    { id: 13, name: "shirt", cat: "clothes" },
    { id: 14, name: "sneaker", cat: "shoes" },
    { id: 15, name: "flip", cat: "shoes" },*/
  ];
  return <div>{id}</div>;
}

export default Product;
