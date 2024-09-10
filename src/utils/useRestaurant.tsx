import { useEffect, useState } from "react";
import { FETCH_PRODUCT_URL } from "../config";

const useRestaurant = (proId) => {
  const [productCard, setProductCard] = useState(null);

  useEffect(() => {
    if (proId) getRestaurantMenu();
  }, [proId]);

  async function getRestaurantMenu() {
    try {
      const response = await fetch(FETCH_PRODUCT_URL + proId);
      const data = await response.json();
      setProductCard(data);
    } catch (error) {
      console.log(error);
    }
  }

  return productCard;
};

export default useRestaurant;
