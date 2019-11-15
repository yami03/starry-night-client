import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Alert
} from "react-native";
import * as Permissions from "expo-permissions";
import * as SecureStore from "expo-secure-store";
import { getUser } from "../api";

export default class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.isLoginAsync();
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  isLoginAsync = async () => {
    const userToken = await SecureStore.getItemAsync("ACCESS_TOKEN");

    if (userToken) {
      const result = await getUser();

      this.props.screenProps.onGetUserInfo(result);
      this.props.navigation.navigate("Map");
      return;
    }

    this.props.navigation.navigate("Auth");
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      Alert.alert(
        "Location",
        "Permission to access location was denied",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
