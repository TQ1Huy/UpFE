import { PRODUCT_LIST } from "../constant";

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST: {
      return { ...state, products: action.products || [] };
    }

    default:
      return state;
  }
};

export { productReducer };
