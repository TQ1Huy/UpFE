import axios from "axios";
import { BASE_URL } from "../../constants";
import { SLIDER_LIST } from "../constant";

const getListSlider = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/slider`);
  if (response.status === 200) {
    if (response.data.status === "success") {
      dispatch({
        type: SLIDER_LIST,
        slider: response.data.data || [],
      });
    }
  }
};
export { getListSlider };
