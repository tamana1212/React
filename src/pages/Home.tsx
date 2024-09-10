import { useEffect, useState } from "react";
import { Card } from "../Home/Card";
import { restrautList } from "../config";
import useOffline from "../utils/useOffline";

const Home = ({ search }) => {
  const [product, setProduct] = useState<any>([]);
  const [filtered, setFiltered] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (product?.length > 0) {
      const filteredData = product.filter((item) => {
        return item?.["title"]?.toLowerCase()?.includes(search?.toLowerCase());
      });
      setFiltered(filteredData);
    }
  }, [search, product]);

  const online = useOffline();

  if (!online) {
    return <h1>oops, no internet detected.</h1>;
  }

  const getRestaurants = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setProduct(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid mt-8 gap-5 cards_wrapper">
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
