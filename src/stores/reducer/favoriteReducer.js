import { FAVORITE_LIST } from "../constant";

const favoriteReducer = (state = { favoriteItem: [] }, action) => {
  switch (action.type) {
    case FAVORITE_LIST: {
      return { ...state, favoriteItem: action.favoriteItem || [] };
    }
    default:
      return state;
  }
};
export { favoriteReducer };
