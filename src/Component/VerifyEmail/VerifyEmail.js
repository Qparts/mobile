import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CardItem, Button } from "../../common";
import I18n from "../../I18n";
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
          <Text style={styles.thanksStyle}>
            {I18n.t("verify_email_thank_you")}
          </Text>
        </View>
        <View>
          <Text style={styles.sendEmailText}>
            <Text style={styles.domainText}>
              {I18n.t("verify_email_domain")}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.activateAccountText}>
            {I18n.t("verify_email_please")}
          </Text>
        </View>
        <CardItem>
          <Button>{I18n.t("verify_email_take_me")}</Button>
        </CardItem>
      </View>
    );
  }
}

export default VerifyEmail;
