import { useEffect, useState } from "react";
import { Card } from "../Home/Card";
import { restrautList } from "../config";

const Home = ({ search }) => {
  const [product, setProduct] = useState([restrautList]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const filteredData = product.filter((item) => {
        return item?.["name"]?.toLowerCase()?.includes(search?.toLowerCase());
      });
      setFiltered(filteredData);
    }
  }, [search, product]);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.22810&lng=75.77870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setProduct(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => {
            return item.info;
          }
        )
      );
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid  mt-8 gap-5 cards_wrapper">
      {isLoading ? (
        "Loading..."
      ) : filtered.length ? (
        filtered.map((item) => <Card key={item.id} productData={item} />)
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Home;
