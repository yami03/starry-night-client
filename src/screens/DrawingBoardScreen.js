import React, { Component } from "react";
import { Dimensions } from "react-native";
import * as Location from "expo-location";
import styled from "styled-components";
import { captureRef as takeSnapshotAsync } from "react-native-view-shot";
import { LinearGradient } from "expo-linear-gradient";
import Utilis from "../components/Utilis";
import ColorSelector from "../components/ColorSelector";
import DrawingBoard from "../components/DrawingBoard";

const Container = styled.View`
  height: 100%;
  align-items: center;
  background: #000;
`;

export default class DrawingBoardScreen extends Component {
  getLocationAsync = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    this.props.screenProps.onGetLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    });
  };

  onPictureSave = async donePaths => {
    await this.getLocationAsync();

    const { onBoardSave, location, onGetAllPicture } = this.props.screenProps;
    const png = await takeSnapshotAsync(this.DrawingBoard, {
      format: "png",
      result: "base64",
      quality: 1.0
    });

    await onBoardSave({
      paths: donePaths,
      location: {
        type: "Point",
        coordinates: [location.longitude, location.latitude]
      },
      png
    });

    await onGetAllPicture(location);

    this.props.navigation.navigate("Map");
  };

  render() {
    const {
      onChangeColor,
      painting,
      onDrawPicture,
      onNewPathAdd,
      onPathUndo,
      onPathRedo
    } = this.props.screenProps;

    return (
      <Container>
        <Utilis
          onPathUndo={onPathUndo}
          onPathRedo={onPathRedo}
          donePaths={painting.donePaths}
          redoPaths={painting.redoPaths}
          onPictureSave={this.onPictureSave}
        />

        <ColorSelector
          onChangeColor={onChangeColor}
          selectedColor={painting.color}
        />

        <LinearGradient
          style={{
            padding: 2,
            borderRadius: 5
          }}
          colors={["#2569FF", "#C848FE"]}
        >
          <DrawingBoard
            ref={view => {
              this.DrawingBoard = view;
            }}
            painting={painting}
            onDrawPicture={onDrawPicture}
            onNewPathAdd={onNewPathAdd}
            width={Dimensions.get("window").width - 20}
            height={(Dimensions.get("window").width - 20) * 1.3}
          />
        </LinearGradient>
      </Container>
    );
  }
}
