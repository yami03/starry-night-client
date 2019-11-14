import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../screens/MapScreen";
import DrawingBoardScreen from "../screens/DrawingBoardScreen";
import PictureDetailScreen from "../screens/PictureDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const MainNavigator = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {
        header: null,
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000"
        }
      }
    },
    DrawingBoard: {
      screen: DrawingBoardScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000"
        },
        headerTintColor: "#fff"
      }
    },
    Picture: {
      screen: PictureDetailScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000"
        },
        headerTintColor: "#fff"
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000"
        },
        headerTintColor: "#fff"
      }
    }
  },
  {
    initialRouteName: "Map"
  }
);

export default MainNavigator;
