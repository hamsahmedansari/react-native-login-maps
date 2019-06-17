import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import Map from "./map";
import Users from "../users";
import { Constants } from "expo";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isMapVisible: false };
  }

  render() {
    return (
      <ScrollView>
        <View style={{ height: Constants.statusBarHeight }} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            onPress={() => this.setState({ isMapVisible: true })}
          >
            <Text
              style={{
                padding: 20,
                fontWeight: !this.state.isMapVisible ? "normal" : "bold"
              }}
            >
              My Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ isMapVisible: false })}
          >
            <Text
              style={{
                padding: 20,
                fontWeight: this.state.isMapVisible ? "normal" : "bold"
              }}
            >
              All Users
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.isMapVisible ? <Map /> : <Users />}
      </ScrollView>
    );
  }
}

export default Home;
