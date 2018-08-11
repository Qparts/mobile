import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card, CardItem, Button } from "../../common";
const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: "center",
    color: "red"
  },  cardItem: {
    borderColor: "#ddd",
    backgroundColor: "#fff",
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
        usernameError: <Text style={styles.errorStyle}>email Not Valid</Text>
      });
      return false;
    }
    return true;
  }
  validation() {
    this.state.email === ""
      ? this.setState({
          emailError: <Text style={styles.errorStyle}>email required</Text>
        })
      : this.setState({ emailError: null });
  }

  validateEmail(value) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Text>
              You can recover your lost account information using the form below
              please enter valid e-mail address, your account information will
              be mailed to you shortly
            </Text>
            
           </CardItem>
            <View style={styles.cardItem}>
            <TextInput
              placeholder="Email"
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
               onChangeText={email => {
                this.setState({ email: email });
                email === ""
                  ? this.setState({
                      emailError: (
                        <Text style={styles.errorStyle}>Email Required</Text>
                      )
                    })
                  : this.setState({ emailError: null });
              }}
              autoCorrect={false}
              keyboardType="email-address"
            />
              </View>
           <Text style={styles.errorStyle}>{this.state.emailError}</Text>
          <CardItem>
            <Button onPress={this.handleSend.bind(this)}>Send</Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default PasswordRecovery;
