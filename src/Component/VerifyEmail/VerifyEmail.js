import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardItem, Button } from "../../common";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 50
  },
  thanksStyle: {
    fontSize: 22,
    alignSelf: "center",
    color: "rgb(42, 55, 68)"
  },
  sendEmailText: {
    fontSize: 16,
    alignSelf: "center",
    color: "#a1acbc"
  },
  domainText: {
    color: "#626c75"
  },
  activateAccountText: {
    fontSize: 16,
    alignSelf: "center",
    color: "#a1acbc"
  }
});
class VerifyEmail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.thanksStyle}>Thank You !</Text>
        </View>
        <View>
          <Text style={styles.sendEmailText}>
            we've sent an email to{" "}
            <Text style={styles.domainText}>your@domain.com </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.activateAccountText}>
            please click the link in that message to activate your account
          </Text>
        </View>
        <CardItem>
          <Button>Take Me To login</Button>
        </CardItem>
      </View>
    );
  }
}

export default VerifyEmail;
