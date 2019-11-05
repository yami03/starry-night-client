import {
  CHANGE_COLOR_ON_DRAWING_BOARD,
  PAINT_ON_DRAWING_BOARD,
  ADD_NEW_PATH_ON_RAWING_BOARD
} from "../constants/actionTypes";

const initialState = {
  painting: {
    color: "#ffffff",
    strokeWidth: 4,
    currentMax: 0,
    currentPoints: [],
    donePaths: []
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR_ON_DRAWING_BOARD:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          color: action.color
        })
      });
    case PAINT_ON_DRAWING_BOARD:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          currentPoints: [...state.painting.currentPoints, action.point]
        })
      });
    case ADD_NEW_PATH_ON_RAWING_BOARD:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          currentPoints: [],
          donePaths: [
            ...state.painting.donePaths,
            {
              key: state.painting.currentMax,
              d: action.point,
              stroke: state.painting.color,
              strokeWidth: state.painting.strokeWidth,
              fill: "none"
            }
          ],
          currentMax: state.painting.currentMax + 1
        })
      });
    default:
      return state;
  }
}

export default reducer;
