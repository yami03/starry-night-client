import { CHANGE_COLOR_IN_DRAWING } from "../constants/actionTypes";

export const changeColor = color => {
  return {
    type: CHANGE_COLOR_IN_DRAWING,
    color
  };
};
