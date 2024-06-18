import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({ addToCart, delCard }) {
  let arr = [];

  /*let initialObj = [
    { id: 11, added: false },
    { id: 12, added: false },
    { id: 13, added: false },
    { id: 14, added: false },
    { id: 5, added: false },
    { id: 6, added: false },
    { id: 7, added: false },
    { id: 8, added: false },
    { id: 1, added: false },
    { id: 2, added: false },
    { id: 3, added: false },
    { id: 4, added: false },
    { id: 15, added: false },
    { id: 16, added: false },
    { id: 17, added: false },
    { id: 18, added: false },
  ];*/
  const [prodArr, setProdArr] = useState(arr);

  const info = [
    { id: 11, name: "SATA Cache", cat: "electronics" },
    { id: 12, name: "Hard Drive", cat: "electronics" },
    { id: 13, name: "Acer TV", cat: "electronics" },
    { id: 14, name: "Samsung TV", cat: "electronics" },
    { id: 5, name: "Bracelet", cat: "jewelery" },
    { id: 6, name: "Micropave", cat: "jewelery" },
    { id: 7, name: "Ring", cat: "jewelery" },
    { id: 8, name: "Earrings", cat: "jewelery" },
    { id: 1, name: "Backpack", cat: "men's clothing" },
    {
      id: 2,
      name: "T-Shirts",
      cat: "men's clothing",
    },
    { id: 3, name: "Jacket", cat: "men's clothing" },
    { id: 4, name: "SlimFit", cat: "men's clothing" },
    { id: 15, name: "Coats", cat: "women's clothing" },
    { id: 16, name: "Jacket", cat: "women's clothing" },
    { id: 17, name: "Raincoats", cat: "women's clothing" },

    { id: 18, name: "NeckV", cat: "women's clothing" },
  ];

  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  /* Initialise array with product component */

  for (let i = 0; i < 16; i++) {
    arr.push({
      name: info[i].name,
      comp: (
        <ProductCard
          key={info[i].id}
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
    } else if (text === "electronics") {
      const techCategory = info.filter((elem) => {
        return elem.cat === "electronics";
      });
      for (let i = 0; i < techCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == techCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    } else if (text === "jewelery") {
      const jeweleryCategory = info.filter((elem) => {
        return elem.cat === "jewelery";
      });
      for (let i = 0; i < jeweleryCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == jeweleryCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    } else if (text === "men's clothing") {
      const menCategory = info.filter((elem) => {
        return elem.cat === "men's clothing";
      });

      for (let i = 0; i < menCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == menCategory[i].id) {
            filteredArr.push(arr[k]);
          }
        }
      }
    } else if (text === "women's clothing") {
      const womenCategory = info.filter((elem) => {
        return elem.cat === "women's clothing";
      });

      for (let i = 0; i < womenCategory.length; i++) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k].comp.key == womenCategory[i].id) {
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
          return product.name.toLowerCase().match(searchInput.toLowerCase());
        }),
      );
    }
    return () => {
      setSearchResults([]);
    };
  }, [prodArr, searchInput]);

  return (
    <section className="products-section">
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Search OneStop products"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div className="products-container">
        <div className="submenu">
          <ul>
            <li onClick={() => handleCategories("all")}>All</li>

            <li onClick={() => handleCategories("electronics")}>Electronics</li>
            <li onClick={() => handleCategories("jewelery")}>Jewelery</li>
            <li onClick={() => handleCategories("men's clothing")}>
              Men&apos;s clothing
            </li>
            <li onClick={() => handleCategories("women's clothing")}>
              Women&apos;s clothing
            </li>
          </ul>
        </div>
        <div className="products">
          {searchResults.length !== 0
            ? searchResults.map((elem, i) => {
                return (
                  <div key={i} className="product">
                    {elem.comp}
                  </div>
                );
              })
            : prodArr.map((elem, i) => {
                return (
                  <div key={i} className="product">
                    {elem.comp}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}

Products.propTypes = {
  addToCart: PropTypes.func,
  delCard: PropTypes.func,
};

export default Products;
