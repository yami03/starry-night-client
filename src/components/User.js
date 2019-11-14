import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Background = styled.ImageBackground`
  width: 73px;
  height: 73px;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 3px;
`;

const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 1);
`;

export default class User extends Component {
  render() {
    const { name, profilePictureUrl } = this.props;

    return (
      <Container>
        <Background source={require("../../assets/diagonal-lines.png")}>
          <ProfileImage source={{ uri: profilePictureUrl }} />
        </Background>
        <Name>{name}</Name>
      </Container>
    );
  }
}
