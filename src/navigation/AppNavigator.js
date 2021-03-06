import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import MainTabNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const App = createAppContainer(AppNavigator);

export default App;
