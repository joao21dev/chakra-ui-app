import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChartCards from "../components/ChartCards";
import PostsCards from "../components/PostsCard";
import ProductsCards from "../components/ProductsCard";

const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.products;
      console.log("Data dos products: ", data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchUserData();
  }, []);
  return (
    <div>
      {data.map((product) => (
        <ProductsCards
          price={product.price}
          name={product.title}
          image={product.images[0]}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Products;
