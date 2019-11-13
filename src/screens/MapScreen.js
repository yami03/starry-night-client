import React, { Component } from "react";
import styled from "styled-components";
import { NavigationEvents } from "react-navigation";
import Map from "../components/Map";
import BoardButtom from "../components/BoardButton";
import User from "../components/User";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  goToPictureView = index => {
    this.props.navigation.navigate("Picture", {
      index
    });
  };

  goToProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  render() {
    const { navigation } = this.props;
    const {
      location,
      onGetLocation,
      onGetAllPicture,
      pictures,
      user
    } = this.props.screenProps;

    return (
      <Container>
        <User user={user} goProfileView={this.goToProfile} />
        <NavigationEvents onDidFocus={() => onGetAllPicture()} />
        <Map
          pictures={pictures}
          location={location}
          onGetLocation={onGetLocation}
          goPictureView={this.goToPictureView}
        />
        <BoardButtom
          navigation={navigation}
          title="Go drawing board"
        ></BoardButtom>
      </Container>
    );
  }
}
