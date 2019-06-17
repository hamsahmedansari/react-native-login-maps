import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Welcome = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: 30
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <Text style={{ fontWeight: "100", fontSize: 35, textAlign: "left" }}>
          GetLocation
        </Text>
        <View style={{ width: "70%" }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              textTransform: "uppercase"
            }}
          >
            Login
          </Text>
        </View>
      </View>
      <ScrollView />
      <View style={{ width: "100%" }}>
        <Text style={{ textAlign: "center" }}>
          Din't Have an Account ?{" "}
          <Text
            style={{
              color: "#0288D1"
            }}
          >
            Click Here
          </Text>
        </Text>
      </View>
      <View />
    </View>
  );
};

export default Welcome;
