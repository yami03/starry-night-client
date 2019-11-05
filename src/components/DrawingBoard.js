import React, { Component } from "react";
import {
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import Svg, { G, Path } from "react-native-svg";
import Reaction from "./Reaction";

export default class DrawingBoard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      reaction: new Reaction()
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gs) => true,
      onMoveShouldSetPanResponder: (evt, gs) => true,
      onPanResponderGrant: (evt, gs) => this.onResponderGrant(evt, gs),
      onPanResponderMove: (evt, gs) => this.onResponderMove(evt, gs),
      onPanResponderRelease: (evt, gs) => this.onResponderRelease(evt, gs)
    });
  }

  onTouch(evt) {
    let [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
    // const newCurrentPoints = this.props.currentPoints;
    // newCurrentPoints.push({ x, y });

    this.props.onDrawPicture({ x, y });

    // this.setState({
    //   donePaths: this.props.donePaths,
    //   currentPoints: newCurrentPoints,
    //   currentMax: this.state.currentMax
    // });
  }

  onResponderGrant(evt) {
    this.onTouch(evt);
  }

  onResponderRelease() {
    this.props.onNewPathAdd(
      this.state.reaction.pointsToSvg(this.props.painting.currentPoints)
    );
  }

  onResponderMove(evt) {
    this.onTouch(evt);
  }

  _onLayoutContainer = e => {
    this.state.reaction.setOffset(e.nativeEvent.layout);
  };

  render() {
    const {
      color,
      strokeWidth,
      currentMax,
      currentPoints
    } = this.props.painting;

    let renderPath = null;
    if (this.props.painting.donePaths.length) {
      renderPath = this.props.painting.donePaths.map(el => (
        <Path
          key={el.key}
          d={el.d}
          stroke={el.stroke}
          strokeWidth={el.strokeWidth}
          fill="none"
        />
      ));
    }

    return (
      <View
        onLayout={this._onLayoutContainer}
        style={[
          styles.drawContainer,
          this.props.containerStyle,
          { width: this.props.width, height: this.props.height }
        ]}
      >
        <View {...this._panResponder.panHandlers}>
          <Svg
            style={styles.drawSurface}
            width={this.props.width}
            height={this.props.height}
          >
            <G>
              {renderPath}
              <Path
                key={currentMax}
                d={this.state.reaction.pointsToSvg(currentPoints)}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
              />
            </G>
          </Svg>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  drawContainer: {
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1
  },

  drawSurface: {
    borderWidth: 5,
    borderRightWidth: 5,
    borderColor: "#fff",
    backgroundColor: "#000"
  }
});
