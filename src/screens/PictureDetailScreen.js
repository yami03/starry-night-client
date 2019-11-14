import React, { Component } from "react";
import styled from "styled-components";
import Picture from "../components/Picture";
import User from "../components/User";

const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

const UserWrap = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default class PictureDetailScreen extends Component {
  render() {
    const { navigation } = this.props;
    const { pictures } = this.props.screenProps;
    const index = navigation.getParam("index");

    return (
      <Container>
        <Picture picture={pictures[index].png} />
        <UserWrap>
          <User
            name={pictures[index].user.name}
            profilePictureUrl={pictures[index].user.picture_url}
          />
        </UserWrap>
      </Container>
    );
  }
}
