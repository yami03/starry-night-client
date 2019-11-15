import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { getWeek } from "../utility/date";

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c"
      }
    ]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
];

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, goPictureView, pictures, user } = this.props;
    const myConstellations = {};

    pictures.forEach(picture => {
      if (picture.user === user) {
        const week = getWeek(picture.created_at);
        if (!myConstellations.hasOwnProperty(week)) myConstellations[week] = [];
        myConstellations[week].push({
          longitude: picture.location.coordinates[0],
          latitude: picture.location.coordinates[1]
        });
      }
    });

    const renderPolyLine = Object.keys(myConstellations).map(constellation => (
      <Polyline
        key={constellation}
        coordinates={myConstellations[constellation]}
        strokeColor="#FD9800"
        strokeColors={[
          "#7F0000",
          "#00000000",
          "#B24112",
          "#E5845C",
          "#238C23",
          "#7F0000"
        ]}
        strokeWidth={1}
      />
    ));

    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          // region={location}
          // 데모용 위치 설정
          region={{
            latitude: 37.77,
            longitude: -122.45,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          customMapStyle={mapStyle}
          style={styles.mapStyle}
          minZoomLevel={9}
        >
          {renderPolyLine}
          {pictures.map((picture, index) => (
            <Marker
              onPress={() => goPictureView(index)}
              key={index}
              coordinate={{
                longitude: picture.location.coordinates[0],
                latitude: picture.location.coordinates[1]
              }}
              image={require("../../assets/star.png")}
              anchor={{ x: 0.5, y: 0.5 }}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 1.2
  }
});
