import React, { Component } from "react";
import { StyleSheet, PanResponder, View } from "react-native";
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

    this.props.onDrawPicture({ x, y });
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
          this.props.containerStyle,
          { width: this.props.width, height: this.props.height }
        ]}
      >
        <View
          {...this._panResponder.panHandlers}
          style={{
            backgroundColor: "#000"
          }}
        >
          <Svg width={this.props.width} height={this.props.height}>
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
