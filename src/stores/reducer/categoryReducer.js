import { CATEGORY_LIST } from "../constant";

const categoryReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST: {
      return { ...state, category: action.category || [] };
    }

    default:
      return state;
  }
};

export { categoryReducer };
