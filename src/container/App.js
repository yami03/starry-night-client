import { connect } from "react-redux";
import App from "../components/App";
import { changeColor } from "../actions";

const mapStateToProps = state => {
  return {
    painting: state.painting
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeColor: color => {
    dispatch(changeColor(color));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
