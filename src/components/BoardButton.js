import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -50px;
`;

const Background = styled.ImageBackground`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 22px;
`;

export default class BoardButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button onPress={() => this.props.navigation.navigate("DrawingBoard")}>
        <Background source={require("../../assets/circle.png")}>
          <Image source={require("../../assets/brush.png")} />
        </Background>
      </Button>
    );
  }
}
