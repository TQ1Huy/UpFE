import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListProduct } from "../../stores/action/productAction";
import store from "../../stores";
import ProductCard from "./ProductCard";

const MyProductList = ({ products, searchTerm }) => {
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const fetchData = async () => {
    store.dispatch(getListProduct());
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("filteredProducts:", searchTerm);
  return (
    <div>
      {searchTerm === "" ? (
        <div style={{ height: 550 }}>
          <p>Nhập từ khoá</p>
        </div>
      ) : filteredProducts && filteredProducts.length === 0 ? (
        <div style={{ height: 550 }}>không tìm thấy</div>
      ) : (
        <>
          <h1>Sản phẩm cần tìm với từ khoá: {searchTerm}</h1>
          <div className="row">
            {filteredProducts.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.productReducer.products, // Đổi thành reducer phù hợp
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps)(MyProductList);
