import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import { captureRef as takeSnapshotAsync } from "react-native-view-shot";
import Colors from "./ColorSelector";
import DrawingBoard from "./DrawingBoard";
import Utilis from "./Utilis";

export default class App extends Component {
  onPictureSave = async donePaths => {
    const png = await takeSnapshotAsync(this.DrawingBoard, {
      format: "png",
      result: "base64",
      quality: 1.0
    });
    this.props.onBoardReset(donePaths);
  };

  render() {
    const {
      onChangeColor,
      painting,
      onDrawPicture,
      onNewPathAdd,
      onPathUndo,
      onPathRedo
    } = this.props;

    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
        <Utilis
          onPathUndo={onPathUndo}
          onPathRedo={onPathRedo}
          donePaths={painting.donePaths}
          redoPaths={painting.redoPaths}
          onPictureSave={this.onPictureSave}
        />
        <Colors onChangeColor={onChangeColor} selectedColor={painting.color} />
        <DrawingBoard
          ref={view => {
            this.DrawingBoard = view;
          }}
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
