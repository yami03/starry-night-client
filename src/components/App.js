import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Colors from "./ColorSelector";
import DrawingBoard from "./DrawingBoard";

export default class App extends Component {
  render() {
    const { onChangeColor, painting } = this.props;
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
        <Colors onChangeColor={onChangeColor} selectedColor={painting.color} />
        <DrawingBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});
