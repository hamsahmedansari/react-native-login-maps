import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAllUsers } from "../../api/helper";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this._allUser = null;
  }

  componentWillUnmount() {
    if (this._allUser) this._allUser = null;
  }

  componentDidMount() {
    this._allUser = getAllUsers()
      .get()
      .then(snapshot => {
        const temp = [];
        snapshot.docs.forEach(doc => {
          if (doc && doc.exists) {
            let item = doc.data();
            let uid = doc.id;
            temp.push({ uid, details: item });
          }
        });
        this.setState(per => ({
          ...per,
          users: temp
        }));
      });
  }
  render() {
    const { users: data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item._id)}
        ListEmptyComponent={() => <Text>Please Wait</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: "100%", padding: 10, backgroundColor: "#ccc" }}
          >
            <Text style={{ textTransform: "capitalize" }}>
              {item.details.fullname}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

export default Users;
