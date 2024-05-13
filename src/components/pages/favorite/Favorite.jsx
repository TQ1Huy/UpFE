import { useSelector } from "react-redux";
import ProductCard from "../../component/ProductCard";
import store from "../../../stores";
import { getListFavoriteProduct } from "../../../stores/action/favoriteAction";
import { useEffect } from "react";

const Favorite = () => {
  const favoriteProduct = useSelector(
    (state) => state.favoriteReducer.favoriteItem
  );
  const userlogin = useSelector((state) => state.userLogin.userInfo);
  const userId = userlogin?.user?.id;

  const fetchData = async () => {
    store.dispatch(getListFavoriteProduct(userId));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h3 className="title">
        <strong>My favorite</strong>
      </h3>
      <div className="row">
        {favoriteProduct.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Favorite;
