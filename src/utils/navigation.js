import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../views/home";
import Login from "../views/login";
import Register from "../views/register";
import Welcome from "../views/welcome";
import Users from "../views/users";
const getScreensNavigator = () => {
  let temp = [
    {
      screen: Users,
      navigationOptions: ({}) => ({ title: "All Register Users" })
    },
    {
      screen: Welcome,
      navigationOptions: ({}) => ({ header: null })
    },
    {
      screen: Register,
      navigationOptions: ({}) => ({ header: null })
    },
    {
      screen: Login,
      navigationOptions: ({}) => ({ header: null })
    },
    {
      screen: Home,
      navigationOptions: ({}) => ({ title: "Welcome To GetLocation" })
    }
  ];
  return temp;
};

const RootStack = createStackNavigator(getScreensNavigator());

const App = createAppContainer(RootStack);

export default App;
