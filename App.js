import React from "react";
import Login from "./src/views/home";
import { View } from "react-native";
import { Constants } from "expo";

export default function App() {
  return (
    <View>
      <View
        style={{
          paddingTop: Constants.statusBarHeight
        }}
      />
      <Login />
    </View>
  );
}
