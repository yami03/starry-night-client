import React, { Component } from "react";
import styled from "styled-components";
import { NavigationEvents } from "react-navigation";
import * as Location from "expo-location";
import Map from "../components/Map";
import BoardButtom from "../components/BoardButton";
import User from "../components/User";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const UserWrap = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 100;
`;

export default class MapScreen extends Component {
  async componentDidMount() {
    this.getAllPicture();
  }

  getLocationAsync = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    this.props.screenProps.onGetLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    });
  };

  getAllPicture = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});

    await this.props.screenProps.onGetAllPicture({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    });
  };

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
    const { location, onGetLocation, pictures, user } = this.props.screenProps;

    return (
      <Container>
        <NavigationEvents onDidFocus={() => this.getAllPicture()} />
        <UserWrap onPress={() => this.goToProfile()}>
          <User name={user.name} profilePictureUrl={user.profilePictureUrl} />
        </UserWrap>
        <Map
          user={user.id}
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
