import React, { Component } from "react";
import styled from "styled-components";
import * as Font from "expo-font";
import { logInFacebook, getToken } from "../api";

const Container = styled.View`
  background: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CatImage = styled.Image`
  background: #000;
  width: 100%;
  height: 40%;
  transform: rotate(340deg);
  margin: -15% 0 5% -15%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  padding: 0 40px;
`;

const Background = styled.ImageBackground`
  width: 220px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

const LoginText = styled.Text`
  color: #dbfff8;
  font-size: 18px;
  font-weight: bold;
  background: black;
`;

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      wallpoet: require("../../assets/fonts/Wallpoet-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

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
        profilePictureUrl: facebookResponse.picture.data.url
      };

      this.props.screenProps.onGetUserInfo(userInfo);

      this.props.navigation.navigate("Main");
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <Container>
        <CatImage source={require("../../assets/cat02.gif")} />
        {this.state.fontLoaded && (
          <Title style={{ fontFamily: "wallpoet" }}>Starry Night</Title>
        )}
        <LoginButton onPress={() => this.logIn()}>
          <Background
            source={require("../../assets/bg-heart2.png")}
            resizeMode="contain"
          >
            <LoginText>Facebook Login</LoginText>
          </Background>
        </LoginButton>
      </Container>
    );
  }
}
