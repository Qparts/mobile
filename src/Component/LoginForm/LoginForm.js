import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import I18n from "../../I18n";
import { Spinner } from "../../common";
import Icon from "react-native-vector-icons/FontAwesome";

var { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  subContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: "6%"
  },
  signInTextContainer: {
    marginLeft: "3%",
    marginTop: "10%"
  },
  signInText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: "7%"
  },
  inputContainer: {
    marginTop: "3%"
  },
  inputSubContainer: {
    height: 45,
    width: width - 80,
    marginLeft: "6%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 150
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  textInput: {
    marginLeft: "3%"
  },
  buttonContainer: {
    marginTop: "5%"
  },
  buttonStyle: {
    height: 45,
    width: width - 85,
    borderRadius: 150,
    marginHorizontal: 25,
    marginVertical: 25,
    backgroundColor: "#707070",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  forgotPassword: {
    color: "#37d1fc",
    fontWeight: "bold"
  },
  socialContainer: {
    // flex: 1,
    // alignItems: "flex-start",
    // marginLeft: "6%"
  },
  socialSubContainer: {
    flexDirection: "row",
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center"
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginRight: "3%"
  },
  footerContianer: {
    flex: 1,
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: width - 300
  },
  orSignInContainer: {
    marginTop: "3%"
  },
  orSignIn: {
    flexDirection: "row",
    marginTop: "3%"
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  errorContainer: {
    alignSelf: "center"
  },
  noAccountRegister: {
    color: "#37d1fc",
    fontWeight: "bold"
  }
});

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: "",
      visible: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate("Dashboard");
    }
  }

  _handleSignup() {
    this.props.navigation.navigate("signup");
  }
  _handlePasswordRecovry() {
    this.props.navigation.navigate("PasswordRecovery");
  }
  _onLoginPressed() {
    const { username, password } = this.state;
    if (this.handleValidation()) {
      this.props.loginUser({ username, password });
    }
  }
  handleValidation() {
    this.validation();
    if (this.state.username === "") {
      return false;
    } else if (this.state.password === "") {
      return false;
    } else if (!this.validateEmail(this.state.username)) {
      this.setState({
        usernameError: (
          <Text style={styles.errorStyle}>
            {I18n.t("login_error_username_notValid")}
          </Text>
        )
      });
      return false;
    }
    return true;
  }

  validation() {
    this.state.username === ""
      ? this.setState({
          usernameError: (
            <Text style={styles.errorStyle}>
              {I18n.t("login_error_username")}
            </Text>
          )
        })
      : this.setState({ usernameError: null });
    this.state.password === ""
      ? this.setState({
          passwordError: (
            <Text style={styles.errorStyle}>
              {I18n.t("login_error_password")}
            </Text>
          )
        })
      : this.setState({ passwordError: null });
  }

  validateEmail(value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  onPressRegister() {
    this.props.navigation.navigate("signup");
  }
  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this._onLoginPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <View style={styles.signInTextContainer}>
            <Text style={styles.signInText}>Sign in</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder={I18n.t("login_input_email_placeholder")}
                secureTextEntry={false}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={username => {
                  this.setState({ username: username });
                  username === ""
                    ? this.setState({
                        usernameError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("login_error_username")}
                          </Text>
                        )
                      })
                    : this.setState({ usernameError: null });
                }}
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorStyle}>{this.state.usernameError}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <TextInput
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder={I18n.t("login_input_password_placeholder")}
                onChangeText={password => {
                  this.setState({ password: password });
                  password === ""
                    ? this.setState({
                        passwordError: (
                          <Text style={styles.errorStyle}>
                            {I18n.t("login_error_password")}
                          </Text>
                        )
                      })
                    : this.setState({ passwordError: null });
                }}
                autoCorrect={false}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.errorStyle}>{this.state.passwordError}</Text>
          </View>
          {this._renderButton()}
          <View>
            <Text
              onPress={this._handlePasswordRecovry.bind(this)}
              style={styles.forgotPassword}
            >
              {I18n.t("login_form_forgot_password")}
            </Text>
          </View>
          <View style={styles.footerContianer}>
            <View style={styles.orSignInContainer}>
              <View style={styles.orSignIn}>
                <Text> {I18n.t("login_form_orsign_inwith")}</Text>
              </View>
            </View>
            <View style={styles.socialContainer}>
              <View style={styles.socialSubContainer}>
                <View>
                  <TouchableOpacity style={styles.socialButton}>
                    <Icon name={"facebook"} size={30} color="#717171" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.socialButton}>
                    <Icon name={"twitter"} size={30} color="#717171" />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.socialButton}>
                    <Icon name={"google-plus"} size={30} color="#717171" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.noAccountContainer}>
                <Text>{I18n.t("login_form_no_account")}</Text>
                <Text
                  style={styles.noAccountRegister}
                  onPress={() => this.onPressRegister()}
                >
                  {I18n.t("login_form_register")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
