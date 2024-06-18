import {
  RiVipCrown2Line,
  RiMacbookLine,
  RiMenLine,
  RiWomenFill,
} from "@remixicon/react";

function Home() {
  return (
    <section className="home-section">
      <div className="showcase">
        <div className="showcase-title">Your number one ecommerce shop</div>

        <button>Shop Now</button>
      </div>

      <div className="shop-categories">
        <div className="shop-categories-title">Categories</div>
        <div className="category-cards">
          <div className="electronics">
            <RiMacbookLine />
          </div>
          <div className="jewelery">
            <RiVipCrown2Line />
          </div>
          <div className="mens clothing">
            <RiMenLine />
          </div>
          <div className="womens clothing">
            <RiWomenFill />
          </div>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-container">
          <div className="subscribe">Subscribe to our newsletter!</div>
          <div className="newsletter-input">
            <input type="text" />
            <input type="submit" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
