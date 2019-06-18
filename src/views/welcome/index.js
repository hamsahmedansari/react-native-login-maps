import React from "react";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentWillMount() {
    const user = await AsyncStorage.getItem("@currentUser");
    if (user) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })],
        key: null
      });
      this.props.navigation.dispatch(resetAction);
    }
  }
  render() {
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
              Used to generate numbers based upon a generator function, and
              then,
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
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "#ffffff", textAlign: "center" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
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
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
  }
}

export default Welcome;
