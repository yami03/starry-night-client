import {
  CHANGE_COLOR_ON_DRAWING_BOARD,
  PAINT_ON_DRAWING_BOARD,
  ADD_NEW_PATH_ON_RAWING_BOARD
} from "../constants/actionTypes";

export const changeColor = color => {
  return {
    type: CHANGE_COLOR_ON_DRAWING_BOARD,
    color
  };
};

export const drawPicture = point => {
  return {
    type: PAINT_ON_DRAWING_BOARD,
    point
  };
};

export const addNewPath = point => {
  return {
    type: ADD_NEW_PATH_ON_RAWING_BOARD,
    point
  };
};
