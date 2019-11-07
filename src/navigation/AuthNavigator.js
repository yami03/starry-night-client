import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "../screens/SignInScreen";

const AuthNavigator = createStackNavigator(
  { SignIn: SignInScreen },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default AuthNavigator;
