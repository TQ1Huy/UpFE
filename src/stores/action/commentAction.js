// import axios from "axios";
// import { BASE_URL } from "../../constants";
// import { COMMENT_LIST } from "../constant";

// const getListComment = (product_id) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/comments/${product_id}`);
//     if (response.status === 200 && response.data.status === "success") {
//       dispatch({
//         type: COMMENT_LIST,
//         commentItem: response.data.data || [],
//       });
//     } else {
//       // Xử lý trường hợp lỗi hoặc trạng thái không thành công khác
//       console.error("Error or unsuccessful status:", response.data.message);
//     }
//   } catch (error) {
//     // Xử lý lỗi khi gọi API
//     console.error("Error calling API:", error);
//   }
// };
// export { getListComment };
