import React, { Component } from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 70px;
`;

const List = styled.FlatList`
  flex-direction: row;
  color: #fff;
`;

const Wrap = styled.View`
  padding: 5px;
`;

const Image = styled.Image`
  width: ${(Dimensions.get("window").width - 60) * 0.5};
  height: ${(Dimensions.get("window").width - 60) * 0.65};
`;

export default class PictureList extends Component {
  render() {
    const { pictures } = this.props;

    return (
      <Container>
        <List
          data={pictures}
          numColumns={2}
          renderItem={({ item }) => (
            <Wrap>
              <LinearGradient
                style={{
                  padding: 1,
                  borderRadius: 1
                }}
                colors={["#2569FF", "#C848FE"]}
              >
                <Image source={{ uri: `data:image/png;base64,${item.png}` }} />
              </LinearGradient>
            </Wrap>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}
