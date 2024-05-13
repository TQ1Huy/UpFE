import { BASE_URL, convertToVND } from "../../constants";
import store from "../../stores";
import { addToCart } from "../../stores/action/cartAction";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../stores/action/favoriteAction";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ item }) => {
  const userlogin = useSelector((state) => state.userLogin.userInfo);
  const [data, setData] = useState([]);
  const producID = item.newid;

  // console.log(producID);
  const userId = userlogin?.user?.id;
  const dispatch = useDispatch();
  const getData = async () => {
    const res = await axios.get(`${BASE_URL}/favorite/${userId}`);
    if (res.status === 200) {
      if (res.data.status === "success") {
        setData(res.data.data);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const favoriteProduct = data?.filter((item) => item.product_id == producID);
  // console.log(favoriteProduct, ":sdaasdasd");
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [isFavorite,] = data.product_id === producID;
  const handleToggleFavorite = () => {
    const userId = userlogin?.user?.id;
    if (favoriteProduct.length) {
      dispatch(removeFromFavorites(userId, item.newid));
      console.log("xoa");
    } else {
      dispatch(addToFavorites(userId, item.id));
      console.log("them");
    }
  };
  // console.log("User Id:", isFavorite);
  return (
    <div className="col-md-3 col-sm-6">
      <div className="products">
        <div className="offer" hidden={item.discount === 0 ? true : false}>
          - {item.discount}%
        </div>
        <div className="thumbnail">
          <a href={item.id}>
            <img src={item.productImg} alt={item.productName} />
          </a>
        </div>
        <div className="productname">{item.productName}</div>
        <h4 className="price">{convertToVND.format(item.newPrice)}</h4>
        <div className="button_group">
          <button
            className="button add-cart"
            type="button"
            onClick={() => {
              store.dispatch(addToCart(item.id, 1));
            }}
          >
            Thêm vào giỏ hàng
          </button>
          <button
            className="button add-cart"
            type="button"
            onClick={handleToggleFavorite}
          >
            <HeartOutlined />
            {favoriteProduct.length ? "-1" : "+1"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
