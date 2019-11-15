import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import Colors from "../constants/Colors";

export default class ColorSelector extends Component {
  renderColors() {
    const allColors = Object.keys(Colors);

    return allColors.map(color => {
      const { selectedColor } = this.props;
      const colorChipBorder =
        Colors[color] === selectedColor ? "#DC143C" : Colors[color];

      return (
        <TouchableOpacity
          key={color}
          style={[
            styles.option,
            { backgroundColor: Colors[color], borderColor: colorChipBorder }
          ]}
          onPress={() => this.props.onChangeColor(Colors[color])}
        />
      );
    });
  }

  render() {
    return <View style={styles.container}>{this.renderColors()}</View>;
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  option: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").width * 0.06,
    borderRadius: 12.5,
    marginVertical: 5,
    marginHorizontal: Dimensions.get("window").width * 0.025,
    borderWidth: 2,
    borderStyle: "solid"
  }
});
