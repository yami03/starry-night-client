import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import MainTabNavigator from "./MainNavigator";

const AuthNavigator = createStackNavigator(
  { SignIn: SignInScreen },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
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
