import React, { Component } from "react";
import styled from "styled-components";
import User from "../components/User";
import PictureList from "../components/PictureList";

const Container = styled.View`
  flex: 1;
  background: #000;
  padding: 2% 5%;
`;

export default class ProfileScreen extends Component {
  componentDidMount() {
    this.props.screenProps.onGetMyPicture();
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.props.screenProps;

    return (
      <Container>
        <User name={user.name} profilePictureUrl={user.profilePictureUrl} />
        <PictureList pictures={user.pictures} />
      </Container>
    );
  }
}
