import { combineReducers } from "redux";
import { productReducer } from "./reducer/productReducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { cartReducer } from "./reducer/cartReducer";
import { loginReducer } from "./reducer/loginReducer";
import { favoriteReducer } from "./reducer/favoriteReducer";
import { categoryReducer } from "./reducer/categoryReducer";
import searchReducer from "./reducer/sreachReducer";
import { sliderReducer } from "./reducer/sliderReducer";
// import { commentReducer } from "./reducer/commentReducer";

const reducer = combineReducers({
  categoryReducer: categoryReducer,
  favoriteReducer: favoriteReducer,
  productReducer: productReducer,
  cartReducer: cartReducer,
  userLogin: loginReducer,
  search: searchReducer,
  slider: sliderReducer,
  // commentReducer: commentReducer,
});
const cartItemsFromLocalStorage = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cartReducer: {
    carts: cartItemsFromLocalStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};
const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
  devTools: true,
});

export default store;
