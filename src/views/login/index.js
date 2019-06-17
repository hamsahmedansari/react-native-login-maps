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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
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
          <LoginForm navigation={this.props.navigation} />
          {/* </View> */}
        </ScrollView>
        <View style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ textAlign: "center" }}>
              Don't Have an Account ?{" "}
              <Text
                style={{
                  color: "#0288D1"
                }}
              >
                Click Here
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
