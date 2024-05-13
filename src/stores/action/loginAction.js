import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constant";
import { BASE_URL } from "../../constants";
import { message } from "antd";

const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await axios.post(`${BASE_URL}/login`, {
      username: username,
      password: password,
    });
    if (response.status === 200) {
      if (response.data.msg === "Đăng nhập thành công.") {
        if (response.data.user.role_id === 1) {
          dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
          localStorage.setItem("userInfo", JSON.stringify(response.data));
        }
      } else {
        message.error("Thử lại");
      }
    }
  } catch (error) {
    const message =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    dispatch({ type: USER_LOGIN_FAIL, payload: message });
  }
};
const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export { login, logout };
