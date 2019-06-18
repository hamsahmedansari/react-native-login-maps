import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  AsyncStorage,
  Picker,
  ActivityIndicator,
  Alert
} from "react-native";
import InputFiled from "../textfiled";
import { registerUser } from "../../api/auth";
import { StackActions, NavigationActions } from "react-navigation";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: { text: "", error: false },
      gender: "Male",
      email: { text: "", error: false },
      password: { text: "", error: false },
      confirmPassword: { text: "", error: false },
      isSubmit: false
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  isValid = () => {
    const { email, password, fullname, confirmPassword } = this.state;
    let temp = true;
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
    if (String(confirmPassword.text).length !== String(password.text).length) {
      this.setState(per => ({
        ...per,
        confirmPassword: {
          ...per.confirmPassword,
          error: true
        }
      }));
      temp = false;
    } else {
      this.setState(per => ({
        ...per,
        confirmPassword: {
          ...per.confirmPassword,
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
    if (String(fullname.text).length <= 4) {
      this.setState(per => ({
        ...per,
        fullname: {
          ...per.fullname,
          error: true
        }
      }));
      temp = false;
    } else {
      this.setState(per => ({
        ...per,
        fullname: {
          ...per.fullname,
          error: false
        }
      }));
    }
    return temp;
  };
  _handelSubmit = async () => {
    this.setState({ isSubmit: true });
    if (this.isValid()) {
      const { email, fullname, password, gender } = this.state;
      try {
        const uid = await registerUser(
          email.text,
          fullname.text,
          password.text,
          gender
        );
        await AsyncStorage.setItem("@currentUser", uid);

        this.setState({ isSubmit: false });
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })],
          key: null
        });
        this.props.navigation.dispatch(resetAction);
      } catch (error) {
        console.log(error);

        if (
          error.message ===
          "The email address is already in use by another account."
        ) {
          Alert.alert(
            "Error Email Already Exist",
            "The email address is already in use by another account."
          );
          this.props.navigation.navigate("Login");
        }
        this.setState({ isSubmit: false });
      }
    } else {
      this.setState({ isSubmit: false });
    }
  };
  _handelUpdateGender = gender => {
    this.setState({ gender });
  };
  render() {
    const { email, password, fullname, confirmPassword, isSubmit } = this.state;
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

        <InputFiled
          text={confirmPassword.text}
          error={confirmPassword.error}
          label="Confirm Password"
          placeholder="abc123"
          errorMsg="Password don't Matched"
          isPassword={true}
          changeText={text =>
            this.setState(per => ({
              ...per,
              confirmPassword: { ...per.confirmPassword, text }
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
            <Text style={{ textAlign: "center", color: "#ffffff" }}>
              Register
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegisterForm;
