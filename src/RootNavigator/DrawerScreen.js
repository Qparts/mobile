import React, { Component } from "react";
import { NavigationActions, DrawerActions } from "react-navigation";
import PropTypes from "prop-types";
import { ScrollView, AsyncStorage, Text, View } from "react-native";
import styles from "./SideMenu.style";
import I18n from "../I18n";

class DrawerScreen extends Component {
  navigateToScreen = (route, I18n_title) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.setParams({ title: I18n_title });
  };

  _logout() {
    AsyncStorage.removeItem("app_token");
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
          <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Garage
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
                Tyres
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Accessories
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Vendor
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Offers
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Blog
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "AboutUs",
                  "About Us"
                )}
              >
              About Us
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Contact Us
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              Track order
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
               Esay Returns
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
               Terms & Conditions
              </Text>
              </View>
              <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
              >
              return Policy
              </Text>
              </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Home",
                  I18n.t("drawer_title_home")
                )}
              >
                {I18n.t("drawer_title_home")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Notification",
                  I18n.t("drawer_title_notification")
                )}
              >
                {I18n.t("drawer_title_notification")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Cart",
                  I18n.t("drawer_title_cart")
                )}
              >
                {I18n.t("drawer_title_cart")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this._logout()}>
                {I18n.t("drawer_title_logout")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Setting",
                  I18n.t("drawer_title_setting")
                )}
              >
                {I18n.t("drawer_title_setting")}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } 
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
