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
  getLocation
} from "../actions";
import { postPicture } from "../api";

const mapStateToProps = state => {
  return {
    painting: state.painting,
    location: state.location
  };
};

const mapDispatchToProps = dispatch => ({
  onGetLocation: location => dispatch(getLocation(location)),
  onChangeColor: color => dispatch(changeColor(color)),
  onDrawPicture: direction => dispatch(drawPicture(direction)),
  onNewPathAdd: path => dispatch(addNewPath(path)),
  onPathUndo: () => dispatch(undoPath()),
  onPathRedo: () => dispatch(redoPath()),
  onBoardReset: donePaths => {
    console.log(donePaths);
    fetch("http://localhost:4001/painting", {
      method: "POST",
      body: JSON.stringify({ donePaths }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
});

const AppContainer = props => {
  return <AppNavigator screenProps={props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
