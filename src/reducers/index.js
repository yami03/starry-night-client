import {
  CHANGE_COLOR_ON_DRAWING_BOARD,
  PAINT_ON_DRAWING_BOARD,
  ADD_NEW_PATH_ON_RAWING_BOARD,
  UNDO_PATH_ON_RAWING_BOARD,
  REDO_PATH_ON_RAWING_BOARD,
  RESET_DRAWING_BOARD
} from "../constants/actionTypes";

const initialState = {
  painting: {
    color: "#ffffff",
    strokeWidth: 4,
    currentMax: 0,
    currentPoints: [],
    donePaths: [],
    redoPaths: []
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
          currentMax: state.painting.currentMax + 1,
          redoPaths: []
        })
      });
    case UNDO_PATH_ON_RAWING_BOARD:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          currentMax: state.painting.currentMax - 1,
          redoPaths: state.painting.redoPaths.concat(
            state.painting.donePaths.slice(-1)
          ),
          donePaths: state.painting.donePaths.slice(0, -1)
        })
      });
    case REDO_PATH_ON_RAWING_BOARD:
      return Object.assign({}, state, {
        painting: Object.assign({}, state.painting, {
          currentMax: state.painting.currentMax + 1,
          donePaths: state.painting.donePaths.concat(
            state.painting.redoPaths.slice(-1)
          ),
          redoPaths: state.painting.redoPaths.slice(0, -1)
        })
      });
    case RESET_DRAWING_BOARD:
      return Object.assign({}, state, {
        painting: initialState.painting
      });
    default:
      return state;
  }
}

export default reducer;
