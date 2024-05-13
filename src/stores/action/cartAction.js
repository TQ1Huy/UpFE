import axios from "axios";
import { BASE_URL } from "../../constants";
import { DELETE_CART, DELETE_CART_ITEM } from "../constant";

const addToCart = (id, quantity) => async (dispatch, getState) => {
  const response = await axios.get(`${BASE_URL}/productbyid/${id}`);
  if (response.status === 200) {
    if (response.data.status === "success") {
      dispatch({
        type: "ADDTOCART",
        cartItem: { ...response.data.data[0], quantity: quantity },
      });
      localStorage.setItem(
        "cartList",
        JSON.stringify(getState().cartReducer.carts)
      );
    }
  }
};
const deleteCart = () => async (dispatch) => {
  dispatch({ type: DELETE_CART });
  localStorage.removeItem("cartList");
};
const deleteCartitem = (item) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    cartItem: item,
  });
  if (getState().cartReducer.carts.length) {
    localStorage.setItem(
      "cartList",
      JSON.stringify(getState().cartReducer.carts)
    );
  } else {
    localStorage.removeItem("cartList");
  }
};
export { addToCart, deleteCart, deleteCartitem };
