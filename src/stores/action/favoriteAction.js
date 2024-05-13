import axios from "axios";
import { BASE_URL } from "../../constants";
import { FAVORITE_LIST } from "../constant";

const getListFavorite = (user_id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/favorite/${user_id}`);
    if (response.status === 200 && response.data.status === "success") {
      dispatch({
        type: FAVORITE_LIST,
        favoriteItem: response.data.data || [],
      });
    } else {
      // Xử lý trường hợp lỗi hoặc trạng thái không thành công khác
      console.error("Error or unsuccessful status:", response.data.message);
    }
  } catch (error) {
    // Xử lý lỗi khi gọi API
    console.error("Error calling API:", error);
  }
};
const getListFavoriteProduct = (user_id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/favorite-product/${user_id}`);
    if (response.status === 200 && response.data.status === "success") {
      dispatch({
        type: FAVORITE_LIST,
        favoriteItem: response.data.data || [],
      });
    } else {
      // Xử lý trường hợp lỗi hoặc trạng thái không thành công khác
      console.error("Error or unsuccessful status:", response.data.message);
    }
  } catch (error) {
    // Xử lý lỗi khi gọi API
    console.error("Error calling API:", error);
  }
};
export const addToFavorites = (userId, productId) => async (dispatch) => {
  try {
    // Gọi API để thêm sản phẩm vào danh sách yêu thích
    const response = await axios.post(`${BASE_URL}/addFavoriteItem`, {
      userId,
      productId,
    });
    // Nếu thành công, dispatch action để cập nhật Redux store
    if (response.data.success) {
      dispatch({
        type: "ADDTOFAVORITES",
        favoriteItem: response.data.favoriteItem,
      });
    }
  } catch (error) {
    console.error("Lỗi khi thêm vào danh sách yêu thích", error);
  }
};
export const removeFromFavorites = (userId, productId) => async (dispatch) => {
  try {
    // Gọi API để xóa sản phẩm khỏi danh sách yêu thích
    const response = await axios.delete(
      `${BASE_URL}/deleteFavoriteItem/userId=${userId}&productId=${productId}`
    );
    // Nếu thành công, dispatch action để cập nhật Redux store
    if (response.data.success) {
      dispatch({
        type: "REMOVEFAVORITES",
        productId,
      });
    }
  } catch (error) {
    console.error("Lỗi khi xóa khỏi danh sách yêu thích", error);
  }
};

export { getListFavoriteProduct, getListFavorite };
