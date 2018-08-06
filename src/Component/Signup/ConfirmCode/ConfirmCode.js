import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Card, CardItem, Input, Button } from "../../../common";
import userControllers from "../../../providers/controllers/UsersAPIControllers";

const styles = StyleSheet.create({
  verifyText: {
    fontSize: 20,
    color: "#47525e"
  },
  codeSms: {
    fontSize: 14
  },
  errorStyle: {
    fontSize: 14,
    alignSelf: "center",
    color: "red"
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
          codeErrorError: <Text style={styles.errorStyle}>Code Required</Text>
        })
      : this.setState({ codeErrorError: null });
  }
  render() {
    return (
      <Card>
        <View>
          <Card>
            <CardItem>
              <Text style={styles.verifyText}> Verify Mobile Number</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.codeSms}>
                {" "}
                Please enter your code from SMS we've send you
              </Text>
            </CardItem>
            <CardItem>
              <Input
                secureTextEntry={false}
                style={styles.input}
                placeholder={code}
                keyboardType={"phone-pad"}
                onChangeText={code => {
                  this.setState({ code: code });
                  code === ""
                    ? this.setState({
                        codeError: (
                          <Text style={styles.errorStyle}>Error Code</Text>
                        )
                      })
                    : this.setState({ codeError: null });
                }}
              />
            </CardItem>
            <Text style={styles.errorStyle}>{this.state.codeError}</Text>
            <CardItem>
              <Button onPress={this._onVerviyPressed.bind(this)}>Verify</Button>
            </CardItem>
          </Card>
        </View>
      </Card>
    );
  }
}

export default ConfirmCode;
