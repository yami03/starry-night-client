import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  StatusBar,
  View
} from "react-native";
import * as SecureStore from "expo-secure-store";

export default class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this.isLoginAsync();
  }

  isLoginAsync = async () => {
    const userToken = await SecureStore.getItemAsync("ACCESS_TOKEN");
    this.props.navigation.navigate(userToken ? "Main" : "Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
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
