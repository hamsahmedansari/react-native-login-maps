import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Constants, Location, Permissions } from "expo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { location: {} };
  }
  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      alert("Permission is not Given");
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    console.log("====================================");
    console.log(this.state.location);
    console.log("====================================");
    const markers = [
      {
        latitude: 24.9051051,
        longitude: 67.0774487
      },
      {
        latitude: 22.9051051,
        longitude: 69.0774487
      },
      {
        latitude: 24.9051021,
        longitude: 67.0774387
      },
      {
        latitude: 24.9051151,
        longitude: 67.077287
      }
    ];
    const { location } = this.state;
    if (Object.entries(location).length === 0)
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    return (
      <View>
        {/* <Text>some text</Text> */}
        <MapView
          style={{ width: "100%", height: "80%" }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {markers.map((maker, i) => (
            <Marker
              key={i}
              coordinate={maker}
              title={`i am ${i}`}
              description={`some description of the maker no ${i}`}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default Home;
