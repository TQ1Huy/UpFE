import ProductCard from "../../component/ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const dataProduct = useSelector((state) => state.productReducer.products);
  // console.log(dataProduct);
  return (
    <div className="hot-products">
      <h3 className="title">
        <strong>Hot</strong> Products
      </h3>

      <div className="row">
        {dataProduct.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Products;
