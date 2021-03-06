import React, { Component } from "react";
import { View, Text, Dimensions, AsyncStorage } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Location, Permissions, Constants } from "expo";
import { updateUserLocation, getAllUsers } from "../../api/helper";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { location: {}, uid: "", users: {} };
    this._allUser = null;
  }

  componentWillUnmount() {
    if (this._allUser) this._allUser = null;
  }

  async componentDidMount() {
    const uid = this.props.uid
      ? this.props.uid
      : await AsyncStorage.getItem("@currentUser");
    this.setState({ uid });
    this._getLocationAsync();
    await this.getAllUsersLocation();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      alert("Permission is not Given");
    }
    const { uid } = this.state;
    await Location.watchPositionAsync({}, location =>
      this.updateServer(location, uid)
    );
  };
  updateServer = async (location, uid) => {
    try {
      updateUserLocation(location, uid);
      this.setState({ location });
    } catch (error) {
      alert("Error is updating location");
      console.log(error);
    }
  };
  getAllUsersLocation = async () => {
    this._allUser = getAllUsers()
      .get()
      .then(snapshot => {
        const temp = {};
        snapshot.docs.forEach(doc => {
          if (doc && doc.exists) {
            let item = doc.data();
            let uid = doc.id;
            temp[uid] = item;
          }
        });
        this.setState(per => ({
          ...per,
          users: temp
        }));
      });
  };
  render() {
    const { location, users, uid } = this.state;
    if (
      Object.entries(location).length === 0 ||
      Object.entries(users).length === 0 ||
      uid.length === 0
    )
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    return (
      <MapView
        style={{
          width: Dimensions.get("window").width,
          height:
            Dimensions.get("window").height - Constants.statusBarHeight - 40
        }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {Object.keys(users).map((uid, i) => (
          <Marker
            key={uid}
            coordinate={{
              longitude: users[uid].location.coords.longitude,
              latitude: users[uid].location.coords.latitude
            }}
            title={users[uid].fullname}
            description={users[uid].gender}
          />
        ))}
      </MapView>
    );
  }
}

export default Map;
