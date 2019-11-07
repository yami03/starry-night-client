import { connect } from "react-redux";
import AppNavigator from "../navigation/AppNavigator";
import {
  changeColor,
  drawPicture,
  addNewPath,
  undoPath,
  redoPath,
  resetBoard
} from "../actions";
import { postPicture } from "../api";

const mapStateToProps = state => {
  return {
    painting: state.painting
  };
};

const mapDispatchToProps = dispatch => ({
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigator);
