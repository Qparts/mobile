import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(42, 55, 68)"
  },
  label: {
    fontSize: 16,
    paddingLeft: 10,
    flex: 1
  },
  input: {
    fontSize: 22,
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    paddingBottom: 10
  }
});

class ConfirmCode extends Component {
  render() {
    const { navigation } = this.props;
    const code = navigation.getParam("code", "NO-CODE");

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={code}
          keyboardType={"phone-pad"}
        />
      </View>
    );
  }
}

export default ConfirmCode;
