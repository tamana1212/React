import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = ({ cartMove, moveToWish }) => {
  // const [productCard, setProductCard] = useState(null);
  const { id: proId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getRestaurantMenu();
  // }, []);

  // const getRestaurantMenu = async () => {
  //   const data = await fetch(`https://fakestoreapi.com/products/${param.id}`);
  //   const jsonData = await data.json();
  //   setProductCard(jsonData);

  // };

  const productCard = useRestaurant(proId);

  return (
    <div className="productCard-container">
      {productCard ? (
        <>
          <div className="productCard-image">
            <img src={productCard.image} alt={productCard.title} />
          </div>
          <div className="productCard-details">
            <h1 className="productCard-title">{productCard.title}</h1>
            <p className="productCard-description">{productCard.description}</p>
            <p className="productCard-price">${productCard.price}</p>
            <p className="productCard-rating">
              Rating: {productCard.rating.rate} / 5 ({productCard.rating.count}{" "}
              reviews)
            </p>
            <div className="productCard-actions">
              <button
                className="btn add-to-cart"
                onClick={() => {
                  cartMove(productCard);
                  navigate("/cart");
                }}
              >
                Add to Cart
              </button>
              <button
                className="btn move-to-wishlist"
                onClick={() => {
                  moveToWish(productCard);
                  navigate("/wishlist");
                }}
              >
                Move to Wishlist
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
