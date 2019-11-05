import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import Colors from "./ColorSelector";
import DrawingBoard from "./DrawingBoard";

export default class App extends Component {
  render() {
    const { onChangeColor, painting, onDrawPicture, onNewPathAdd } = this.props;

    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
        <Colors onChangeColor={onChangeColor} selectedColor={painting.color} />
        <DrawingBoard
          painting={painting}
          onDrawPicture={onDrawPicture}
          onNewPathAdd={onNewPathAdd}
          width={Dimensions.get("window").width - 20}
          height={Dimensions.get("window").height * 0.7}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  }
});
