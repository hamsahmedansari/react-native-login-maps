import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      users: [
        {
          _id: 1,
          name: "abc",
          location: {
            latitude: 24.9051051,
            longitude: 67.0774487
          }
        }
      ]
    });
  }
  render() {
    const { users: data } = this.state;
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => String(item._id)}
          ListEmptyComponent={() => <Text>List is Empty</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ width: "100%", padding: 10, backgroundColor: "#ccc" }}
            >
              <Text style={{ textTransform: "capitalize" }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Users;
