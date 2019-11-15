import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  margin-left: auto;
  padding: 0 20px;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
  opacity: ${props => props.opacity};
`;

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
    const buttonOpacity = donePaths.length ? 1 : 0.3;
    const redoOpacity = redoPaths.length ? 1 : 0.3;

    return (
      <Container>
        <TouchableOpacity key="undo" onPress={() => this.undo(donePaths)}>
          <Icon
            opacity={buttonOpacity}
            source={require("../../assets/undo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity key="redo" onPress={() => this.redo(redoPaths)}>
          <Icon
            opacity={redoOpacity}
            source={require("../../assets/redo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity key="save" onPress={() => this.save(donePaths)}>
          <Icon
            opacity={buttonOpacity}
            source={require("../../assets/save.png")}
          />
        </TouchableOpacity>
      </Container>
    );
  }
}
