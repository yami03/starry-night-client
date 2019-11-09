import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView, { Polyline, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Map from "../components/Map";

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const { location } = this.props.screenProps;
    return <Map location={location} />;
  }
}
