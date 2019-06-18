import React, { Component } from "react";
import {
  AsyncStorage,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import InputFiled from "../textfiled";
import { StackActions, NavigationActions } from "react-navigation";
import { loginUser } from "../../api/auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { text: "", error: false },
      password: { text: "", error: false },
      isSubmit: false
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  isValid = () => {
    const { email, password } = this.state;
    let temp = true;
    if (!this.validateEmail(email.text)) {
      this.setState(per => ({
        ...per,
        email: {
          ...per.email,
          error: true
        }
      }));
      temp = false;
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
      temp = false;
    } else {
      this.setState(per => ({
        ...per,
        password: {
          ...per.password,
          error: false
        }
      }));
    }
    return temp;
  };
  _handelSubmit = async () => {
    this.setState({ isSubmit: true });

    if (this.isValid()) {
      const { email, password } = this.state;
      try {
        const user = await loginUser(email.text, password.text);
        await AsyncStorage.setItem("@currentUser", user.id);

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })],
          key: null
        });
        this.props.navigation.dispatch(resetAction);
        this.setState({ isSubmit: false });
      } catch (error) {
        console.log(error);
        alert("Problem In Login please Check Your Email & Password");
        this.setState({ isSubmit: false });
      }
    } else {
      // alert("Error in form");
      this.setState({ isSubmit: false });
    }
  };

  render() {
    const { email, password, isSubmit } = this.state;
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
            backgroundColor: isSubmit ? "#ccc" : "#0288D1",
            padding: 10,
            borderRadius: 5,
            marginTop: 50
          }}
          onPress={this._handelSubmit}
          disabled={isSubmit}
        >
          {isSubmit ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ textAlign: "center", color: "#ffffff" }}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginForm;
