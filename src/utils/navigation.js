import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { View, Text } from "react-native";
import Home from "../views/home";
import Login from "../views/login";
import Register from "../views/register";
import Welcome from "../views/welcome";
import Users from "../views/users";

const getScreensNavigator = () => {
  let temp = {
    Welcome: {
      screen: Welcome,
      navigationOptions: ({}) => ({ header: null })
    },
    Users: {
      screen: Users,
      navigationOptions: ({}) => ({ title: "All Register Users" })
    },
    Register: {
      screen: Register,
      navigationOptions: ({}) => ({ header: null })
    },
    Login: {
      screen: Login,
      navigationOptions: ({}) => ({ header: null })
    },
    Home: {
      screen: Home,
      navigationOptions: ({}) => ({
        header: null
      })
    }
  };
  return temp;
};

const RootStack = createStackNavigator(getScreensNavigator());

const App = createAppContainer(RootStack);

export default App;
