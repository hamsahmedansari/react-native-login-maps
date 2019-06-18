import React, { Component } from "react";
import { KeyboardAvoidingView, Text, TextInput } from "react-native";
class InputFiled extends Component {
  render() {
    const {
      text,
      error,
      changeText,
      label = "",
      placeholder,
      errorMsg = "",
      isPassword = false
    } = this.props;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        // enabled
        style={{ marginTop: 10, flex: 1 }}
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
            {errorMsg.length ? errorMsg : `Error in ${label}`}
          </Text>
        )}
      </KeyboardAvoidingView>
    );
  }
}

export default InputFiled;
