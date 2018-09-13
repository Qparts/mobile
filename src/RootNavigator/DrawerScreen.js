import React, { Component } from "react";
import { NavigationActions, DrawerActions } from "react-navigation";
import PropTypes from "prop-types";
import { ScrollView, AsyncStorage, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNRestart from "react-native-restart";
import { connect } from "react-redux";
import styles from "./SideMenu.style";
import I18n from "../I18n";

class DrawerScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        this.setState({
          user: JSON.parse(user)
        });
      }
    });
  }
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
    RNRestart.Restart();
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.storyCounters}>
              <View style={styles.imgstoryCounters}>
                <Icon name="user" style={styles.iconCounter} />
                <Text style={styles.iconCounterText}>
                  {this.state.user.firstName}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home","Home")}
              >
                Home
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Garage",
                  I18n.t("drawer_title_Garage")
                )}
              >
                {I18n.t("drawer_title_Garage")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Tyres",
                  I18n.t("drawer_title_Tyres")
                )}
              >
                {I18n.t("drawer_title_Tyres")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Accessories",
                  I18n.t("drawer_title_Accessories")
                )}
              >
                {I18n.t("drawer_title_Accessories")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Vendor",
                  I18n.t("drawer_title_Vendor")
                )}
              >
                {I18n.t("drawer_title_Vendor")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Offers",
                  I18n.t("drawer_title_Offers")
                )}
              >
                {I18n.t("drawer_title_Offers")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "Blog",
                  I18n.t("drawer_title_Blog")
                )}
              >
                {I18n.t("drawer_title_Blog")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "AboutUs",
                  I18n.t("drawer_title_AboutUs")
                )}
              >
                {I18n.t("drawer_title_AboutUs")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "ContactUs",
                  I18n.t("drawer_title_ContactUs")
                )}
              >
                {I18n.t("drawer_title_ContactUs")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "TrackOrder",
                  I18n.t("drawer_title_TrackOrder")
                )}
              >
                {I18n.t("drawer_title_TrackOrder")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "EsayReturns",
                  I18n.t("drawer_title_EsayReturns")
                )}
              >
                {I18n.t("drawer_title_EsayReturns")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "ReturnPolicy",
                  I18n.t("drawer_title_ReturnPolicy")
                )}
              >
                {I18n.t("drawer_title_ReturnPolicy")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen(
                  "TermsConditions",
                  I18n.t("drawer_title_TermsConditions")
                )}
              >
                {I18n.t("drawer_title_TermsConditions")}
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
            {/* <View style={styles.navSectionStyle}>
              <Text style={styles.navTextFollowUs}>Follow Us @</Text>
            </View> */}
            {/* <View style={styles.containerbutton}>
              <View style={styles.navButtonFacebook}>
                <Icon.Button name="facebook" />
              </View>
              <View style={styles.navButtonTwitter}>
                <Icon.Button name="twitter" backgroundColor="#37d1fc" />
              </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(DrawerScreen);
