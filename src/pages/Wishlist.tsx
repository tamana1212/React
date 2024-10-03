import React from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ wishlistItems, setwishlistItems, cartMove }) => {
  const navigate = useNavigate();
  const removeItem = (id) => {
    setwishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    localStorage.removeItem("wishlistItems")
    setwishlistItems([]);
  };

  return (
    <div className="wishlist-container">
      {wishlistItems.length ? (
        <>
          <header className="wishlist-header">
            <h1>My Wishlist</h1>
            <div className="wishlist-info">
              <span>{wishlistItems.length} items</span>
              <select>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </header>

          <div className="wishlist-items">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h2>{item.title}</h2>
                  <p className="price">${item.price}</p>
                  <p className="stock">In Stock</p>
                  <div className="item-actions">
                    <button
                      className="move-to-cart"
                      onClick={() => {
                        cartMove(item);
                        navigate("/cart");
                      }}
                    >
                      Move to Cart
                    </button>
                    <button
                      className="remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="wishlist-footer">
            <button className="share">Share Wishlist</button>
            <button className="clear" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          </footer>
        </>
      ) : (
        <h1>No items found</h1>
      )}
    </div>
  );
};

export default Wishlist;
