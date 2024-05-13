import axios from "axios";
import { BASE_URL } from "../../constants";
import { CATEGORY_LIST } from "../constant";

const getListCategory = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/category`);
  if (response.status === 200) {
    if (response.data.status === "success") {
      dispatch({
        type: CATEGORY_LIST,
        category: response.data.data || [],
      });
    }
  }
};
export { getListCategory };
