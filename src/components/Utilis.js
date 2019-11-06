import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUndoAlt,
  faRedoAlt,
  faSave
} from "@fortawesome/free-solid-svg-icons";

export default class Utilis extends Component {
  undo(donePaths) {
    if (!donePaths.length) return;
    this.props.onPathUndo();
  }

  redo(redoPaths) {
    if (!redoPaths.length) return;
    this.props.onPathRedo();
  }

  save(donePaths) {
    if (!donePaths.length) return;
    this.props.onPictureSave(donePaths);
  }

  render() {
    const { donePaths, redoPaths } = this.props;
    const buttonColor = donePaths.length ? "#fff" : "#666";
    const redoColor = redoPaths.length ? "#fff" : "#666";

    return (
      <View style={styles.container}>
        <TouchableOpacity key="undo" onPress={() => this.undo(donePaths)}>
          <FontAwesomeIcon
            icon={faUndoAlt}
            color={buttonColor}
            size={20}
            style={styles.fontAwesome}
          />
        </TouchableOpacity>
        <TouchableOpacity key="redo" onPress={() => this.redo(redoPaths)}>
          <FontAwesomeIcon
            icon={faRedoAlt}
            color={redoColor}
            size={20}
            style={styles.fontAwesome}
          />
        </TouchableOpacity>
        <TouchableOpacity key="save" onPress={() => this.save(donePaths)}>
          <FontAwesomeIcon
            icon={faSave}
            color={buttonColor}
            size={20}
            style={styles.fontAwesome}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: "auto",
    paddingHorizontal: 20
  },
  fontAwesome: {
    marginLeft: 15
  }
});
