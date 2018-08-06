import React, { Component } from "react";
import { Card, CardItem, Input, Button, Spinner } from "../../common";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import I18n from "../../I18n";

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: "center",
    color: "red"
  },
  orStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  logo: {
    width: 66,
    height: 58,
    borderRadius: 50
  }
});

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameError: "",
      password: "",
      passwordError: ""
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

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this._onLoginPressed.bind(this)}>
        {I18n.t("login_handle_button")}
      </Button>
    );
  }
  render() {
    return (
      <Card>
        <CardItem>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../Assets/img/avatar.png")}
            />
          </View>
        </CardItem>
        <CardItem>
          <Input
            label={I18n.t("login_input_email_label")}
            placeholder={I18n.t("login_input_email_placeholder")}
            secureTextEntry={false}
            keyboardType="email-address"
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
          />
        </CardItem>
        <Text style={styles.errorStyle}>{this.state.usernameError}</Text>

        <CardItem>
          <Input
            label={I18n.t("login_input_password_label")}
            placeholder={I18n.t("login_input_password_placeholder")}
            secureTextEntry
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
          />
        </CardItem>
        <Text style={styles.errorStyle}>{this.state.passwordError}</Text>

        <CardItem>{this._renderButton()}</CardItem>
        <CardItem>
          <Button onPress={this._handleSignup.bind(this)}>
            {I18n.t("login_handle_button_signup")}
          </Button>
        </CardItem>

        <Text style={styles.errorStyle}>{this.props.error}</Text>
      </Card>
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
