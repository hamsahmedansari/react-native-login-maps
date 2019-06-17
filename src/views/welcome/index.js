import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
      <View>
        <Text style={{ fontWeight: "100", fontSize: 35, textAlign: "left" }}>
          GetLocation
        </Text>
        <View style={{ width: "70%" }}>
          <Text style={{ textAlign: "left" }}>
            Used to generate numbers based upon a generator function, and then,
          </Text>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#0288D1",
            padding: 10,
            borderRadius: 10
          }}
        >
          <Text style={{ color: "#ffffff" }}>Login</Text>
        </TouchableOpacity>
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
