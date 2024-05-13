import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const CategoryPrd = () => {
  const { slug } = useParams();
  // console.log(slug);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/category-product/${slug}`
        );
        setData(response.data.data); // Assuming your API response has a 'data' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="container">
      <h3 className="title">
        <strong>Sản phẩm</strong>
      </h3>
      <div className="row">
        {data?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default CategoryPrd;
