import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import InputFiled from "../textfiled";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { text: "", error: false },
      password: { text: "", error: false }
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  isValid = () => {
    const { email, password } = this.state;
    if (!this.validateEmail(email.text)) {
      this.setState(per => ({
        ...per,
        email: {
          ...per.email,
          error: true
        }
      }));
      return false;
    } else {
      this.setState(per => ({
        ...per,
        email: {
          ...per.email,
          error: false
        }
      }));
    }
    if (String(password.text).length <= 4) {
      this.setState(per => ({
        ...per,
        password: {
          ...per.password,
          error: true
        }
      }));
      return false;
    } else {
      this.setState(per => ({
        ...per,
        password: {
          ...per.password,
          error: false
        }
      }));
    }
    return true;
  };
  _handelSubmit = () => {
    if (this.isValid()) {
      this.props.navigation.navigate("Home");
    } else {
      // alert("Error in form");
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <View>
        <InputFiled
          text={email.text}
          error={email.error}
          label="Email"
          placeholder="abc@abc.com"
          changeText={text =>
            this.setState(per => ({ ...per, email: { ...per.email, text } }))
          }
        />
        <InputFiled
          text={password.text}
          error={password.error}
          label="Password"
          placeholder="abc123"
          isPassword={true}
          changeText={text =>
            this.setState(per => ({
              ...per,
              password: { ...per.password, text }
            }))
          }
        />
        <TouchableOpacity
          style={{
            width: "100%",
            maxHeight: 50,
            backgroundColor: "#0288D1",
            padding: 10,
            borderRadius: 5,
            marginTop: 50
          }}
          onPress={this._handelSubmit}
        >
          <Text style={{ textAlign: "center", color: "#ffffff" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginForm;
