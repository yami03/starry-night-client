import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logInFacebook, getToken } from "../api";

export default class SignInScreen extends Component {
  async logIn() {
    try {
      const facebookResponse = await logInFacebook();

      const response = await getToken({
        id: facebookResponse.id,
        name: facebookResponse.name,
        picture: facebookResponse.picture
      });

      const userInfo = {
        id: response._id,
        name: facebookResponse.name,
        picture: facebookResponse.picture.data.url
      };

      this.props.screenProps.onGetUserInfo(userInfo);

      this.props.navigation.navigate("Main");
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => this.logIn()}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
