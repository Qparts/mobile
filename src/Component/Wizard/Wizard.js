import React, { Component } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Badge } from "../../common";
import I18n from "../../I18n";
import { NavigationActions } from "react-navigation";

var { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  wizardContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  mainContainer: {
    width: width,
    height: height - 200
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  addVechleText: {
    color: "#909090",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: "4%"
  },
  inYourText: {
    fontSize: 20,
    paddingBottom: "6%"
  },
  footerContainer: {
    width: width,
    height: 200,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
    // alignItems: 'center',
  },
  nextText: {
    position: "absolute",
    right: "6%"
  },
  SkipText: {
    position: "absolute",
    left: "6%"
  }
});
class Setp1 extends Component {
  constructor(props) {
    super(props);
  }

  handleOnPress(evt) {
    evt.preventDefault();
    this.props.onPress();
  }
  handleOnSkip() {
    this.props.onSkip.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.wizardContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../Assets/img/skip1.png")}
              />
            </View>
            <View>
              <Text style={styles.addVechleText}>
                {I18n.t("wizard_add_vechle")}
              </Text>
            </View>
            <View>
              <Text style={styles.inYourText}>
                {I18n.t("wizard_in_your_garage")}
              </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_view_manage")} </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_vehicles_in")} </Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
            <TouchableOpacity onPress={() => this.handleOnSkip()}>
              <Text> {I18n.t("wizard_skip")} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Badge color="#dfe3e8" />
            <Badge color="#656e78" />
            <Badge color="#656e78" />
            <Badge color="#656e78" />
          </View>
          <View style={styles.nextText}>
            <TouchableOpacity onPress={e => this.handleOnPress(e)}>
              <Text> {I18n.t("wizard_next")} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class Setp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnPress(evt) {
    evt.preventDefault();
    this.props.onPress();
  }
  handleOnSkip() {
    this.props.onSkip.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={styles.wizardContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../Assets/img/skip2.png")}
              />
            </View>
            <View>
              <Text style={styles.addVechleText}>
                {I18n.t("wizard_search")}
              </Text>
            </View>
            <View>
              <Text style={styles.inYourText}>
                {I18n.t("wizard_find_part")}
              </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_search_for_vechile")} </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_tools")} </Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
            <TouchableOpacity onPress={() => this.handleOnSkip()}>
              <Text> {I18n.t("wizard_skip")} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Badge color="#656e78" />
            <Badge color="#dfe3e8" />
            <Badge color="#656e78" />
            <Badge color="#656e78" />
          </View>
          <View style={styles.nextText}>
            <TouchableOpacity onPress={e => this.handleOnPress(e)}>
              <Text> {I18n.t("wizard_next")} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnPress(evt) {
    evt.preventDefault();
    this.props.onPress();
  }
  handleOnSkip() {
    this.props.onSkip.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={styles.wizardContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../Assets/img/skip3.png")}
              />
            </View>
            <View>
              <Text style={styles.addVechleText}>
                {I18n.t("wizard_custom_order")}
              </Text>
            </View>
            <View>
              <Text style={styles.inYourText}>
                {I18n.t("wizard_just_send_request")}
              </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_till_us_your")} </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_the_part_you")} </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_by_the")}</Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
            <TouchableOpacity onPress={() => this.handleOnSkip()}>
              <Text> {I18n.t("wizard_skip")} </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Badge color="#656e78" />
            <Badge color="#656e78" />
            <Badge color="#dfe3e8" />
            <Badge color="#656e78" />
          </View>
          <View style={styles.nextText}>
            <TouchableOpacity onPress={e => this.handleOnPress(e)}>
              <Text> {I18n.t("wizard_next")} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOnPress(evt) {
    evt.preventDefault();
    this.props.onPress();
  }
  handleOnSkip() {
    this.props.onSkip.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={styles.wizardContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.icon}>
            <View>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../Assets/img/skip4.png")}
              />
            </View>
            <View>
              <Text style={styles.addVechleText}>
                {I18n.t("wizard_in_house")}
              </Text>
            </View>
            <View>
              <Text style={styles.inYourText}>
                {I18n.t("wizard_if_you_have")}
              </Text>
            </View>
            <View>
              <Text>{I18n.t("wizard_ask_a")} </Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Badge color="#656e78" />
            <Badge color="#656e78" />
            <Badge color="#656e78" />
            <Badge color="#dfe3e8" />
          </View>
          <View style={styles.nextText}>
            <TouchableOpacity onPress={() => this.handleOnSkip()}>
              <Text> {I18n.t("wizard_got")} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      step: 1
    };
    this.goToNext = this.goToNext.bind(this);
  }

  goToNext() {
    const { step } = this.state;
    if (step !== 4) {
      this.setState({ step: step + 1 });
    } else {
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Setp1 onSkip={this.props} key="Step 1" onPress={this.goToNext} />
        );
      case 2:
        return (
          <Setp2 onSkip={this.props} key="Step 2" onPress={this.goToNext} />
        );
      case 3:
        return (
          <Step3 onSkip={this.props} key="Step 3" onPress={this.goToNext} />
        );
      case 4:
        return (
          <Step4 onSkip={this.props} key="Step 4" onPress={this.goToNext} />
        );
    }
  }
}
export default Wizard;
