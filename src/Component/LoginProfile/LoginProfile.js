import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text
} from "react-native";
import I18n from "../../I18n";
var { width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginText: {
    color: "#909090",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: "4%"
  },
  loginTextMember: {
    color: "#909090",
    fontSize: 10,
    paddingTop: "4%"
  },
  loginTextHello: {
    color: "#212121",
    fontSize: 16,
    marginTop: "8%",
    fontWeight: "bold"
  },
  loginCanUse: {
    color: "#909090",
    fontSize: 10
  },
  buttonContainer: {
    marginTop: "5%"
  },
  buttonStyle: {
    height: 40,
    width: width - 150,
    borderRadius: 25,
    marginHorizontal: 25,
    marginVertical: 10,
    backgroundColor: "#707070",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  buttonSigninStyle: {
    height: 40,
    width: width - 150,
    borderRadius: 25,
    marginHorizontal: 25,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    borderColor: "#3b3b3b",
    borderWidth: 1
  },
  buttonText1: {
    color: "#3b3b3b",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: "3%"
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
  }
});
class LoginProfile extends Component {
  onPressSignIn() {
    this.props.navigation.navigate("Login");
  }
  onPressRegister() {
    this.props.navigation.navigate("signup");
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.loginText}>
              {I18n.t("login_profile_login_text")}
            </Text>
          </View>
          <View>
            <Text style={styles.loginTextMember}>
              {I18n.t("login_profile_login_text_member")}
            </Text>
          </View>
          <View>
            <Text style={styles.loginTextHello}>
              {I18n.t("login_profile_hello")}
            </Text>
          </View>
          <View>
            <Text style={styles.loginCanUse}>
              {I18n.t("login_profile_you_can")}
            </Text>
            <Text style={styles.loginCanUse}>
              {I18n.t("login_profile_social")}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.onPressRegister()}
            >
              <Text style={styles.buttonText}>
                {I18n.t("login_profile_register")}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonSigninStyle}
              onPress={() => this.onPressSignIn()}
            >
              <Text style={styles.buttonText1}>
                {I18n.t("login_profile_sign_in")}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{I18n.t("login_profile_signin_with")}</Text>
          </View>
          <View style={styles.socialContainer}>
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
        </View>
      </View>
    );
  }
}

export default LoginProfile;
