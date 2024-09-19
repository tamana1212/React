import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cartItems, setCartItems, moveToWish }) => {
  const navigate = useNavigate();
  const addMore = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const subtractOne = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const removeItem = (itemId) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(filteredCartItems);
  };
  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>Your Cart</h1>
      </header>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <main className="cart-main">
          <section className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="product-image"
                />
                <div className="item-details">
                  <h2 className="product-name">{item?.title}</h2>
                  <div className="quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => subtractOne(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      className="quantity-input"
                      readOnly
                    />
                    <button
                      className="quantity-btn"
                      onClick={() => addMore(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="price">${item?.price}</p>
                  <p className="subtotal">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="remove-btn ml-2"
                    onClick={() => {
                      moveToWish(item);
                      navigate("/wishlist");
                    }}
                  >
                    Move to wishlist
                  </button>
                </div>
              </div>
            ))}
          </section>
          <section className="price-summary">
            <p>Subtotal:</p>
            <p>Discount: -$0.00</p>
            <p>Shipping: $5.99</p>
            <p>Tax: $3.00</p>
            <h2>Total:</h2>
          </section>

          <section className="actions">
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
            <button className="checkout">Proceed to Checkout</button>
            <div className="promo-code">
              <input
                type="text"
                placeholder="Enter promo code"
                className="promo-input"
              />
              <button className="apply-promo">Apply</button>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default Cart;
