import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import I18n from "../../../I18n";
import userControllers from "../../../providers/controllers/UsersAPIControllers";
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
  }
});

class ConfirmCode extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      codeError: ""
    };
  }
  _onVerviyPressed() {
    if (this.handleValidation()) {
      let user = {
        code: this.state.code
      };
      new userControllers()
        .code(user)
        .then(res => {})
        .catch(err => {
          if (err) {
            console.error(error);
          }
        });
    }
  }
  handleValidation() {
    this.validation();
    if (this.state.code === "") {
      return false;
    }
    return true;
  }
  validation() {
    this.state.code === ""
      ? this.setState({
          codeErrorError: (
            <Text style={styles.errorStyle}>
              {I18n.t("confirm_code_required")}
            </Text>
          )
        })
      : this.setState({ codeErrorError: null });
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.loginText}>
              {I18n.t("confirm_code_verify_your")}{" "}
            </Text>
          </View>
          <View>
            <Text>{I18n.t("confirm_code_enter_your_otp")}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Your Code"
                secureTextEntry={false}
                keyboardType="number-pad"
                autoCorrect={false}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={code => {
                  this.setState({ code: code });
                  code === ""
                    ? this.setState({
                        codeError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("confirm_code_error_code")}
                          </Text>
                        )
                      })
                    : this.setState({ codeError: null });
                }}
              />
            </View>
          </View>
          <Text style={styles.errorStyle}>{this.state.codeError}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={this._onVerviyPressed.bind(this)}
            >
              <Text style={styles.buttonText}>
                {I18n.t("confirm_code_verify_now")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ConfirmCode;
