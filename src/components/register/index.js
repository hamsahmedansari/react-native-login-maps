import React, { Component } from "react";
import { View, TouchableOpacity, Text, Picker } from "react-native";
import InputFiled from "../textfiled";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: { text: "", error: false },
      gender: "",
      email: { text: "", error: false },
      password: { text: "", error: false }
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  isValid = () => {
    const { email, password, fullname } = this.state;

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
    if (String(fullname.text).length <= 4) {
      this.setState(per => ({
        ...per,
        fullname: {
          ...per.fullname,
          error: true
        }
      }));
      return false;
    } else {
      this.setState(per => ({
        ...per,
        fullname: {
          ...per.fullname,
          error: false
        }
      }));
    }
    return true;
  };
  _handelSubmit = () => {
    if (this.isValid()) {
      this.props.navigation.navigate("Login");
      // alert("submit form");
    } else {
      // alert("Error in form");
    }
  };
  _handelUpdateGender = gender => {
    this.setState({ gender });
  };
  render() {
    const { email, password, fullname } = this.state;
    return (
      <View>
        <InputFiled
          text={fullname.text}
          error={fullname.error}
          label="Full Name"
          placeholder="Jhon Wick"
          changeText={text =>
            this.setState(per => ({
              ...per,
              fullname: { ...per.fullname, text }
            }))
          }
        />

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
        <Picker
          selectedValue={this.state.gender}
          onValueChange={this._handelUpdateGender}
        >
          <Picker.Item label={"Male"} value={"Male"} />
          <Picker.Item label={"Female"} value={"Female"} />
        </Picker>
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

export default RegisterForm;
