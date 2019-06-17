import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
class InputFiled extends Component {
  render() {
    const {
      text,
      error,
      changeText,
      label = "",
      placeholder,
      isPassword = false
    } = this.props;
    return (
      <View
        // behavior="padding"
        // enabled
        style={{ marginTop: 10 }}
      >
        <Text style={{ textAlign: "left", textTransform: "capitalize" }}>
          {label}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: error ? "red" : "#0288D1",
            borderBottomWidth: 1
          }}
          value={text}
          onChangeText={changeText}
          placeholder={`i.e ${placeholder}`}
          secureTextEntry={isPassword}
        />
        {error && (
          <Text style={{ textAlign: "right", textTransform: "capitalize" }}>
            Error in {label}
          </Text>
        )}
      </View>
    );
  }
}

export default InputFiled;
