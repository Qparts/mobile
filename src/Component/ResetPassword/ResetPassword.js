import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card, CardItem, Button } from "../../common";
const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: "center",
    color: "red"
  },
  cardItem: {
    borderColor: "#ddd",
    backgroundColor: "#fff"
  }
});
class ResetPasswrd extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      passwordError: "",
      confirmPassword: "",
      confirmPasswordError: ""
    };
  }

  handleReset() {
    if (this.handleValidation()) {
    }
  }
  handleValidation() {
    this.validation();
    if (this.state.password === "") {
      return false;
    } else if (this.state.confirmPassword === "") {
      return false;
    } else if (this.state.password != this.state.confirmPassword) {
      this.setState({
        confirmPasswordError: (
          <Text style={styles.errorStyle}>
            password and confirmation password do not match .
          </Text>
        )
      });
      return false;
    }
    return true;
  }
  validation() {
    this.state.password === ""
      ? this.setState({
          passwordError: (
            <Text style={styles.errorStyle}>Password required</Text>
          )
        })
      : this.setState({ passwordError: null });
    this.state.confirmPassword === ""
      ? this.setState({
          confirmPasswordError: (
            <Text style={styles.errorStyle}>Confirm Password required</Text>
          )
        })
      : this.setState({ confirmPasswordError: null });
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Text>
              Enter Your New Password below, we're jsut being extra safe
            </Text>
          </CardItem>
          <View style={styles.cardItem}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => {
                this.setState({ password: password });
                password === ""
                  ? this.setState({
                      passwordError: (
                        <Text style={styles.errorStyle}>password Required</Text>
                      )
                    })
                  : this.setState({ passwordError: null });
              }}
              autoCorrect={false}
            />
            <Text style={styles.errorStyle}>{this.state.passwordError}</Text>

            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={confirmPassword => {
                this.setState({ confirmPassword: confirmPassword });
                confirmPassword === ""
                  ? this.setState({
                      confirmPasswordError: (
                        <Text style={styles.errorStyle}>
                          Confirm password Required
                        </Text>
                      )
                    })
                  : this.setState({ confirmPasswordError: null });
              }}
              autoCorrect={false}
            />
          </View>
          <Text style={styles.errorStyle}>{this.state.passwordError}</Text>
          <CardItem>
            <Button onPress={this.handleReset.bind(this)}>Reset</Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default ResetPasswrd;
