import { SLIDER_LIST } from "../constant";

const sliderReducer = (state = { slider: [] }, action) => {
  switch (action.type) {
    case SLIDER_LIST: {
      return { ...state, slider: action.slider || [] };
    }

    default:
      return state;
  }
};

export { sliderReducer };
