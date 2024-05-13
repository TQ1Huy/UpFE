import axios from "axios";
import { BASE_URL } from "../../constants";
import { PRODUCT_LIST } from "../constant";

const getListProduct = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/hot-products`);
  if (response.status === 200) {
    if (response.data.status === "success") {
      dispatch({
        type: PRODUCT_LIST,
        products: response.data.data || [],
      });
    }
  }
};
export { getListProduct };
