import { connect } from "react-redux";
import App from "../components/App";
import { changeColor, drawPicture, addNewPath } from "../actions";

const mapStateToProps = state => {
  return {
    painting: state.painting
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeColor: color => {
    dispatch(changeColor(color));
  },

  onDrawPicture: direction => {
    dispatch(drawPicture(direction));
  },
  onNewPathAdd: path => {
    dispatch(addNewPath(path));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
