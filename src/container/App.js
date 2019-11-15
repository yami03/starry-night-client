import React from "react";
import { connect } from "react-redux";
import AppNavigator from "../navigation/AppNavigator";
import {
  changeColor,
  drawPicture,
  addNewPath,
  undoPath,
  redoPath,
  resetBoard,
  getLocation,
  getUserInfo,
  updatePictures,
  updateMyPictures
} from "../actions";
import { postPicture, getAllPicture, getMyPicture } from "../api";

const mapStateToProps = state => {
  return {
    user: state.user,
    painting: state.painting,
    location: state.location,
    pictures: state.pictures
  };
};

const mapDispatchToProps = dispatch => ({
  onGetUserInfo: data => dispatch(getUserInfo(data)),
  onGetLocation: location => dispatch(getLocation(location)),
  onChangeColor: color => dispatch(changeColor(color)),
  onDrawPicture: direction => dispatch(drawPicture(direction)),
  onNewPathAdd: path => dispatch(addNewPath(path)),
  onPathUndo: () => dispatch(undoPath()),
  onPathRedo: () => dispatch(redoPath()),
  onBoardSave: async data => {
    await postPicture(data);
    dispatch(resetBoard());
  },
  onGetAllPicture: async location => {
    const result = await getAllPicture(location);
    dispatch(updatePictures(result));
  },
  onGetMyPicture: async () => {
    const result = await getMyPicture();
    dispatch(updateMyPictures(result));
  }
});

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
