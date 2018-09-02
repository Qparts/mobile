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
 import {
  NavigationActions,
 } from "react-navigation";

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
    color: "#47525e",
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
  handleOnSkip(){
     this.props.onSkip.navigation.navigate("Login");
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
              <Text style={styles.addVechleText}>ADD VECHLE</Text>
            </View>
            <View>
              <Text style={styles.inYourText}>IN YOUR GARAGE</Text>
            </View>
            <View>
              <Text>View manage and find parts for the </Text>
            </View>
            <View>
              <Text>vehicles in your garage </Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
            <TouchableOpacity onPress={()=>this.handleOnSkip()}>
              <Text> Skip </Text>
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
              <Text> Next </Text>
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
  handleOnSkip(){
    this.props.onSkip.navigation.navigate("Login");
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
              <Text style={styles.addVechleText}>SEARCH</Text>
            </View>
            <View>
              <Text style={styles.inYourText}>Find Part Of Product</Text>
            </View>
            <View>
              <Text>Search for vechile part,Tyre,Motor Oil </Text>
            </View>
            <View>
              <Text>Tools Or Accessories </Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
          <TouchableOpacity onPress={()=>this.handleOnSkip()}>
              <Text> Skip </Text>
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
              <Text> Next </Text>
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
  handleOnSkip(){
    this.props.onSkip.navigation.navigate("Login");
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
              <Text style={styles.addVechleText}>CUSTOM ORDER</Text>
            </View>
            <View>
              <Text style={styles.inYourText}>Just Send request </Text>
            </View>
            <View>
              <Text>Till us your vechile data and </Text>
            </View>
            <View>
              <Text>the part you want,and we will replay </Text>
            </View>
            <View>
              <Text>by the price and details</Text>
            </View>
          </View>
          <View />
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.SkipText}>
          <TouchableOpacity onPress={()=>this.handleOnSkip()}>
              <Text> Skip </Text>
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
              <Text> Next </Text>
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
  handleOnSkip(){
    this.props.onSkip.navigation.navigate("Login");
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
              <Text style={styles.addVechleText}>IN HOUSE EXPERTS</Text>
            </View>
            <View>
              <Text style={styles.inYourText}>If you Have a Question</Text>
            </View>
            <View>
              <Text>ask a Speciails e know our product </Text>
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
              <Text> GOT IT </Text>
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
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <Setp1 onSkip={this.props} key="Step 1" onPress={this.goToNext} />;
      case 2:
        return <Setp2 onSkip={this.props} key="Step 2" onPress={this.goToNext} />;
      case 3:
        return <Step3 onSkip={this.props}  key="Step 3" onPress={this.goToNext} />;
      case 4:
        return <Step4 onSkip={this.props} key="Step 4" onPress={this.goToNext} />;
    }
  }
}
export default Wizard;
