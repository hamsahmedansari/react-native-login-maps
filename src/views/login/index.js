import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import LoginForm from "../../components/login";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 30
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "100",
              paddingTop: 20,
              fontSize: 30,
              textAlign: "left"
            }}
          >
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
        <ScrollView style={{ width: "100%", paddingTop: 40 }}>
          {/* <View> */}
          <LoginForm />
          {/* </View> */}
        </ScrollView>
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
  }
}

export default Welcome;
