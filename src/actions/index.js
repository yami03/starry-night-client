import {
  CHANGE_COLOR_ON_DRAWING_BOARD,
  PAINT_ON_DRAWING_BOARD,
  ADD_NEW_PATH_ON_RAWING_BOARD,
  UNDO_PATH_ON_RAWING_BOARD,
  REDO_PATH_ON_RAWING_BOARD,
  RESET_DRAWING_BOARD,
  GET_LOCATION,
  GET_USER_INFO,
  UPDATE_PICTURES,
  UPDATE_MY_PICTURES
} from "../constants/actionTypes";

export const changeColor = color => ({
  type: CHANGE_COLOR_ON_DRAWING_BOARD,
  color
});

export const drawPicture = point => ({
  type: PAINT_ON_DRAWING_BOARD,
  point
});

export const addNewPath = point => ({
  type: ADD_NEW_PATH_ON_RAWING_BOARD,
  point
});

export const undoPath = () => ({
  type: UNDO_PATH_ON_RAWING_BOARD
});

export const redoPath = () => ({
  type: REDO_PATH_ON_RAWING_BOARD
});

export const resetBoard = () => ({
  type: RESET_DRAWING_BOARD
});

export const getLocation = location => ({
  type: GET_LOCATION,
  location
});

export const getUserInfo = user => ({
  type: GET_USER_INFO,
  user: {
    id: user.id,
    name: user.name,
    profilePictureUrl: user.profile_picture_url
  }
});

export const updatePictures = pictures => ({
  type: UPDATE_PICTURES,
  pictures
});

export const updateMyPictures = pictures => ({
  type: UPDATE_MY_PICTURES,
  pictures
});
