import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../screens/MapScreen";
import DrawingBoardScreen from "../screens/DrawingBoardScreen";

const MainNavigator = createStackNavigator(
  {
    Map: { screen: MapScreen },
    DrawingBoard: { screen: DrawingBoardScreen }
  },
  {
    initialRouteName: "Map"
  }
);

export default MainNavigator;
