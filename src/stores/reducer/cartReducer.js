import { DELETE_CART, DELETE_CART_ITEM } from "../constant";

const cartReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      const existItem = state.carts.find(
        (item) => item.id === action.cartItem.id
      );
      if (existItem) {
        return {
          ...state,
          carts: state.carts.map((item) => {
            return item.id === existItem.id ? action.cartItem : item;
          }),
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, action.cartItem],
        };
      }
    }
    case DELETE_CART:
      return {
        ...state,
        carts: [],
      };
    case DELETE_CART_ITEM:
      let listCart = state.carts;
      let newListCart;
      if (action.cartItem) {
        newListCart = listCart.filter(
          (item) => item.id !== Number(action.cartItem.id)
        );
      }
      return {
        ...state,
        carts: newListCart || [],
      };
    default:
      return state;
  }
};
export { cartReducer };
