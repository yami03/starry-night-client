import React, { Component } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  align-items: center;
`;

const Image = styled.Image`
  width: ${Dimensions.get("window").width - 20};
  height: ${(Dimensions.get("window").width - 20) * 1.3};
`;

export default class Picture extends Component {
  render() {
    const { picture } = this.props;

    return (
      <Container>
        <Image source={{ uri: `data:image/png;base64,${picture}` }} />
      </Container>
    );
  }
}
