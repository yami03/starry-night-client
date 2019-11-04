import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./src/reducers";
import StarryNight from "./src/container/App";

if (__DEV__) {
  activateKeepAwake();
}

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <StarryNight />
      </Provider>
    );
  }
}

registerRootComponent(index);
