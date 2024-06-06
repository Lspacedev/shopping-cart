import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

function Products({ addToCart, delCard }) {
  let arr = [];
  let initialObj = [
    { id: 1, added: false },
    { id: 2, added: false },
    { id: 3, added: false },
    { id: 4, added: false },
    { id: 5, added: false },
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
  const [prodArr, setProdArr] = useState(arr);
  /*const [status, setStatus] = useState(initialObj);

  function handleStatus(id) {
    setStatus(
      status.map((obj) => (obj.id == id ? { ...obj, added: !obj.added } : obj)),
    );
  }*/
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

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  /* Initialise array with product component */

  for (let i = 0; i < 5; i++) {
    arr.push({
      name: info[i].name,
      comp: (
        <ProductCard
          key={i}
          id={info[i].id}
          addToCart={addToCart}
          delCard={delCard}
        />
      ),
    });
  }

  /* Filter array based on categories on click event */

  function handleCategories(text) {
    /* find all instances of given category in the info array */
    /* push all components found in arr using their ids in info array*/
    let filteredArr = [];
    if (text === "all") {
      filteredArr = arr;
    } else if (text === "tech") {
      const techCategory = info.filter((elem) => {
        return elem.cat === "tech";
      });
      for (let i = 0; i < techCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == techCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    } else if (text === "clothes") {
      const clothesCategory = info.filter((elem) => {
        return elem.cat === "clothes";
      });
      for (let i = 0; i < clothesCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == clothesCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    } else if (text === "shoes") {
      const shoesCategory = info.filter((elem) => {
        return elem.cat === "shoes";
      });

      for (let i = 0; i < shoesCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == shoesCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    }
    setProdArr(filteredArr);
  }

  /* On search input change */
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  /* Update screen on every change in search input */

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchResults(
        prodArr.filter((product) => {
          return product.name.match(searchInput);
        }),
      );
    }
    return () => {
      setSearchResults([]);
    };
  }, [prodArr, searchInput]);

  return (
    <section className="product-section">
      <h1>Products</h1>
      <input
        className="searchbar"
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <div className="products-container">
        <div className="submenu">
          <ul>
            <li onClick={() => handleCategories("all")}>All</li>
            <li onClick={() => handleCategories("tech")}>Tech</li>
            <li onClick={() => handleCategories("clothes")}>Clothes</li>
            <li onClick={() => handleCategories("shoes")}>SHoes</li>
          </ul>
        </div>
        <div className="products">
          {searchResults.length !== 0
            ? searchResults.map((elem, i) => {
                return (
                  <div key={i} className="product">
                    {elem.name}
                    {elem.comp}
                  </div>
                );
              })
            : prodArr.map((elem, i) => {
                return (
                  <div key={i} className="product">
                    {elem.name}
                    {elem.comp}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default Products;
