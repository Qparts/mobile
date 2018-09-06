import React, { Component } from "react";
import {
  TouchableOpacity,
  Picker,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  View
} from "react-native";
import { Button } from "../../common";
import { GoogleSignin } from "react-native-google-signin";
import userControllers from "../../providers/controllers/UsersAPIControllers";
import I18n from "../../I18n";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  subContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "4%",
    marginTop: "4%"
  },
  loginText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: "4%"
  },
  inputContainer: {
    marginTop: "3%"
  },
  inputSubContainer: {
    height: 45,
    width: width - 25,
    marginLeft: "1%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 15
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  inputPicker: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  buttonContainer: {
    marginTop: "5%"
  },
  buttonStyle: {
    height: 45,
    width: width - 25,
    borderRadius: 150,
    backgroundColor: "#707070",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  errorStyle: {
    fontSize: 8,
    alignSelf: "center",
    color: "red"
  }
});

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      first_nameError: "",
      last_name: "",
      last_nameError: "",
      email: "",
      emailError: "",
      country_id: "1",
      phone_number: "",
      phone_numberError: "",
      password: "",
      passwordError: "",
      countryCode: "",
      countryCodeError: ""
    };
  }

  _handleRenderSignup() {
    return (
      <Button onPress={this._onSignUpPressed.bind(this)}>
        {I18n.t("signup_handle_send_code")}
      </Button>
    );
  }
  _onSignUpPressed() {
    if (this.handleValidation()) {
      let user = {
        firstName: this.state.first_name,
        lastName: this.state.last_name,
        email: this.state.email,
        countryId: this.state.country_id,
        mobile: this.state.phone_number,
        password: this.state.password,
        countryCode: this.state.countryCode
      };
      new userControllers()
        .signup(user)
        .then(res => {
          if (JSON.stringify(res)) {
            this.props.navigation.navigate("ConfirmCode");
          }
        })
        .catch(err => {
          if (err) {
            console.error(error);
          }
        });
    }
  }
  handleValidation() {
    this.validation();
    if (this.state.first_name === "") {
      return false;
    } else if (this.state.last_name === "") {
      return false;
    } else if (this.state.email === "") {
      return false;
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({
        emailError: (
          <Text style={styles.errorStyle}>
            {I18n.t("signup_error_email_notVaild")}
          </Text>
        )
      });
      return false;
    } else if (this.state.countryCode === "") {
      return false;
    } else if (this.state.phone_number === "") {
      return false;
    } else if (this.state.password === "") {
      return false;
    }
    return true;
  }

  validation() {
    this.state.first_name === ""
      ? this.setState({
          first_nameError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_first_name")}
            </Text>
          )
        })
      : this.setState({ first_nameError: null });
    this.state.last_name === ""
      ? this.setState({
          last_nameError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_last_name")}
            </Text>
          )
        })
      : this.setState({ last_nameError: null });
    this.state.email === ""
      ? this.setState({
          emailError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_email")}
            </Text>
          )
        })
      : this.setState({ emailError: null });
    this.state.password === ""
      ? this.setState({
          passwordError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_password")}
            </Text>
          )
        })
      : this.setState({ passwordError: null });
    this.state.phone_number === ""
      ? this.setState({
          phone_numberError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_phone_no")}
            </Text>
          )
        })
      : this.setState({ phone_numberError: null });
    this.state.countryCode === ""
      ? this.setState({
          countryCodeError: (
            <Text style={styles.errorStyle}>
              {I18n.t("signup_error_CountryCode")}
            </Text>
          )
        })
      : this.setState({ countryCodeError: null });
  }
  validateEmail(value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  async _signIn() {
    GoogleSignin.configure({
      webClientId: "",
      iosClientId: "",
      offlineAccess: true,
      forceConsentPrompt: true
    }).then(() => {
      GoogleSignin.signIn()
        .then(this.handleGoogleLogin)
        .catch(err => {
          console.log("WRONG SIGNIN", err);
        })
        .done();
    });
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.loginText}>Register </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="First Name"
                secureTextEntry={false}
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={first_name => {
                  this.setState({ first_name: first_name });
                  first_name === ""
                    ? this.setState({
                        first_nameError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_first_name")}
                          </Text>
                        )
                      })
                    : this.setState({ first_nameError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.first_nameError}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Last Name"
                secureTextEntry={false}
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={last_name => {
                  this.setState({ last_name: last_name });
                  last_name === ""
                    ? this.setState({
                        last_nameError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_last_name")}
                          </Text>
                        )
                      })
                    : this.setState({ last_nameError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.last_nameError}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Email"
                secureTextEntry={false}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={email => {
                  this.setState({ email: email });
                  email === ""
                    ? this.setState({
                        emailError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_email")}
                          </Text>
                        )
                      })
                    : this.setState({ emailError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.emailError}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={password => {
                  this.setState({ password: password });
                  password === ""
                    ? this.setState({
                        passwordError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_password")}
                          </Text>
                        )
                      })
                    : this.setState({ passwordError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.passwordError}</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Picker
                style={styles.inputPicker}
                selectedValue={this.state.country_id}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ country_id: itemValue })
                }
              >
                <Picker.Item label="Saudi Arabias" value="1" />
                <Picker.Item label="Jordan" value="2" />
              </Picker>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Country Code"
                secureTextEntry={false}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={countryCode => {
                  this.setState({ countryCode: countryCode });
                  countryCode === ""
                    ? this.setState({
                        countryCodeError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_CountryCode")}
                          </Text>
                        )
                      })
                    : this.setState({ countryCodeError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.countryCodeError}</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="+962"
                secureTextEntry={false}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={phone_number => {
                  this.setState({ phone_number: phone_number });
                  phone_number === ""
                    ? this.setState({
                        phone_numberError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("signup_error_phone_no")}
                          </Text>
                        )
                      })
                    : this.setState({ phone_numberError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.phone_numberError}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={this._onSignUpPressed.bind(this)}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Signup;
