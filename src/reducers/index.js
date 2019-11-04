import { CHANGE_COLOR_IN_DRAWING } from "../constants/actionTypes";

const initialState = {
  painting: {
    color: "#ffffff"
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR_IN_DRAWING:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          color: action.color
        })
      });
    default:
      return state;
  }
}

export default reducer;
