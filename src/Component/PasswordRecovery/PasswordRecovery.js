import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput
} from "react-native";
import I18n from "../../I18n";
var { width } = Dimensions.get("window");

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
    fontSize: 17,
    alignSelf: "center",
    color: "red"
  }
});
class PasswordRecovery extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailError: ""
    };
  }

  handleSend() {
    if (this.handleValidation()) {
      this.props.navigation.navigate("ResetPasswrd");
    }
  }
  handleValidation() {
    this.validation();
    if (this.state.email === "") {
      return false;
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({
        usernameError: (
          <Text style={styles.errorStyle}>
            {I18n.t("password_recovery_email_not_valid")}
          </Text>
        )
      });
      return false;
    }
    return true;
  }
  validation() {
    this.state.email === ""
      ? this.setState({
          emailError: (
            <Text style={styles.errorStyle}>
              {I18n.t("password_recovery_email_required")}
            </Text>
          )
        })
      : this.setState({ emailError: null });
  }
  validateEmail(value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.loginText}>
              {I18n.t("password_recovery_forgot_password")}
            </Text>
          </View>
          <View>
            <Text>{I18n.t("password_recovery_enter_your_email")}</Text>
          </View>
          <View>
            <Text>{I18n.t("password_recovery_your_email_with")}</Text>
          </View>
          <View>
            <Text>{I18n.t("password_recovery_your_email")}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Enter Your Email"
                secureTextEntry={false}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={email => {
                  this.setState({ email: email });
                  email === ""
                    ? this.setState({
                        emailError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("Password_recovery_email")}
                          </Text>
                        )
                      })
                    : this.setState({ emailError: null });
                }}
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.emailError}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={this.handleSend.bind(this)}
            >
              <Text style={styles.buttonText}>
                {" "}
                {I18n.t("Password_recovery_send")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default PasswordRecovery;
